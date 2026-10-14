import {

  motion,

  useScroll,

  useTransform,

  useMotionValue,

  useSpring,

} from 'motion/react';

import { useRef, useEffect } from 'react';

/**

 * OutlinedText V5.1 - SSG COMPATIBLE EDITION

 *

 * BASE FEATURES:

 * - Subtle outline text

 * - Left / right / top / bottom entrance

 * - Sequential delays

 * - Scroll parallax

 * - Edge stop positioning

 * - Optional scaling

 * - Optional edge fading

 *

 * 3D FEATURES:

 * - Z depth

 * - Depth blur

 * - Depth scale

 * - Scroll rotation

 * - Static rotation

 * - Mouse tilt

 * - Dynamic blur

 *

 * SSG compatible

 */

interface OutlinedTextProps {

  // Base props

  text: string;

  size?: 'small' | 'medium' | 'large' | 'xlarge';

  className?: string;

  parallax?: boolean;

  parallaxSpeed?: number;

  animate?: boolean;

  position?: 'center' | 'left' | 'right';

  /**

   * Supports all directions already used across the website.

   */

  direction?: 'left' | 'right' | 'top' | 'bottom';

  delay?: number;

  scale?: boolean;

  fadeEdges?: boolean;

  ariaHidden?: boolean;

  stopPosition?: number;

  /**

   * Static Z-axis rotation in degrees.

   *

   * Example:

   * rotation={-9}

   */

  rotation?: number;

  // 3D Enhancement Props

  zDepth?: number;

  depthBlur?: number;

  depthScale?: number;

  rotateOnScroll?: boolean;

  rotateAxis?: 'x' | 'y' | 'both';

  rotateAmount?: number;

  rotateSpeed?: number;

  mouseTilt?: boolean;

  tiltAmount?: number;

  tiltSpeed?: number;

  dynamicBlur?: boolean;

  blurRange?: [number, number];

  opacity?: number;

}

export const OutlinedText = ({

  text,

  size = 'large',

  className = '',

  parallax = false,

  parallaxSpeed = 0.5,

  animate = true,

  position = 'center',

  direction = 'left',

  delay = 0,

  scale = false,

  fadeEdges = false,

  ariaHidden = true,

  stopPosition = 25,

  // Static rotation

  rotation = 0,

  // 3D defaults

  zDepth = 0,

  depthBlur = 0,

  depthScale = 1,

  rotateOnScroll = false,

  rotateAxis = 'y',

  rotateAmount = 10,

  rotateSpeed = 0.5,

  mouseTilt = false,

  tiltAmount = 10,

  tiltSpeed = 0.3,

  dynamicBlur = false,

  blurRange = [0, 5],

  opacity: customOpacity,

}: OutlinedTextProps) => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({

    target: ref,

    offset: ['start end', 'end start'],

  });

  /**

   * Mouse position for tilt

   */

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  /**

   * Smooth spring animation for mouse tilt.

   *

   * tiltSpeed is converted to a damping value so the existing

   * prop remains meaningful.

   */

  const safeTiltSpeed = Math.max(0.05, Math.min(1, tiltSpeed));

  const tiltX = useSpring(mouseX, {

    stiffness: 150,

    damping: 10 + safeTiltSpeed * 20,

  });

  const tiltY = useSpring(mouseY, {

    stiffness: 150,

    damping: 10 + safeTiltSpeed * 20,

  });

  /**

   * Mouse tilt

   */

  useEffect(() => {

    if (!mouseTilt || typeof window === 'undefined') {

      return;

    }

    const handleMouseMove = (event: MouseEvent) => {

      const { clientX, clientY } = event;

      const { innerWidth, innerHeight } = window;

      const xPercent =

        (clientX / innerWidth - 0.5) * 2;

      const yPercent =

        (clientY / innerHeight - 0.5) * 2;

      mouseX.set(

        xPercent * tiltAmount

      );

      mouseY.set(

        -yPercent * tiltAmount

      );

    };

    window.addEventListener(

      'mousemove',

      handleMouseMove

    );

    return () => {

      window.removeEventListener(

        'mousemove',

        handleMouseMove

      );

    };

  }, [

    mouseTilt,

    tiltAmount,

    mouseX,

    mouseY,

  ]);

  /**

   * Parallax movement

   */

  const yParallax = useTransform(

    scrollYProgress,

    [0, 1],

    parallax

      ? [0, -100 * parallaxSpeed]

      : [0, 0]

  );

  /**

   * Entrance configuration

   */

  const slideDistance = 300;

  /**

   * Keep SSR safe.

   */

  const viewportWidth =

    typeof window !== 'undefined'

      ? window.innerWidth

      : 1000;

  const viewportHeight =

    typeof window !== 'undefined'

      ? window.innerHeight

      : 1000;

  const stopHorizontal =

    (viewportWidth * stopPosition) / 100;

  const stopVertical =

    (viewportHeight * stopPosition) / 100;

  /**

   * Horizontal entrance

   */

  const xTransform = useTransform(

    scrollYProgress,

    [0, 0.4, 0.7, 1],

    direction === 'left'

      ? [

          -slideDistance,

          -stopHorizontal,

          -stopHorizontal,

          -stopHorizontal,

        ]

      : direction === 'right'

      ? [

          slideDistance,

          stopHorizontal,

          stopHorizontal,

          stopHorizontal,

        ]

      : [0, 0, 0, 0]

  );

  /**

   * Vertical entrance.

   *

   * Top and bottom were already used on HomePage,

   * so they are now fully supported.

   */

  const yEntrance = useTransform(

    scrollYProgress,

    [0, 0.4, 0.7, 1],

    direction === 'top'

      ? [

          -slideDistance,

          -stopVertical,

          -stopVertical,

          -stopVertical,

        ]

      : direction === 'bottom'

      ? [

          slideDistance,

          stopVertical,

          stopVertical,

          stopVertical,

        ]

      : [0, 0, 0, 0]

  );

  /**

   * Combine entrance Y movement with parallax.

   */

  const y = useTransform(

    [yParallax, yEntrance],

    ([parallaxValue, entranceValue]) => {

      const safeParallax =

        typeof parallaxValue === 'number'

          ? parallaxValue

          : 0;

      const safeEntrance =

        typeof entranceValue === 'number'

          ? entranceValue

          : 0;

      return (

        safeParallax +

        safeEntrance

      );

    }

  );

  /**

   * 3D Scale

   */

  const baseScale =

    depthScale || 1;

  const scaleValue =

    useTransform(

      scrollYProgress,

      [0, 0.5, 1],

      scale

        ? [

            baseScale * 0.98,

            baseScale * 1.02,

            baseScale * 0.98,

          ]

        : [

            baseScale,

            baseScale,

            baseScale,

          ]

    );

  /**

   * Scroll rotation X

   */

  const rotateX =

    useTransform(

      scrollYProgress,

      [0, 0.5, 1],

      rotateOnScroll &&

        (

          rotateAxis === 'x' ||

          rotateAxis === 'both'

        )

        ? [

            0,

            rotateAmount *

              rotateSpeed,

            0,

          ]

        : [0, 0, 0]

    );

  /**

   * Scroll rotation Y

   */

  const rotateY =

    useTransform(

      scrollYProgress,

      [0, 0.5, 1],

      rotateOnScroll &&

        (

          rotateAxis === 'y' ||

          rotateAxis === 'both'

        )

        ? [

            0,

            rotateAmount *

              rotateSpeed,

            0,

          ]

        : [0, 0, 0]

    );

  /**

   * Dynamic blur

   */

  const scrollBlur =

    useTransform(

      scrollYProgress,

      [0, 0.3, 0.7, 1],

      dynamicBlur

        ? [

            blurRange[1],

            blurRange[0],

            blurRange[0],

            blurRange[1],

          ]

        : [0, 0, 0, 0]

    );

  /**

   * Properly typed combined blur.

   *

   * This fixes:

   *

   * Operator '+' cannot be applied to

   * types 'number' and 'unknown'

   */

  const totalBlur =

    useTransform(

      scrollBlur,

      (scrollValue) => {

        const safeScroll =

          typeof scrollValue === 'number'

            ? scrollValue

            : 0;

        return (

          depthBlur +

          safeScroll

        );

      }

    );

  /**

   * Opacity

   */

  // Derive a CSS filter without invoking the unsupported MotionValue.to().
  const blurFilter = useTransform(totalBlur, (value) => `blur(${value}px)`);

  const standardOpacity =

    useTransform(

      scrollYProgress,

      [0, 0.3, 0.6, 0.9, 1],

      [0, 0.8, 1, 0.8, 0]

    );

  /**

   * Optional edge fade behaviour.

   *

   * When fadeEdges is false,

   * keep the standard existing opacity behaviour.

   */

  const edgeOpacity =

    useTransform(

      scrollYProgress,

      [0, 0.2, 0.8, 1],

      [0, 1, 1, 0]

    );

  const animatedOpacity =

    fadeEdges

      ? edgeOpacity

      : standardOpacity;

  const finalOpacity =

    customOpacity !== undefined

      ? customOpacity

      : animatedOpacity;

  /**

   * Responsive text sizes

   */

  const sizeClasses = {

    small:

      'text-[60px] md:text-[80px] lg:text-[100px]',

    medium:

      'text-[80px] md:text-[120px] lg:text-[160px]',

    large:

      'text-[100px] md:text-[150px] lg:text-[200px]',

    xlarge:

      'text-[120px] md:text-[180px] lg:text-[240px]',

  };

  /**

   * Position classes

   */

  const positionClasses = {

    center:

      'left-1/2 -translate-x-1/2 text-center',

    left:

      'left-4 md:left-8 text-left',

    right:

      'right-4 md:right-8 text-right',

  };

  return (

    <div

      ref={ref}

      className="absolute inset-0 overflow-visible pointer-events-none"

      style={{

        perspective: '1000px',

        perspectiveOrigin:

          'center',

        transformStyle:

          'preserve-3d',

      }}

    >

      <motion.div

        style={

          animate

            ? {

                x: xTransform,

                y,

                opacity:

                  finalOpacity,

                scale:

                  scaleValue,

                translateZ:

                  zDepth,

                /**

                 * Mouse tilt overrides scroll rotation.

                 */

                rotateX:

                  mouseTilt

                    ? tiltY

                    : rotateX,

                rotateY:

                  mouseTilt

                    ? tiltX

                    : rotateY,

                /**

                 * Static rotation requested by HomePage.

                 */

                rotate:

                  rotation,

                /**

                 * MotionValues can be passed directly.

                 */

                filter: blurFilter,

                transformStyle:

                  'preserve-3d',

                backfaceVisibility:

                  'hidden',

              }

            : {

                rotate:

                  rotation,

              }

        }

        initial={

          animate

            ? {

                opacity: 0,

              }

            : undefined

        }

        transition={{

          delay,

          duration: 1.2,

          ease: [

            0.25,

            0.1,

            0.25,

            1,

          ],

        }}

        className={`

          absolute

          top-1/2

          -translate-y-1/2

          ${positionClasses[position]}

          ${sizeClasses[size]}

          font-bold

          text-outlined-visible-full

          select-none

          whitespace-nowrap

          bg-transparent

          will-change-transform

          ${className}

        `}

        aria-hidden={

          ariaHidden

        }

      >

        {text}

      </motion.div>

    </div>

  );

};

export default OutlinedText;