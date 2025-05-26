// @ts-check
/* eslint-env node */
/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração para o Node.js
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente
  const env = loadEnv(mode, process?.cwd() || __dirname, '');

  const isProduction = mode === 'production';
  
  return {
    base: isProduction ? '/synco-clone/' : '/',
    plugins: [
      react(),
      // Plugin para processamento de HTML
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE || 'Synco Clone',
            description: env.VITE_APP_DESCRIPTION || 'A modern clone of Synco website',
          },
        },
      }),
      // SVG Icons configuration removed for now
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(env.PORT || '3000'),
      open: true,
      cors: true,
      host: true,
    },
    preview: {
      port: parseInt(env.PORT || '3000'),
      open: true,
      cors: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            vendor: ['framer-motion'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
    define: {
      'process.env': {},
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  };
});
