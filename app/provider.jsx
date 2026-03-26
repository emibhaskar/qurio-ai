import { ThemeProvider as NextThemesProvider } from "next-themes"
import React from 'react'

function provider({children,
  ...props}) {
  return (
    <NextThemesProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        {...props}>
    <div>{children}</div>
    </NextThemesProvider>
  )
}

export default provider
