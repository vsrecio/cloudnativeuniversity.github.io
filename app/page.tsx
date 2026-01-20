import Link from "next/link";

export default function HomePage() {
  return (
    <div className="body_wrapper">
      <nav className="navbar navbar-expand-lg menu_one menu_purple sticky-nav">
        <div className="container">
          <Link className="navbar-brand header_logo" href="/">
            {/* Ajusta rutas según tu estructura real */}
            <img
              className="first_logo sticky_logo"
              src="/img/logo.png"
              srcSet="/img/logo-2x.png 2x"
              alt="logo"
            />
            <img
              className="white_logo main_logo"
              src="/img/logo.png"
              srcSet="/img/logo-w2x.png 2x"
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu_toggle">
              <span className="hamburger">
                <span />
                <span />
                <span />
              </span>
              <span className="hamburger-cross">
                <span />
                <span />
              </span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav menu ml-auto">
              <li className="nav-item dropdown submenu">
                <Link href="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown submenu">
                <Link href="/cursos" className="nav-link">
                  Cursos
                </Link>
              </li>
              <li className="nav-item dropdown submenu">
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown submenu">
                <Link href="/comunidad" className="nav-link">
                  Comunidad
                </Link>
              </li>
              <li className="nav-item dropdown submenu">
                <Link href="/patrocinadores" className="nav-link">
                  Patrocinadores
                </Link>
              </li>
              <li className="nav-item dropdown submenu">
                <Link href="/enterprise" className="nav-link">
                  Enterprise
                </Link>
              </li>
            </ul>

            <div className="right-nav">
              <a className="nav_btn" href="#">
                Patreon (♥)
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="doc_banner_area banner_creative1">
        <ul className="list-unstyled banner_shap_img">
          <li>
            <img src="/assets/img/new/banner_shap1.png" alt="" />
          </li>
          <li>
            <img src="/assets/img/new/banner_shap4.png" alt="" />
          </li>
          <li>
            <img src="/assets/img/new/banner_shap3.png" alt="" />
          </li>
          <li>
            <img src="/assets/img/new/banner_shap2.png" alt="" />
          </li>
          <li>
            <img
              data-parallax='{"x": -180, "y": 80, "rotateY":2000}'
              src="/assets/img/new/plus1.png"
              alt=""
            />
          </li>
          <li>
            <img
              data-parallax='{"x": -50, "y": -160, "rotateZ":200}'
              src="/assets/img/new/plus2.png"
              alt=""
            />
          </li>
          <li />
          <li />
          <li />
        </ul>

        <div className="container">
          <div className="doc_banner_content">
            <h2 className="wow fadeInUp">
              Todo el conocimiento Cloud Native que necesitas en español
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              {" "}
              Acceso ilimitado,{"{GRATIS}"} Cero Excusas.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="doc_features_area">
        <img className="doc_features_shap" src="/assets/img/new/shap_white.png" alt="" />
        <div className="container">
          <div className="doc_features_inner">
            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="0.5s"
            >
              <img src="/assets/img/new/cicd.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>CI &amp; CD</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="0.5s"
            >
              <img src="/assets/img/new/api.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>API Gateway</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="0.5s"
            >
              {/* OJO: en tu HTML original esto es assets/img/new/.png, eso es inválido */}
              <img src="/assets/img/new/placeholder.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>App &amp; Image Build</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="0.5s"
            >
              <img src="/assets/img/new/auto.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>Automation &amp; Configuration</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="0.5s"
            >
              <img src="/assets/img/new/distro.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>Distributions</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.6s"
            >
              <img src="/assets/img/new/icon2.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>Chaos Engineering</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="0.7s"
            >
              <img src="/assets/img/new/network.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>Cloud Native Network</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="0.8s"
            >
              <img src="/assets/img/new/storage.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>Cloud Native Storage</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div
              className="media doc_features_item wow fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="0.9s"
            >
              <img src="/assets/img/new/icon5.png" alt="" />
              <div className="media-body">
                <a href="#">
                  <h4>Container Registry</h4>
                </a>
                <p>245 Posts</p>
              </div>
            </div>

            <div className="see_more_item collapse-wrap">
              <div className="media doc_features_item">
                <img src="/assets/img/new/icon6.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Container Runtime</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/ops.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Continuous Optimization</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/search.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Coordination &amp; Discovery</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon7.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Database</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon8.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Feature Flagging</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/key.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Key Management</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>ML Serving</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Observability</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Remote Procedure Call</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Scheduling &amp; Orchestration</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/sec.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Security &amp; Compliance</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Service Mesh</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Service Proxy</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>

              <div className="media doc_features_item">
                <img src="/assets/img/new/message.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Streaming &amp; Messaging</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
            </div>

            <a href="#more-features" className="collapse-btn see_btn">
              <i className="arrow_carrot-down_alt2" />
              <span className="text">Ver Mas!</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="doc_footer_area">
        <div className="doc_footer_bottom">
          <div className="container d-flex justify-content-between">
            <ul className="doc_footer_menu list-unstyled wow fadeInUp" data-wow-delay="0.2s">
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Referencias</a>
              </li>
              <li>
                <a href="#">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#">Política de Cookies</a>
              </li>
            </ul>

            <p className="wow fadeInUp" data-wow-delay="0.3s">
              © {new Date().getFullYear()} All Rights Reserved Design by <span>Nixversity</span>
            </p>
          </div>
        </div>
      </footer>

      <a id="back-to-top" title="Back to Top" />
    </div>
  );
}
