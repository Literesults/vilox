'use client'
import { Inter } from "next/font/google";
import 'remixicon/fonts/remixicon.css'
import "./globals.css";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import Store from "./Store";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let persistor = persistStore(Store)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={Store}>
          <PersistGate persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
