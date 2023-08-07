import { Dialog, DialogContentText, DialogTitle, styled } from '@mui/material'

export const DialogStyles = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '1.25rem',
  },
}))

export const DialogTitleStyles = styled(DialogTitle)(() => ({
  fontSize: '2rem',
  textAlign: 'center',
}))

export const DialogContentTextStyles = styled(DialogContentText)(() => ({
  textAlign: 'center',
  paddingLeft: '15%',
  paddingRight: '15%',
}))

export const DialogActionsStyles = styled(DialogContentText)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.6rem',
}))
