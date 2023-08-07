import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'



import AppLocale from '@/app/utils/localization';
import { IntlGlobalProvider } from '@/app/utils/helper/Utils';

interface AppLocaleProviderProps {
  children: ReactNode;
}

const AppLocaleProvider: React.FC<AppLocaleProviderProps> = (props) => {
  const currentAppLocale = AppLocale.es

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  )
}

export default AppLocaleProvider
