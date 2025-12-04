<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // 🎯 CORREZIONE CRUCIALE PER NGROK / CLOUDFLARE TUNNEL (CORS/HTTPS)
        // Forza l'uso di uno schema sicuro (HTTPS) quando si rileva 
        // che l'applicazione è accessibile tramite un proxy/tunnel.
        if (
            $this->app->environment('production') ||
            (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') ||
            (isset($_SERVER['HTTP_CF_VISITOR']) && str_contains($_SERVER['HTTP_CF_VISITOR'], 'https')) // Cloudflare
        ) {
            URL::forceScheme('https');
        }
    }
}
