import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function spaRoutingPlugin(): Plugin {
  const spaMiddleware = (req: any, _res: any, next: () => void) => {
    const rawUrl = req.url || '';
    const pathname = rawUrl.split('?')[0];

    // Intercept direct navigation to routes
    if (pathname === '/privacypolicy' || pathname === '/privacypolicy/') {
      req.url = '/privacypolicy/index.html' + (rawUrl.includes('?') ? '?' + rawUrl.split('?')[1] : '');
    } else if (pathname === '/termsofservice' || pathname === '/termsofservice/') {
      req.url = '/termsofservice/index.html' + (rawUrl.includes('?') ? '?' + rawUrl.split('?')[1] : '');
    }
    next();
  };

  return {
    name: 'spa-direct-routing',
    configureServer(server) {
      server.middlewares.use(spaMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(spaMiddleware);
    },
  };
}

export default defineConfig(() => {
  return {
    appType: 'spa' as const,
    plugins: [
      spaRoutingPlugin(),
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacypolicy: path.resolve(__dirname, 'privacypolicy/index.html'),
          termsofservice: path.resolve(__dirname, 'termsofservice/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
