import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


const name = 'Rumsan Blogs'
export const siteTitle = 'Rumsan Group of companies'

export default function Layout({ children, home }) {
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="https://assets.rumsan.com/rumsan-test/rumsan-favicon.png" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <header className={styles.header}>
                    {home ? (
                        <>
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                            <>
                                <div className="mt-5 ">

                                </div>
                            </>
                        )}
                </header>
                <main>{children}</main>
                {!home && (
                    <div className="container mx-auto px-20">
                        <div className={styles.backToHome}>
                            <Link href="/">
                                <a>← Back to home</a>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    )
}
