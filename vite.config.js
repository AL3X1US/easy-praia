import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        https: true, // forza HTTPS
        host: true, // permette accesso remoto
        port: 5173, // puoi usare la porta che vuoi
        hmr: {
            protocol: "wss", // WebSocket sicuro
            host: "facing-cove-knowledgestorm-professional.trycloudflare.com", // il dominio pubblico
            port: 5173, // porta HTTPS
        },
    },
});
