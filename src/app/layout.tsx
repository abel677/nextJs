"use client";

import { Providers } from "@/providers/Providers";
import AppContextProvider from "@/providers/AppContextProvider";
import AppThemeProvider from "@/providers/AppThemeProvider";
import AppStyleProvider from "@/providers/AppStyleProvider";
import createEmotionCache from "./createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import AppLocaleProvider from "@/providers/AppLocaleProvider";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import AuthProvider from "@/providers/AuthProvider/AuthProvider";

const clientSideEmotionCache = createEmotionCache();

interface IRootLayoutProps extends AppProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = (props) => {
  const { emotionCache = clientSideEmotionCache, children } = props;

  return (
    <html lang="en">
      <Head>
        <title>Crema material</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <body>
          <Providers>
            <AuthProvider>
              <AppThemeProvider>
                <AppStyleProvider>
                  <AppLocaleProvider>
                    <CssBaseline />
                    <main> {children}</main>
                  </AppLocaleProvider>
                </AppStyleProvider>
              </AppThemeProvider>
            </AuthProvider>
          </Providers>
        </body>
      </CacheProvider>
    </html>
  );
};

export default RootLayout;
