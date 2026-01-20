"use client";

import Script from "next/script";

export default function TemplateScripts() {
  return (
    <>
      {/* 1) jQuery primero */}
      <Script src="/assets/js/jquery-3.5.1.min.js" strategy="beforeInteractive" />

      {/* 2) Popper + Bootstrap (tooltip/dropdown/navbar) */}
      <Script src="/assets/bootstrap/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/assets/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />

      {/* 3) Plugins (cargar los que el template usa) */}
      <Script src="/assets/wow/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/swiper-slider/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/slick/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/magnify-pop/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/niceselectpicker/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js" strategy="afterInteractive" />
      <Script src="/assets/player-js/plyr.min.js" strategy="afterInteractive" />

      {/* 4) Tu theme (último) */}
      <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
      <Script src="/assets/js/theme.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
