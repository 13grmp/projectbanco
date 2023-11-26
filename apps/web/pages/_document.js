import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br" data-layout="horizontal" data-topbar="ligth" data-sidebar="ligth" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable" data-sidebar-visibility="show" data-layout-style="default" data-bs-theme="light" data-layout-width="fluid" data-layout-position="fixed">
      <Head>
        <link rel="icon" href="/imags/bbb2.ico" sizes="any" />
        <title>BBB</title>

        {/* <!-- Icons Css --> */}
        <link
          href="/template/dist/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* <!-- App Css--> */}
        <link
          href="/template/dist/css/app.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* <!-- custom Css--> */}
        <link
          href="/template/dist/css/custom.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* LIBS: lord-icon*/}
        <script src="/template/dist/js/pages/plugins/lord-icon-2.1.0.js" />

        {/* lib: feather */}
        <script src="/template/dist/libs/feather-icons/feather.min.js" />

        {/* lib: bootstraps */}
        {/* <Script src="/template/dist/libs/bootstrap/js/bootstrap.min.js" strategy="afterInteractive"/> */}
        <link
          href="/template/dist/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* <link href="/template/dist/css/bootstrap-rtl.min.css" rel="stylesheet" type="text/css" />
        <link href="/template/dist/libs/bootstrap/css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css" />
        <link href="/template/dist/libs/bootstrp/css/bootstrap-utilities.min.css" rel="stylesheet" type="text/css" />
        <link href="/template/dist/libs/bootstrp/css/bootstrap-grid.min.css" rel="stylesheet" type="text/css" /> */}
        <Script
          src="/template/dist/libs/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* lib: aos */}
        <script src="/template/dist/libs/aos/aos.js" />
        <link
          href="/template/dist/libs/aos/aos.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: apexchart */}
        <script src="/template/dist/libs/apexcharts/apexcharts.min.js" />
        <link
          href="/template/dist/libs/apexcharts/apexcharts.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: card */}
        <script src="/template/dist/libs/card/card.js" />
        <link
          href="/template/dist/libs/card/card.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: chart */}
        <script src="/template/dist/libs/chart.js/chart.min.js" />

        {/* lib: choices */}
        {/* <link href="/template/dist/libs/choices.js/public/assets/styles/choices.min.css" rel="stylesheet" type="text/css" />
        <script src="/template/dist/libs/choices.js/public/assets/scripts/choices.min.js" /> */}

        {/* lib: cleave.js */}
        <script src="/template/dist/libs/cleave.js/cleave.min.js" />

        {/* lib: dragula */}
        <script src="/template/dist/libs/dragula/dragula.min.js" />
        <link
          href="/template/dist/libs/dragula/dragula.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:dropzone */}
        <script src="/template/dist/libs/dropzone/dropzone-min.js" />
        <link
          href="/template/dist/libs/dropzone/dropzone.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: isotope-layout */}
        <script src="/template/dist/libs/isotope-layout/isotope.pkgd.min.js" />

        {/* dom-autoscroller */}
        <script src="/template/dist/libs/dom-autoscroller/dom-autoscroller.min.js" />

        {/* lib: list.pagination */}
        <script src="/template/dist/libs/list.pagination.js/list.pagination.min.js" />

        {/* lib: simplebar */}
        <link
          href="/template/dist/libs/simplebar/simplebar.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="/template/dist/libs/simplebar/simplebar.min.js" />

        {/* lib: echarts */}
        <script src="/template/dist/libs/echarts/echarts.min.js" />

        {/* lib: fg-emoji-picker */}
        <script src="/template/dist/libs/fg-emoji-picker/fgEmojiPicker.js" />

        {/* lib: filepond */}
        <script src="/template/dist/libs/filepond/filepond.min.js" />
        <link
          href="/template/dist/libs/filepond/filepond.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: filepond-plugin-file-encode */}
        <script src="/template/dist/libs/filepond-plugin-file-encode/filepond-plugin-file-encode.min.js" />

        {/* lib: filepond-plugin-file-validate-size */}
        <script src="/template/dist/libs/filepond-plugin-file-validate-size/filepond-plugin-file-validate-size.min.js" />

        {/* lib: filepond-plugin-image-exif-orientation */}
        <script src="/template/dist/libs/filepond-plugin-image-exif-orientation/filepond-plugin-image-exif-orientation.min.js" />

        {/* lib: filepond-plugin-image-preview */}
        <script src="/template/dist/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js" />
        <link
          href="/template/dist/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: flatpickr */}
        <script src="/template/dist/libs/flatpickr/flatpickr.min.js" />
        <link
          href="/template/dist/libs/flatpickr/flatpickr.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: fullcalendar */}
        <script src="/template/dist/libs/fullcalendar/main.min.js" />
        <link
          href="/template/dist/libs/fullcalendar/main.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: glightbox */}
        <script src="/template/dist/libs/glightbox/js/glightbox.min.js" />
        <link
          href="/template/dist/libs/glightbox/css/glightbox.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/template/dist/libs/glightbox/css/plyr.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: gmaps
        <script src="/template/dist/libs/gmaps/gmaps.min.js" />
        <script src="/template/dist/libs/gmaps/gmaps.min.js.map" /> */}

        {/* lib: gridjs */}
        <script src="/template/dist/libs/gridjs/gridjs.production.min.js" />

        {/* lib: jsvectormap */}
        <script src="/template/dist/libs/jsvectormap/js/jsvectormap.min.js" />
        <link
          href="/template/dist/libs/jsvectormap/css/jsvectormap.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib: leaflet */}
        <script src="/template/dist/libs/leaflet/leaflet.js" />

        {/* lib: list.js */}
        <script src="/template/dist/libs/list.js/list.min.js" />

        {/* lib: list.pagination.js */}
        <script src="/template/dist/libs/list.pagination.js/list.pagination.min.js" />

        {/* lib: masonry-layout */}
        <script src="/template/dist/libs/masonry-layout/masonry.pkgd.min.js" />

        {/* lib: moment */}
        <script src="/template/dist/libs/moment/min/moment.min.js" />
        <script src="/template/dist/libs/moment/min/locales.min.js" />

        {/* lib: multi */}
        <script src="/template/dist/libs/multi.js/multi.min.js" />
        <link
          href="/template/dist/libs/multi.js/multi.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:waves */}
        <script src="/template/dist/libs/node-waves/waves.min.js" />
        <link
          href="/template/dist/libs/node-waves/waves.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:nouislider */}
        <script src="/template/dist/libs/nouislider/nouislider.min.js" />
        <link
          href="/template/dist/libs/nouislider/nouislider.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:prismjs /> */}

        {/* lib:quill */}
        <script src="/template/dist/libs/quill/quill.min.js" />
        <link
          href="/template/dist/libs/quill/quill.bubble.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/template/dist/libs/quill/quill.core.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/template/dist/libs/quill/quill.snow.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:rater-js /> */}
        <script src="/template/dist/libs/prismjs/prism.js" />

        {/* lib:shepherd.js */}
        <script src="/template/dist/libs/shepherd.js/js/shepherd.min.js" />
        <link
          href="/template/dist/libs/shepherd.js/css/shepherd.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:sortablejs */}
        <script src="/template/dist/libs/sortablejs/sortable.min.js" />

        {/* lib:sweetalert2 */}
        <script src="/template/dist/libs/sweetalert2/sweetalert2.min.js" />
        <link
          href="/template/dist/libs/sweetalert2/sweetalert2.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:swiper */}
        <script src="/template/dist/libs/swiper/swiper-bundle.min.js" />
        <link
          href="/template/dist/libs/swiper/swiper-bundle.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:toastify */}
        <script src="/template/dist/libs/toastify-js/src/toastify.js" />
        <link
          href="/template/dist/libs/toastify-js/src/toastify.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* lib:wnumb */}
        <script src="/template/dist/libs/wnumb/wNumb.min.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
