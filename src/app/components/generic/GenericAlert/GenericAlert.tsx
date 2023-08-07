import { Box, Button, DialogContent, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import { BiInfoCircle } from 'react-icons/bi'

import {
  DialogActionsStyles,
  DialogContentTextStyles,
  DialogStyles,
  DialogTitleStyles,
} from './styles'
import IntlMessages from '@/app/utils/IntlMessages'



interface IGenericAlertProps {
  isOpen: boolean
  onAccept?: () => void
  onCancel?: () => void
  title: ReactNode
  message: ReactNode
  textButton: ReactNode
}

const GenericAlert: React.FC<IGenericAlertProps> = ({
  isOpen,
  onAccept,
  onCancel,
  title,
  message,
  textButton,
}) => {
  const theme = useTheme()

  return (
    <DialogStyles open={isOpen}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <BiInfoCircle fontSize={50} color={theme.palette.primary.main} />
        <DialogTitleStyles variant="h1">{title}</DialogTitleStyles>
        <DialogContent>
          <DialogContentTextStyles>{message}</DialogContentTextStyles>
        </DialogContent>

        {onAccept && (
          <DialogActionsStyles sx={{}}>
            {onCancel && (
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'initial',
                }}
                onClick={onCancel}
              >
                <IntlMessages id="form.button.cancel" />
              </Button>
            )}
            <Button
              variant="contained"
              sx={{
                textTransform: 'initial',
              }}
              onClick={onAccept}
              autoFocus
            >
              {textButton}
            </Button>
          </DialogActionsStyles>
        )}
      </Box>
    </DialogStyles>
  )
}

export default GenericAlert
