import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],

    alias: {
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',

      'figma:asset/90948f9aa2b6ab5b4d89fb6e1fa928039c1588d3.png':
        path.resolve(
          __dirname,
          './src/assets/90948f9aa2b6ab5b4d89fb6e1fa928039c1588d3.png'
        ),

      'figma:asset/291b7319b5121f776c225ad4d66462f7385e5e1e.png':
        path.resolve(
          __dirname,
          './src/assets/291b7319b5121f776c225ad4d66462f7385e5e1e.png'
        ),

      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',

      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',

      '@jsr/supabase__supabase-js@2': '@jsr/supabase__supabase-js',

      '@': path.resolve(
        __dirname,
        './src'
      ),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'build',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor';
          }

          if (
            id.includes('/react-router/') ||
            id.includes('/react-router-dom/')
          ) {
            return 'router-vendor';
          }

          if (
            id.includes('/framer-motion/') ||
            id.includes('/motion/') ||
            id.includes('/lenis/')
          ) {
            return 'animation-vendor';
          }

          if (
            id.includes('/lucide-react/')
          ) {
            return 'icons-vendor';
          }

          if (
            id.includes('/@radix-ui/')
          ) {
            return 'radix-ui-vendor';
          }

          if (
            id.includes('/recharts/') ||
            id.includes('/d3-')
          ) {
            return 'charts-vendor';
          }

          if (
            id.includes('/react-hook-form/') ||
            id.includes('/react-day-picker/') ||
            id.includes('/input-otp/')
          ) {
            return 'forms-vendor';
          }

          if (
            id.includes('/embla-carousel') ||
            id.includes('/react-resizable-panels/') ||
            id.includes('/cmdk/') ||
            id.includes('/vaul/')
          ) {
            return 'ui-vendor';
          }

          if (
            id.includes('/sonner/') ||
            id.includes('/next-themes/')
          ) {
            return 'utilities-vendor';
          }

          if (
            id.includes('/@supabase/') ||
            id.includes('/@jsr/supabase')
          ) {
            return 'supabase-vendor';
          }

          return undefined;
        },
      },
    },
  },

  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
});
