import { useEffect } from 'react';
import {
  useLocation,
  useNavigationType,
} from 'react-router';

/**
 * ScrollToTop
 *
 * Handles route scroll behaviour without interfering with
 * the browser's native Back/Forward scroll restoration.
 *
 * Behaviour:
 *
 * PUSH / REPLACE navigation:
 * - Scroll new pages to the top.
 *
 * Browser Back / Forward:
 * - Preserve native browser scroll restoration.
 *
 * Hash navigation:
 * - Scroll to the requested section when available.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    /**
     * Browser Back / Forward navigation.
     *
     * Do not manually scroll here.
     * Let the browser restore the user's previous position.
     */
    if (navigationType === 'POP') {
      return;
    }

    /**
     * Hash / anchor navigation
     *
     * Examples:
     * /about#team
     * /services#pricing
     */
    if (hash) {
      const rawId = hash.slice(1);

      let elementId = rawId;

      try {
        elementId = decodeURIComponent(rawId);
      } catch {
        // Keep the original hash value if decoding fails.
      }

      const frame = window.requestAnimationFrame(() => {
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          });
        }
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    /**
     * Normal route navigation.
     *
     * New pages should start at the top.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash, navigationType]);

  return null;
}

export default ScrollToTop;