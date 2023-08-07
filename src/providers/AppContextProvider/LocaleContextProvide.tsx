import PropTypes from 'prop-types'
import React, {createContext, useContext, useEffect, useState} from 'react'

import defaultConfig from './defaultConfig'
import {useThemeActionsContext, useThemeContext} from './ThemeContextProvider'
import { LanguageProps } from '@/app/utils/types/data';
import { LayoutDirection } from '@/app/utils/shared/constants/AppEnums';

export interface LocaleContextData {
  locale: LanguageProps;
  rtlLocale: string[];
}

export interface LocaleActionsData {
  updateLocale: (locale: LanguageProps) => void;
}

export const LocaleContext = createContext<LocaleContextData>({
  locale: defaultConfig.locale,
  rtlLocale: defaultConfig.rtlLocale,
})
export const LocaleActionsContext = createContext<LocaleActionsData>({
  updateLocale: () => {},
})

export const useLocaleContext = () => useContext(LocaleContext)

export const useLocaleActionsContext = () => useContext(LocaleActionsContext)

const LocaleContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [locale, updateLocale] = useState<LanguageProps>(defaultConfig.locale)
  const {theme} = useThemeContext()
  const {updateTheme} = useThemeActionsContext()

  useEffect(() => {
    if (
      defaultConfig.rtlLocale.includes(locale.locale) &&
      theme.direction === LayoutDirection.LTR
    ) {
      updateTheme({
        ...theme,
        direction: LayoutDirection.RTL,
      })
    } else if (
      !defaultConfig.rtlLocale.includes(locale.locale) &&
      theme.direction === LayoutDirection.RTL
    ) {
      updateTheme({
        ...theme,
        direction: LayoutDirection.LTR,
      })
    }
  }, [locale, theme, updateTheme])

  return (
    <LocaleContext.Provider
      value={{
        locale,
        rtlLocale: defaultConfig.rtlLocale,
      }}
    >
      <LocaleActionsContext.Provider
        value={{
          updateLocale,
        }}
      >
        {children}
      </LocaleActionsContext.Provider>
    </LocaleContext.Provider>
  )
}

export default LocaleContextProvider

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
