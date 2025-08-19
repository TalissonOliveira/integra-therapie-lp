/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
'use client'
import Script from 'next/script'

export function FacebookPixel() {
  if (!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) {
    console.warn(
      'Facebook Pixel ID is missing. Please set it in your environment variables.'
    )
  }

  return (
    <>
      {/* Meta Pixel Script */}
      <Script strategy="afterInteractive" id="facebook-pixel">
        {`
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return;
              n=f.fbq=function(){
                n.callMethod ?
                n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              }
              if(!f._fbq) f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
      </Script>

      {/* NoScript for browsers with JS disabled */}
      <noscript>
        <img
          alt="facebook-pixel"
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
