// Simple download tracking and carousel behavior
const APP_STORE_URL = "https://apps.apple.com/app/cybersnake/id[YOUR_APP_ID]";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=space.hasanali.cybersnake";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.download-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const platform = btn.dataset.platform;
            try { window.dataLayer && window.dataLayer.push({ event: 'download_click', platform }) } catch (e) { }
            if (platform === 'ios') window.location.href = APP_STORE_URL;
            else window.location.href = PLAY_STORE_URL;
        })
    })

    // basic carousel auto-scroll
    const carousel = document.getElementById('carousel');
    if (carousel) {
        let scrollPos = 0;
        setInterval(() => {
            scrollPos += 276; // approximate slide width
            if (scrollPos > carousel.scrollWidth - carousel.clientWidth) scrollPos = 0;
            carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }, 3000)
    }
})
