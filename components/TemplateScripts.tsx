"use client";

import Script from "next/script";

export default function TemplateScripts() {
  return (
    <>
      {/* Modernizr temprano */}
      <Script
        src="/assets/js/vendor/modernizr-3.5.0.min.js"
        strategy="beforeInteractive"
      />

      {/* jQuery UNA sola vez */}
      <Script
        src="/assets/js/vendor/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      {/* Popper -> Bootstrap */}
      <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />

      {/* Plugins */}
      <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />

      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.scrollUp.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/one-page-nav-min.js" strategy="afterInteractive" />

      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />

      <Script src="/assets/js/plugin_plyr.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
      <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />

      {/* main al final */}
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
