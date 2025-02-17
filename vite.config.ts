import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/will-you-be-my-valentine",
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        cors: true,
        allowedHosts: ['.ngrok-free.app'],
        proxy: {
            '/api': {
                target: 'https://cc4b-81-26-206-50.ngrok-free.app',
                changeOrigin: true,
                headers: {
                    "ngrok-skip-browser-warning": "true"
                }
            }
        }
    },
    plugins:[react()]
});