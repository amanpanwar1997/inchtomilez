import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from 'react';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router';
import {
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from 'lucide-react';

import {
  useAdminAuth,
} from '../../utils/adminAuth';
import {
  ROUTES,
} from '../../config/routes';


export function AdminLoginPage() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const {
    login,
    isAuthenticated,
  } =
    useAdminAuth();

  const [
    email,
    setEmail,
  ] =
    useState('');

  const [
    password,
    setPassword,
  ] =
    useState('');

  const [
    showPassword,
    setShowPassword,
  ] =
    useState(false);

  const [
    isSubmitting,
    setIsSubmitting,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState('');

  const [
    success,
    setSuccess,
  ] =
    useState('');


  /**
   * Accept redirects only to this site's admin area.
   * Prevents arbitrary/open redirect values.
   */
  const redirectTarget =
    useMemo(() => {
      const params =
        new URLSearchParams(
          location.search
        );

      const requested =
        params.get(
          'redirect'
        );

      if (
        requested &&
        requested.startsWith(
          '/admin'
        ) &&
        !requested.startsWith(
          '//'
        )
      ) {
        return requested;
      }

      return ROUTES.admin.root;
    }, [
      location.search,
    ]);


  useEffect(() => {
    if (
      isAuthenticated
    ) {
      navigate(
        redirectTarget,
        {
          replace: true,
        }
      );
    }
  }, [
    isAuthenticated,
    navigate,
    redirectTarget,
  ]);


  const handleSubmit =
    async (
      event:
        FormEvent<HTMLFormElement>
    ) => {
      event.preventDefault();

      setError('');
      setSuccess('');

      const normalizedEmail =
        email
          .trim()
          .toLowerCase();

      if (
        !normalizedEmail ||
        !password
      ) {
        setError(
          'Email and password are required'
        );

        return;
      }

      if (
        !normalizedEmail.includes('@')
      ) {
        setError(
          'Please enter a valid email address'
        );

        return;
      }

      if (
        password.length < 6
      ) {
        setError(
          'Password must be at least 6 characters'
        );

        return;
      }

      setIsSubmitting(true);

      try {
        const result =
          await login(
            normalizedEmail,
            password
          );

        if (
          result.success
        ) {
          setSuccess(
            'Login successful.'
          );

          navigate(
            redirectTarget,
            {
              replace: true,
            }
          );

          return;
        }

        setError(
          result.error ||
            'Login failed. Please check your credentials.'
        );
      } catch {
        setError(
          'Authentication service is unavailable. Please try again.'
        );
      } finally {
        setIsSubmitting(
          false
        );
      }
    };


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[30px] font-medium text-white mb-2">
            Inchtomilez Admin
          </h1>

          <p className="text-[15px] text-white/60">
            Sign in to manage your website
          </p>
        </div>


        {/* Login Form */}
        <div className="glass p-8 rounded-xl border border-white/10">
          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[14px] font-medium text-white mb-2"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                  aria-hidden="true"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="username"
                  value={
                    email
                  }
                  onChange={(
                    event
                  ) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="admin@inchtomilez.com"
                  className="w-full bg-black/50 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  disabled={
                    isSubmitting
                  }
                  required
                />
              </div>
            </div>


            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-[14px] font-medium text-white mb-2"
              >
                Password
              </label>

              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                  aria-hidden="true"
                />

                <input
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  value={
                    password
                  }
                  onChange={(
                    event
                  ) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  placeholder="••••••••"
                  className="w-full bg-black/50 border border-white/10 rounded-lg pl-11 pr-12 py-3 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  disabled={
                    isSubmitting
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (current) =>
                        !current
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>


            {/* Error */}
            {error && (
              <div
                className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-lg p-4"
                role="alert"
              >
                <AlertCircle
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />

                <p className="text-[14px] text-red-500">
                  {error}
                </p>
              </div>
            )}


            {/* Success */}
            {success && (
              <div
                className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-lg p-4"
                role="status"
              >
                <CheckCircle
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />

                <p className="text-[14px] text-green-500">
                  {success}
                </p>
              </div>
            )}


            {/* Submit */}
            <button
              type="submit"
              disabled={
                isSubmitting
              }
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold text-[15px] hover:bg-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? 'Signing in...'
                : 'Sign In'}
            </button>


            {/* Forgot Password */}
            <div className="text-center">
              <Link
                to={
                  ROUTES.admin
                    .forgotPassword
                }
                className="text-[14px] text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>


        {/* Local development help only */}
        {import.meta.env.DEV && (
          <div className="mt-6 glass p-4 rounded-lg border border-white/10">
            <p className="text-[13px] text-white/60 font-medium">
              Local Development Login
            </p>

            <p className="text-[12px] text-white/40 mt-2 leading-relaxed">
              Demo credentials are loaded from your local
              <code className="mx-1 text-yellow-500">
                .env.local
              </code>
              file and are not displayed here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
