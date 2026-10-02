// ponytail: tracks engaged visits; load immediately if bounce-rate data matters.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-R077NKJ12M');

let analyticsLoaded = false;
const loadAnalytics = () => {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R077NKJ12M';
  document.head.append(script);
};
['pointerdown', 'keydown', 'touchstart'].forEach((event) =>
  window.addEventListener(event, loadAnalytics, { once: true, passive: true }),
);
