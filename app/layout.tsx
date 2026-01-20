import "./globals.css";
import TemplateScripts from "@/components/TemplateScripts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
    <head>
      {/* Base */}
      <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />

      {/* Icon fonts / packs (si tu CSS los usa) */}
      <link rel="stylesheet" href="/assets/elagent-icon/style.css" />
      <link rel="stylesheet" href="/assets/ionicons/css/ionicons.min.css" />

      {/* Plugins CSS comunes */}
      <link rel="stylesheet" href="/assets/slick/slick.css" />
      <link rel="stylesheet" href="/assets/slick/slick-theme.css" />
      <link rel="stylesheet" href="/assets/swiper-slider/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/magnify-pop/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/niceselectpicker/nice-select.css" />
      <link rel="stylesheet" href="/assets/mcustomscrollbar/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="/assets/player-js/plyr.css" />
      <link rel="stylesheet" href="/assets/animation/animate.css" />

      {/* Tu theme al final */}
      <link rel="stylesheet" href="/assets/css/style-main.css" />
      <link rel="stylesheet" href="/assets/css/responsive.css" />
    </head>

      <body>
        {children}
        <TemplateScripts />
      </body>
    </html>
  );
}
