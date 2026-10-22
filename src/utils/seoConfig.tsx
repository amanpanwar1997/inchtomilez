
/**
 * ============================================================================
 * INCHTOMILEZ — LEGACY SEO COMPATIBILITY BRIDGE
 * ============================================================================
 *
 * Version: 5.5
 *
 * PURPOSE
 * -------
 * Preserve compatibility with legacy pages, CMS tools and admin components
 * while using seo-master.tsx as the authoritative frontend SEO source.
 *
 * SEO ARCHITECTURE
 * ----------------
 * seo-database-complete.tsx
 *          |
 *          v
 * seo-master.tsx
 *          |
 *          +----> SEOHeadUnified.tsx
 *          |
 *          +----> seoConfig.tsx (this compatibility bridge)
 *
 * IMPORTANT RULES
 * ---------------
 * 1. Never duplicate the SEO database here.
 * 2. Never duplicate path-normalization logic.
 * 3. Preserve all existing public exports.
 * 4. Preserve existing Supabase backend integration.
 * 5. Do not automatically mutate static SEO metadata after API updates.
 * 6. Preserve homepage fallback for legacy consumers.
 * 7. Do not add new dependencies.
 *
 * NOTE
 * ----
 * Backend updates do not automatically modify the static SEO database,
 * GitHub source files or previously generated prerendered HTML.
 *
 * ============================================================================
 */

import {
  SEO_DATABASE,
  SITE_CONFIG,
  normalizeSEOPath,
  type SEOData,
} from "./seo-master";

import {
  projectId,
  publicAnonKey,
} from "./supabase/info";

// ============================================================================
// PUBLIC RE-EXPORTS
// ============================================================================

/**
 * Preserve existing named imports used across the application.
 *
 * Do not rename or remove these without auditing all consumers.
 */
export {
  useSEO,
  SITE_CONFIG,
  SEO_DATABASE,
  generateBreadcrumbs,
  SITELINKS_SEARCH_BOX,
  ORGANIZATION_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  generateArticleSchema,
  generateServiceSchema,
} from "./seo-master";

// ============================================================================
// TYPES
// ============================================================================

/**
 * Represents the existing frontend SEO database.
 */
export type SEOConfig = SEOData;

/**
 * Supports the existing backend update contract.
 *
 * The backend may accept additional CMS-specific properties, so this
 * interface intentionally allows them without requiring unsafe `any`.
 */
export type SEOConfigUpdate = Partial<SEOData> &
  Record<string, unknown>;

/**
 * Return type for the legacy admin SEO listing.
 */
export type SEOConfigListItem = SEOData & {
  path: string;
};

/**
 * The backend may return additional response fields.
 */
export interface SEOUpdateResponse {
  success?: boolean;
  error?: string;
  message?: string;
  [key: string]: unknown;
}

// ============================================================================
// LEGACY SEO_CONFIG ALIAS
// ============================================================================

/**
 * Older components access:
 *
 * SEO_CONFIG["/about"]
 *
 * Keep this as a reference to the central SEO database.
 *
 * No second database is created.
 */
export const SEO_CONFIG: Record<string, SEOData> =
  SEO_DATABASE;

// ============================================================================
// BACKEND CONFIGURATION
// ============================================================================

/**
 * Preserve the original Supabase Edge Function route.
 *
 * This is the endpoint from the existing project code.
 * Do not rename the function without updating the backend.
 */
const SEO_UPDATE_FUNCTION =
  "make-server-9c8e64e4/seo-system/page/update";

/**
 * Construct the backend URL from the existing project configuration.
 */
function getSEOUpdateEndpoint(): string {
  const normalizedProjectId = String(
    projectId ?? ""
  ).trim();

  if (!normalizedProjectId) {
    throw new Error(
      "Supabase project ID is not configured."
    );
  }

  return (
    `https://${normalizedProjectId}.supabase.co/functions/v1/` +
    SEO_UPDATE_FUNCTION
  );
}

// ============================================================================
// INTERNAL HELPERS
// ============================================================================

/**
 * Ensure callers cannot accidentally pass an invalid path value.
 *
 * The shared master normalizer remains responsible for producing the
 * canonical pathname format.
 */
function resolveSEOPath(path: string): string {
  if (typeof path !== "string") {
    throw new TypeError(
      "SEO path must be a string."
    );
  }

  const normalized = normalizeSEOPath(path);

  return normalized || "/";
}

/**
 * Determine whether a value is a plain object.
 *
 * Arrays, null and primitive values are rejected.
 */
function isPlainObject(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) ===
      Object.prototype
  );
}

/**
 * Convert an unknown API response into a readable error message.
 */
function getAPIErrorMessage(
  result: unknown,
  fallback: string
): string {
  if (
    typeof result === "object" &&
    result !== null
  ) {
    const record = result as Record<
      string,
      unknown
    >;

    if (
      typeof record.error === "string" &&
      record.error.trim()
    ) {
      return record.error;
    }

    if (
      typeof record.message === "string" &&
      record.message.trim()
    ) {
      return record.message;
    }
  }

  return fallback;
}

/**
 * Safely parse JSON responses without assuming that every response
 * has a JSON body.
 */
async function parseAPIResponse(
  response: Response
): Promise<SEOUpdateResponse | null> {
  const responseText = await response.text();

  if (!responseText.trim()) {
    return null;
  }

  try {
    const parsed: unknown =
      JSON.parse(responseText);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      !Array.isArray(parsed)
    ) {
      return parsed as SEOUpdateResponse;
    }

    return null;
  } catch {
    return null;
  }
}

// ============================================================================
// GET SEO CONFIG
// ============================================================================

/**
 * Backward-compatible SEO lookup.
 *
 * Behavior:
 * - Known routes return their exact database entry.
 * - Trailing slashes and query strings are normalized.
 * - Unknown routes retain the existing homepage fallback.
 *
 * The homepage fallback is preserved to avoid breaking legacy consumers.
 *
 * IMPORTANT:
 * Do not use this fallback to determine whether a route genuinely exists.
 * Use hasSEOConfig() or getExactSEOConfig() instead.
 */
export function getSEOConfig(
  path: string
): SEOData {
  const normalizedPath = resolveSEOPath(path);

  return (
    SEO_DATABASE[normalizedPath] ??
    SEO_DATABASE["/"]
  );
}

// ============================================================================
// GET EXACT SEO CONFIG
// ============================================================================

/**
 * Returns metadata only when the requested route has an explicit
 * entry in the static SEO database.
 *
 * Unlike getSEOConfig(), this function does not fall back to the
 * homepage.
 *
 * Useful for:
 * - Route audits
 * - Prerender validation
 * - Missing metadata detection
 * - Admin dashboards
 */
export function getExactSEOConfig(
  path: string
): SEOData | undefined {
  const normalizedPath = resolveSEOPath(path);

  return SEO_DATABASE[normalizedPath];
}

// ============================================================================
// CHECK WHETHER ROUTE HAS SEO
// ============================================================================

/**
 * Returns true only when the normalized route has an explicit entry.
 *
 * This does not validate whether the route is actually registered
 * in React Router or present in the sitemap.
 */
export function hasSEOConfig(
  path: string
): boolean {
  const normalizedPath = resolveSEOPath(path);

  return Object.prototype.hasOwnProperty.call(
    SEO_DATABASE,
    normalizedPath
  );
}

// ============================================================================
// GET ALL SEO ROUTES
// ============================================================================

/**
 * Returns all configured static SEO database keys.
 *
 * Dynamic routes generated elsewhere in the application may not
 * appear here.
 */
export function getSEORoutes(): string[] {
  return Object.keys(SEO_DATABASE);
}

// ============================================================================
// GET ALL SEO CONFIGS
// ============================================================================

/**
 * Preserve the legacy admin listing shape:
 *
 * [
 *   {
 *     path: "/about",
 *     title: "...",
 *     description: "...",
 *     ...
 *   }
 * ]
 *
 * The original implementation spread the metadata after `path`.
 * We place `path` last to ensure the database cannot accidentally
 * override the actual route key.
 */
export function getAllSEOConfigs():
  SEOConfigListItem[] {
  return Object.entries(SEO_DATABASE).map(
    ([path, config]) => ({
      ...config,
      path,
    })
  );
}

// ============================================================================
// UPDATE SEO CONFIG
// ============================================================================

/**
 * Preserve the existing Supabase admin update functionality.
 *
 * Important safeguards:
 * - Validate the requested path.
 * - Validate the update object.
 * - Prevent the config payload from replacing the normalized slug.
 * - Preserve the existing Edge Function endpoint.
 * - Handle HTTP and backend logical errors.
 * - Do not mutate the static SEO database.
 *
 * IMPORTANT:
 * The backend must independently authenticate and authorize updates.
 * A public anon key is not proof of admin authorization.
 */
export async function updateSEOConfig(
  path: string,
  config: SEOConfigUpdate
): Promise<SEOUpdateResponse | null> {
  if (
    typeof path !== "string" ||
    !path.trim()
  ) {
    throw new Error(
      "A valid SEO page path is required."
    );
  }

  if (!isPlainObject(config)) {
    throw new TypeError(
      "SEO configuration must be an object."
    );
  }

  const normalizedPath = resolveSEOPath(path);

  if (!normalizedPath.startsWith("/")) {
    throw new Error(
      "Invalid normalized SEO path."
    );
  }

  const endpoint = getSEOUpdateEndpoint();

  const anonKey = String(
    publicAnonKey ?? ""
  ).trim();

  if (!anonKey) {
    throw new Error(
      "Supabase public anonymous key is not configured."
    );
  }

  /**
   * Preserve the existing backend payload format.
   *
   * Place `slug` after the spread to prevent callers from
   * overriding the normalized route.
   */
  const payload = {
    ...config,
    slug: normalizedPath,
  };

  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown network error";

    throw new Error(
      `Unable to reach SEO update service: ${message}`
    );
  }

  const result = await parseAPIResponse(response);

  // --------------------------------------------------------------------------
  // HTTP ERROR
  // --------------------------------------------------------------------------

  if (!response.ok) {
    throw new Error(
      getAPIErrorMessage(
        result,
        `SEO update failed with HTTP ${response.status}`
      )
    );
  }

  // --------------------------------------------------------------------------
  // BACKEND LOGICAL ERROR
  // --------------------------------------------------------------------------

  if (result?.success === false) {
    throw new Error(
      getAPIErrorMessage(
        result,
        "Failed to update SEO configuration."
      )
    );
  }

  return result;
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

/**
 * Preserve compatibility with:
 *
 * import SITE_CONFIG from "./seoConfig";
 */
export {
  SITE_CONFIG as default,
};
