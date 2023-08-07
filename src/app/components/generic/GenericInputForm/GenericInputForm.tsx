import { TextFieldProps } from '@mui/material'

import {forwardRef } from 'react'

import { TextFieldStyles } from './styles'


const GenericInputForm = forwardRef<any, TextFieldProps>(( props, ref ) => {
  return (
    <TextFieldStyles {...props} ref={ref} />
  )
})

GenericInputForm.displayName = 'GenericInputForm'

export default GenericInputForm
