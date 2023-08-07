import asyncComponent from '@/app/utils/asyncComponent'
import React from 'react'



const LoginForm = asyncComponent(
  () => import('../../components/login/Login'),
)


export default function LoginPage() {
  return (
    <LoginForm />
  )
}
