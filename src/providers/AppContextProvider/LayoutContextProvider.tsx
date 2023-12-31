import PropTypes from 'prop-types'
import React, {createContext, useCallback, useContext, useState} from 'react'

import defaultConfig from './defaultConfig'

export interface LayoutData {
  layoutType: string;
  navStyle: string;
  footerType: string;
  headerType: string;
  footer: boolean;
}

export interface LayoutActions {
  updateLayoutType: (layout: string) => void;
  updateNavStyle: (navStyle: string) => void;
  setFooterType: (footerType: string) => void;
  setFooter: (footer: boolean) => void;
  setHeaderType: (headerType: string) => void;
}

const LayoutContext = createContext<LayoutData>({
  footer: defaultConfig.footer,
  navStyle: defaultConfig.navStyle,
  layoutType: defaultConfig.layoutType,
  footerType: defaultConfig.footerType,
  headerType: defaultConfig.headerType,
})

const LayoutActionsContext = createContext<LayoutActions>({
  updateLayoutType: () => {},
  updateNavStyle: () => {},
  setFooterType: () => {},
  setFooter: () => {},
  setHeaderType: () => {},
})

export const useLayoutContext = () => useContext(LayoutContext)

export const useLayoutActionsContext = () => useContext(LayoutActionsContext)

const LayoutContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [layoutType, updateLayoutType] = useState<string>(
    defaultConfig.layoutType,
  )
  const [navStyle, setNavStyle] = useState<string>(defaultConfig.navStyle)

  const updateNavStyle = useCallback((navStyle: any) => {
    setNavStyle(navStyle)
  }, [])

  const [footerType, setFooterType] = useState<string>(
    defaultConfig.footerType,
  )
  const [footer, setFooter] = useState<boolean>(defaultConfig.footer)
  const [headerType, setHeaderType] = useState<string>(
    defaultConfig.headerType,
  )

  return (
    <LayoutContext.Provider
      value={{
        navStyle,
        footerType,
        footer,
        layoutType,
        headerType,
      }}
    >
      <LayoutActionsContext.Provider
        value={{
          setFooter,
          setFooterType,
          updateNavStyle,
          updateLayoutType,
          setHeaderType,
        }}
      >
        {children}
      </LayoutActionsContext.Provider>
    </LayoutContext.Provider>
  )
}

export default LayoutContextProvider

LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
