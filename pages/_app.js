import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider appId="EI8tIFwcnbXiJcUVRpUeRynlT9qUExdQRzh9ei7d"
     serverUrl="https://lrb96utz4vnm.usemoralis.com:2053/server">
<Component {...pageProps} />
    </MoralisProvider>
    
  ) 
}

export default MyApp