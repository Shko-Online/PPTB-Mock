import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({
    entryRoot: "./src",
    copyDtsFiles: true,
    include: [
      'src/**/*.ts'
    ]
  })],
  build: {
    sourcemap: true,
    lib: {
        entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    }
  }
});