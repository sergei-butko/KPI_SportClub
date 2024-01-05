'use client'
import './globals.css'
import {SessionProvider} from "next-auth/react";
import RootHeader from "@/app/(headers)/root-header";
import React from "react";


// export const metadata = {
//   title: 'Sport Club',
//   description: 'Home page of sport club app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <SessionProvider>
          <main>
              <RootHeader/>
              {children}
          </main>
      </SessionProvider>
      </body>
    </html>
  )
}
