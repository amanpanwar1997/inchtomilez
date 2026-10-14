import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router';

import { ROUTES } from '../config/routes';


// ============================================================================
// TYPES
// ============================================================================

export type UserRole = 'admin' | 'editor' | 'viewer';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  lastLogin?: string;
  createdAt: string;
  status: 'active' | 'disabled';
}

interface AdminAuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    error?: string;
  }>;

  logout: () => Promise<void>;

  resetPassword: (
    email: string
  ) => Promise<{
    success: boolean;
    error?: string;
  }>;

  updatePassword: (
    token: string,
    newPassword: string
  ) => Promise<{
    success: boolean;
    error?: string;
  }>;

  hasPermission: (
    requiredRole: UserRole
  ) => boolean;
}


// ============================================================================
// CONTEXT
// ============================================================================

const AdminAuthContext =
  createContext<AdminAuthContextType | undefined>(
    undefined
  );

const roleHierarchy: UserRole[] = [
  'viewer',
  'editor',
  'admin',
];

const DEV_USER_STORAGE_KEY =
  'inchtomilez_admin_dev_user';

const DEV_EXPIRY_STORAGE_KEY =
  'inchtomilez_admin_dev_session_expiry';


// ============================================================================
// HELPERS
// ============================================================================

function isAdminUser(
  value: unknown
): value is AdminUser {
  if (
    !value ||
    typeof value !== 'object'
  ) {
    return false;
  }

  const user =
    value as Partial<AdminUser>;

  return Boolean(
    typeof user.id === 'string' &&
    typeof user.email === 'string' &&
    typeof user.name === 'string' &&
    (
      user.role === 'admin' ||
      user.role === 'editor' ||
      user.role === 'viewer'
    ) &&
    (
      user.status === 'active' ||
      user.status === 'disabled'
    )
  );
}


async function readJsonSafely(
  response: Response
): Promise<any | null> {
  const contentType =
    response.headers.get('content-type') || '';

  if (
    !contentType.includes('application/json')
  ) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
}


function clearDevSession() {
  if (
    typeof window === 'undefined'
  ) {
    return;
  }

  localStorage.removeItem(
    DEV_USER_STORAGE_KEY
  );

  localStorage.removeItem(
    DEV_EXPIRY_STORAGE_KEY
  );
}


function getDevelopmentDemoUser(
  email: string,
  password: string
): AdminUser | null {
  if (!import.meta.env.DEV) {
    return null;
  }

  /**
   * Put these only in your local .env.local file.
   *
   * Example:
   *
   * VITE_ADMIN_DEMO_EMAIL=admin@inchtomilez.com
   * VITE_ADMIN_DEMO_PASSWORD=your-local-password
   * VITE_ADMIN_DEMO_NAME=Local Admin
   * VITE_ADMIN_DEMO_ROLE=admin
   *
   * Never commit .env.local to Git.
   */
  const demoEmail =
    String(
      import.meta.env.VITE_ADMIN_DEMO_EMAIL || ''
    )
      .trim()
      .toLowerCase();

  const demoPassword =
    String(
      import.meta.env.VITE_ADMIN_DEMO_PASSWORD || ''
    );

  const demoName =
    String(
      import.meta.env.VITE_ADMIN_DEMO_NAME ||
      'Local Admin'
    ).trim();

  const requestedRole =
    String(
      import.meta.env.VITE_ADMIN_DEMO_ROLE ||
      'admin'
    ).trim();

  const demoRole: UserRole =
    requestedRole === 'viewer' ||
    requestedRole === 'editor'
      ? requestedRole
      : 'admin';

  if (
    !demoEmail ||
    !demoPassword
  ) {
    return null;
  }

  if (
    email !== demoEmail ||
    password !== demoPassword
  ) {
    return null;
  }

  return {
    id: 'local-dev-admin',
    email: demoEmail,
    name: demoName,
    role: demoRole,
    avatar:
      'https://ui-avatars.com/api/?name=Local+Admin&background=eab308&color=000',
    lastLogin:
      new Date().toISOString(),
    createdAt:
      '2026-01-01T00:00:00Z',
    status: 'active',
  };
}


// ============================================================================
// PROVIDER
// ============================================================================

export function AdminAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const navigate =
    useNavigate();

  const [
    user,
    setUser,
  ] =
    useState<AdminUser | null>(
      null
    );

  const [
    isLoading,
    setIsLoading,
  ] =
    useState(true);


  // ==========================================================================
  // SESSION CHECK
  // ==========================================================================

  useEffect(() => {
    let cancelled = false;

    const checkSession =
      async () => {
        setIsLoading(true);

        try {
          /**
           * LOCAL DEVELOPMENT SESSION
           *
           * This exists only for local development convenience.
           * Production does not trust localStorage.
           */
          if (import.meta.env.DEV) {
            const storedUser =
              localStorage.getItem(
                DEV_USER_STORAGE_KEY
              );

            const storedExpiry =
              localStorage.getItem(
                DEV_EXPIRY_STORAGE_KEY
              );

            if (
              storedUser &&
              storedExpiry
            ) {
              const expiry =
                Number(storedExpiry);

              if (
                Number.isFinite(expiry) &&
                Date.now() < expiry
              ) {
                try {
                  const parsed =
                    JSON.parse(storedUser);

                  if (
                    isAdminUser(parsed) &&
                    parsed.status === 'active'
                  ) {
                    if (!cancelled) {
                      setUser(parsed);
                    }

                    return;
                  }
                } catch {
                  // Invalid local dev session.
                }
              }
            }

            clearDevSession();

            if (!cancelled) {
              setUser(null);
            }

            return;
          }


          /**
           * PRODUCTION SESSION
           *
           * Backend should validate a Secure + HttpOnly cookie.
           */
          const response =
            await fetch(
              '/api/admin/session',
              {
                method: 'GET',
                credentials: 'include',
                headers: {
                  Accept: 'application/json',
                },
              }
            );

          const data =
            await readJsonSafely(
              response
            );

          if (
            response.ok &&
            isAdminUser(data?.user) &&
            data.user.status === 'active'
          ) {
            if (!cancelled) {
              setUser(data.user);
            }

            return;
          }

          if (!cancelled) {
            setUser(null);
          }
        } catch (error) {
          if (import.meta.env.DEV) {
            console.error(
              'Admin session check error:',
              error
            );
          }

          if (!cancelled) {
            setUser(null);
          }
        } finally {
          if (!cancelled) {
            setIsLoading(false);
          }
        }
      };

    void checkSession();

    return () => {
      cancelled = true;
    };
  }, []);


  // ==========================================================================
  // LOGIN
  // ==========================================================================

  const login =
    async (
      email: string,
      password: string
    ): Promise<{
      success: boolean;
      error?: string;
    }> => {
      const normalizedEmail =
        email
          .trim()
          .toLowerCase();

      if (
        !normalizedEmail ||
        !password
      ) {
        return {
          success: false,
          error:
            'Email and password are required',
        };
      }

      setIsLoading(true);

      try {
        /**
         * LOCAL DEVELOPMENT LOGIN
         *
         * Credentials come from .env.local,
         * never from source code.
         */
        if (import.meta.env.DEV) {
          const demoUser =
            getDevelopmentDemoUser(
              normalizedEmail,
              password
            );

          if (!demoUser) {
            const configured =
              Boolean(
                import.meta.env
                  .VITE_ADMIN_DEMO_EMAIL
              ) &&
              Boolean(
                import.meta.env
                  .VITE_ADMIN_DEMO_PASSWORD
              );

            return {
              success: false,
              error: configured
                ? 'Invalid local development credentials'
                : 'Local admin credentials are not configured. Add VITE_ADMIN_DEMO_EMAIL and VITE_ADMIN_DEMO_PASSWORD to .env.local.',
            };
          }

          localStorage.setItem(
            DEV_USER_STORAGE_KEY,
            JSON.stringify(
              demoUser
            )
          );

          const expiry =
            Date.now() +
            24 *
              60 *
              60 *
              1000;

          localStorage.setItem(
            DEV_EXPIRY_STORAGE_KEY,
            String(expiry)
          );

          setUser(demoUser);

          return {
            success: true,
          };
        }


        /**
         * PRODUCTION LOGIN
         *
         * Backend must:
         * 1. validate credentials,
         * 2. create the session server-side,
         * 3. set Secure + HttpOnly + SameSite cookie,
         * 4. return { user }.
         */
        const response =
          await fetch(
            '/api/admin/login',
            {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type':
                  'application/json',
                Accept:
                  'application/json',
              },
              body:
                JSON.stringify({
                  email:
                    normalizedEmail,
                  password,
                }),
            }
          );

        const data =
          await readJsonSafely(
            response
          );

        if (!response.ok) {
          return {
            success: false,
            error:
              data?.error ||
              data?.message ||
              'Invalid email or password',
          };
        }

        if (
          !isAdminUser(data?.user) ||
          data.user.status !== 'active'
        ) {
          return {
            success: false,
            error:
              'Invalid authentication response',
          };
        }

        setUser(data.user);

        return {
          success: true,
        };
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error(
            'Admin login error:',
            error
          );
        }

        return {
          success: false,
          error:
            'Authentication service is unavailable. Please try again.',
        };
      } finally {
        setIsLoading(false);
      }
    };


  // ==========================================================================
  // LOGOUT
  // ==========================================================================

  const logout =
    async () => {
      setUser(null);

      if (import.meta.env.DEV) {
        clearDevSession();

        navigate(
          ROUTES.admin.login,
          {
            replace: true,
          }
        );

        return;
      }

      try {
        await fetch(
          '/api/admin/logout',
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              Accept:
                'application/json',
            },
          }
        );
      } catch {
        // User is still cleared locally.
      } finally {
        navigate(
          ROUTES.admin.login,
          {
            replace: true,
          }
        );
      }
    };


  // ==========================================================================
  // RESET PASSWORD
  // ==========================================================================

  const resetPassword =
    async (
      email: string
    ): Promise<{
      success: boolean;
      error?: string;
    }> => {
      const normalizedEmail =
        email
          .trim()
          .toLowerCase();

      if (!normalizedEmail) {
        return {
          success: false,
          error:
            'Email is required',
        };
      }

      if (import.meta.env.DEV) {
        return {
          success: false,
          error:
            'Password reset is disabled for the local demo account.',
        };
      }

      try {
        const response =
          await fetch(
            '/api/admin/reset-password',
            {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type':
                  'application/json',
                Accept:
                  'application/json',
              },
              body:
                JSON.stringify({
                  email:
                    normalizedEmail,
                }),
            }
          );

        const data =
          await readJsonSafely(
            response
          );

        if (!response.ok) {
          return {
            success: false,
            error:
              data?.error ||
              data?.message ||
              'Password reset request failed',
          };
        }

        return {
          success: true,
        };
      } catch {
        return {
          success: false,
          error:
            'Password reset service is unavailable. Please try again.',
        };
      }
    };


  // ==========================================================================
  // UPDATE PASSWORD
  // ==========================================================================

  const updatePassword =
    async (
      token: string,
      newPassword: string
    ): Promise<{
      success: boolean;
      error?: string;
    }> => {
      if (
        !token ||
        !newPassword
      ) {
        return {
          success: false,
          error:
            'Token and new password are required',
        };
      }

      if (
        newPassword.length < 8
      ) {
        return {
          success: false,
          error:
            'Password must be at least 8 characters',
        };
      }

      if (import.meta.env.DEV) {
        return {
          success: false,
          error:
            'Password update is disabled for the local demo account.',
        };
      }

      try {
        const response =
          await fetch(
            '/api/admin/update-password',
            {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type':
                  'application/json',
                Accept:
                  'application/json',
              },
              body:
                JSON.stringify({
                  token,
                  newPassword,
                }),
            }
          );

        const data =
          await readJsonSafely(
            response
          );

        if (!response.ok) {
          return {
            success: false,
            error:
              data?.error ||
              data?.message ||
              'Password update failed',
          };
        }

        return {
          success: true,
        };
      } catch {
        return {
          success: false,
          error:
            'Password update service is unavailable. Please try again.',
        };
      }
    };


  // ==========================================================================
  // PERMISSIONS
  // ==========================================================================

  const hasPermission = (
    requiredRole: UserRole
  ): boolean => {
    if (!user) {
      return false;
    }

    const userIndex =
      roleHierarchy.indexOf(
        user.role
      );

    const requiredIndex =
      roleHierarchy.indexOf(
        requiredRole
      );

    return (
      userIndex >=
      requiredIndex
    );
  };


  // ==========================================================================
  // PROVIDER
  // ==========================================================================

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        isAuthenticated:
          Boolean(user),
        isLoading,
        login,
        logout,
        resetPassword,
        updatePassword,
        hasPermission,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}


// ============================================================================
// HOOK
// ============================================================================

export function useAdminAuth() {
  const context =
    useContext(
      AdminAuthContext
    );

  if (!context) {
    throw new Error(
      'useAdminAuth must be used within AdminAuthProvider'
    );
  }

  return context;
}


// ============================================================================
// PROTECTED ROUTE
// ============================================================================

export function AdminProtectedRoute({
  children,
  requiredRole = 'viewer',
}: {
  children: ReactNode;
  requiredRole?: UserRole;
}) {
  const location =
    useLocation();

  const {
    isAuthenticated,
    hasPermission,
    isLoading,
  } =
    useAdminAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-[15px]">
          Loading...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    const redirectTarget =
      `${location.pathname}${location.search}`;

    return (
      <Navigate
        to={`${ROUTES.admin.login}?redirect=${encodeURIComponent(
          redirectTarget
        )}`}
        replace
      />
    );
  }

  if (
    !hasPermission(
      requiredRole
    )
  ) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="glass p-8 rounded-xl max-w-md text-center">
          <h1 className="text-[22px] font-bold text-white mb-4">
            Access Denied
          </h1>

          <p className="text-[15px] text-white/70 mb-6">
            You don't have permission to access this page.
            Required role: {requiredRole}
          </p>

          <Link
            to={ROUTES.admin.root}
            className="inline-flex bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold text-[15px] hover:bg-yellow-400 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
