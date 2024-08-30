import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./components/Head";
import Logout from "./components/Logout"

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Mood Regulator",
  description: "Track your daily mood everyday of the year",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
      <h1 className={"text-base sm:text-lg textGradient text-slate-800 " + fugaz.className} >Mood</h1>
      </Link>
      <Logout />
    </header>
  )
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-600 ${fugaz.className}`}>Created With 💖 from Chris</p>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + opensans.className}>
        {header}
        {children}
        {footer }
        </body>
      </AuthProvider>
    </html>
  );
}
