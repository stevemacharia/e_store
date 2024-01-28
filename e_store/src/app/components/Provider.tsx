"use client"
import React, { Children } from 'react'
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

const Provider = ({children}: ProviderProps) => {
  return (
    <SessionProvider>
        {Children}
    </SessionProvider>
  )
}

export default Provider