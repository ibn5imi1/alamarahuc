
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/alamarahuc/',

    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
    },
});