import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import Head from 'next/head';

export const metadata = {
  title: 'Blog App by Luke Barry',
  description: 'The best blog app evar!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer/>
          </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
