import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm John, a second-year computer engineering student. My hobbies include playing the piano and guitar, playing basketball with my friends, watching TV series, and learning coding. I took up computer engineering because I was fascinated by how hardware and software work together. In five years, I envision myself in a stable job, actively applying the principles of computer engineering, constantly learning, and contributing to innovative projects.</p>
        <ul className={utilStyles.list}>
          <li>• I expect this subject to help me improve my coding skills.</li>
          <li>• I expect to learn how to create interactive websites.</li>
          <li>• Expecting it to teach me effective design techniques.</li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}