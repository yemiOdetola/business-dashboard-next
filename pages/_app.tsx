import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "styletron";
import { BaseProvider, LightTheme, DarkTheme } from "baseui";
import { ThemeSwitcherProvider, THEME } from "contexts/theme/theme.provider";
import Layout from 'components/Layout/Layout';

//css
import "assets/css/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(THEME.light);
  React.useEffect(() => {
    let SAVED_THEME = localStorage.getItem('theme');
    if (SAVED_THEME === null) {
      SAVED_THEME = THEME.light;
    }
    setTheme(SAVED_THEME);
  }, []);

  <ThemeSwitcherProvider value={{ theme, setTheme }}>
    <StyletronProvider value={styletron} debugAfterHydration>
      <BaseProvider
        theme={
          theme === THEME.light
            ? { ...LightTheme, direction: "ltr" }
            : { ...DarkTheme, direction: "ltr" }
        }
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  </ThemeSwitcherProvider>;
  return;
}

export default MyApp;
