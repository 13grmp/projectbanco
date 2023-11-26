import '../style/globals.css'
import '../public/assets/scss/config/default/app.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import { HeaderView, PageView } from 'ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderView>
        <PageView>
          <Component {...pageProps} />
        </PageView>
      </HeaderView>

      <Script
        src="/template/dist/js/layout.js"
        onLoad={() => {
          const layoutScript = document.createElement("script");
          layoutScript.src = "/template/dist/js/app.js";
          layoutScript.onload = () => { };
          document.body.appendChild(layoutScript);
        }}
      />

    </>

  )

}

export default MyApp;
