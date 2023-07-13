import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';

// Custom type definition for the postcss plugin
interface PostcssPlugin {
  postcssPlugin: string;
  plugins: any[];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [tailwindcss] as unknown as PostcssPlugin[],
    },
  },
});
