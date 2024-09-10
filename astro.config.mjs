import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Integrar React al proyecto
export default defineConfig({
  integrations: [react()]
});
