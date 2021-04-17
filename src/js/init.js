// Initialize a new Koti Cloud app
import { App } from '../../../sdk/v0.5.x/sdk.js';
import '../sass/app.scss';

window.sdk = new App();

sdk.init({
    serviceWorker: 'sw.js',
    cacheables: {
        untilUpdate: [
            // NOTE: Edit as needed
            './',
            './manifest.json',
            './bin/app.js',
            './bin/app.css',
            // App icons
            './assets/icons/favicon.ico',
            './assets/icons/icon-128.png',
            './assets/icons/icon-144.png',
            './assets/icons/icon-152.png',
            './assets/icons/icon-192.png',
            './assets/icons/icon-256.png',
            './assets/icons/icon-512.png',
        ],
    },
    db: 'koti-cloud-app-db',
});

// Check for updates (async)
sdk.checkForUpdates();

export default {};