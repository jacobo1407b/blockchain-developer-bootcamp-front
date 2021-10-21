import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }}>
      <div className="flex h-screen w-full bg-gray-800 " x-data="{openMenu:1}">
      <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
