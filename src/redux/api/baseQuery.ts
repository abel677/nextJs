import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import type { RootState } from '../store'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: ( headers, { getState }) => {
    const { token } = ( getState() as RootState ).authState

    if ( token ) {
      headers.set( 'Authorization', `Bearer ${token}` )
      headers.set( 'Content-Type', 'application/json' )
    }

    return headers
  },
})
