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
              href="https://shopee.ph/shotgunsinnerrecords"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order from our Shopee 🛸
            </a>
          </div>

          <div>
            <span>
              A music store in Manila, Philippines
            </span>
          </div>
          <div>
            <a
              href="https://www.lazada.com.ph/shop/shotgunsinnerrecords"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order from our Lazada 👻
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <ImgixProvider>
            <ImgixImage
              className={styles.logo}
              src="/shotgun-sinner-records-logo.png"
              alt="Undeciphered Clothing Logo"
              width={500}
              height={140}
              priority
            />
            <ImgixImage
              className={styles.logoMobile}
              src="/shotgun-sinner-records-logo-square.png"
              alt="Undeciphered Clothing Logo"
              width={300}
              height={300}
              priority
            />
          </ImgixProvider>
        </div>

        <div className={styles.grid}>
          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244704110"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={horta.className}>
              CYBERPUNK
            </h2>
            <p className={jura.className}>
              Wear something Gibsonesque 🦾 <br />
              10 designs to choose from!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244850338"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={horta.className}>
              IMPACT THREADS
            </h2>
            <p className={jura.className}>
              Support a cause for every purchase 🤍 <br />
              Designs out now!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244885371"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={horta.className}>
              MANIFESTO
            </h2>
            <p className={jura.className}>
              Speak without saying a word 😌 <br />
              Grab all 5 designs!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244882766"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={horta.className}>
              DARK MODE
            </h2>
            <p className={jura.className}>
              Because light attracts bugs 👩‍💻 <br />
              Collect all 10 designs!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
