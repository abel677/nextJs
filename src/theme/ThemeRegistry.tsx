'use client'

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
import CssBaseline  from "@mui/material/CssBaseline"
import { Roboto } from 'next/font/google'

const primary = {
    main: '#e3f2fd',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
  };

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal','italic'],
    subsets: ['latin']
})

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 12,
    },
    palette: {
        background: {
            default: primary.main
        }
    },
    components: {

    }
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({children}: {children: React.ReactNode}){
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui'}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}