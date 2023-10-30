import React from "react";
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  const [loaded , setLoaded] = React.useState(false)

  React.useEffect(()=>{
    setLoaded(true)
  },[])

  return loaded && <Component {...pageProps} />
}
