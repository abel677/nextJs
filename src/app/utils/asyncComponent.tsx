import dynamic from 'next/dynamic'
import React from 'react'
import AppLoader from '../components/generic/AppLoader'


export default function asyncComponent(importComponent: any) {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
  })
}
