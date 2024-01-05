import Head from 'next/head'
import { Jura } from "next/font/google"
import localFont from "next/font/local"
import styles from 'styles/Home.module.css'
import {ImgixProvider} from "components/ImgixProvider";
import {ImgixImage} from "components/ImgixImage";

const jura = Jura({ subsets: ['latin'], weight: ['400'] })
const horta = localFont({
  src: [
    {
      path: '../../public/fonts/horta-regular-webfont.woff2',
      weight: '400',
    }
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Shotgun Sinner Records | Music Store in Manila PH</title>
        <meta name="description" content="A music store dedicated to rock and metal music based in Manila, Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://shotgunsinner.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shotgun Sinner Records | Music Store in Manila PH" />
        <meta name="twitter:card" content="A music store dedicated to rock and metal music based in Manila, Philippines" />
        <meta
          property="og:description"
          content="A music store dedicated to rock and metal music based in Manila, Philippines"
        />
        <meta property="og:image" content='/site-preview.png' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://lazada.com.ph/shop/shotgunsinnerrecords"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order from our Lazada 🛸
            </a>
          </div>
          <div>
            <a
              href="https://facebook.com/shotgunsinnerrecords"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Facebook 🤘🏻
            </a>
          </div>
          <div>
            <a
              href="https://shopee.ph/shotgunsinnerrecords"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order from our Shopee 👻
            </a>
          </div>
        </div>

        <div>
          <div className={styles.center}>
            <ImgixProvider>
              <ImgixImage
                className={styles.logo}
                src="/shotgun-sinner-records-logo.png"
                alt="Shotgun Sinner Records Logo"
                width={500}
                height={140}
                priority
              />
              <ImgixImage
                className={styles.logoMobile}
                src="/shotgun-sinner-records-logo-square.png"
                alt="Shotgun Sinner Records Logo"
                width={300}
                height={300}
                priority
              />
            </ImgixProvider>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={horta.className}>
                We only sell <br/> original items
              </h2>
              <p className={jura.className}>
                We are collectors ourselves and <br/> we are allergic to b00tleg
              </p>
            </div>

            <div className={styles.card}>
              <h2 className={horta.className}>
                Dedicated to <br/> rock and metal fans
              </h2>
              <p className={jura.className}>
                We source out rare albums <br/> for your collection
              </p>
            </div>

            <div className={styles.card}>
              <h2 className={horta.className}>
                We pack them <br/> like we own them
              </h2>
              <p className={jura.className}>
                Guaranteed your orders are <br/> well-packed & with fragile labels
              </p>
            </div>

            <div className={styles.card}>
              <h2 className={horta.className}>
                Ships within <br/> 1-2 business days
              </h2>
              <p className={jura.className}>
                Orders placed Mon-Thu (ships <br/> in 1-2 days), Fri-Sun (2-4 days)
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerColumn}>
            <p className={jura.className}>
              &copy; 2024 Shotgun Sinner Records. All rights reserved.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <p className={jura.className}>
              💌 &nbsp; info@shotgunsinner.com &bull; 📞 &nbsp; +63 962 071 4799
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
