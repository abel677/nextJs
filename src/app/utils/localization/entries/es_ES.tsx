import { esES } from '@mui/material/locale'

import saMessages from '../locales/es_ES.json'
import sasMessagesLogin from '../locales/auth/es_login_form.json'

const saLang = {
  messages: {
    ...saMessages,
    ...sasMessagesLogin
  },
  muiLocale: esES,
  locale: 'es',
}
export default saLang
