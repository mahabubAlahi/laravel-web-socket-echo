import { createApp } from 'vue'
import App from './App.vue'

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: 'localhost',
    wsPort: 6001,
    forceTLS: false,
    disableStats: true
});

createApp(App).mount('#app')
