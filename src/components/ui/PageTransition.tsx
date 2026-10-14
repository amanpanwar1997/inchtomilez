import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * PageTransition
 *
 * Responsible only for the visual transition between routed pages.
 *
 * Routing:
 * - Handled by React Router
 *
 * Scroll restoration:
 * - Handled separately by ScrollToTop
 *
 * Accessibility:
 * - Respects the user's prefers-reduced-motion setting
 *
 * Performance:
 * - Uses GPU-friendly opacity and transform animations
 * - No timers
 * - No duplicated route state
 * - No manual window.scrollTo()
 * - No additional route listeners
 */
export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 8,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.22,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;