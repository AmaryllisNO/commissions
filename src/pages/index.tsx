import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Main.module.css';

import Accordion from '@/components/UI/Accordion';
import CommissionStatus from '@/components/UI/CommissionStatus';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  interface CommissionDataConfig {
    statusOpen: boolean;
    activeSlots: number;
    totalSlots: number;
  }

  const getCommissionData = async () => {
    const res = await fetch('https://commissions-omega.vercel.app/api/data');
    const data: CommissionDataConfig = await res.json();
    return data;
  };

  (async function () {
    try {
      const data = await getCommissionData();
      console.log('data', data);
    } catch (error) {
      console.error(error);
    }
  })();

  return (
    <>
      <Head>
        <title>Commissions</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className='h-28 w-full mt-8 outline-1 outline-red-900 relative'>
          <Image
            src={'svg/COMMISSIONS LOGO.svg'}
            alt='logo'
            fill
            // className='object-cover'
          />
        </div>
        <CommissionStatus />
        <Accordion />

        <div className='h-96 w-80 absolute -bottom-24 -left-24'>
          <Image
            src={'svg/ABSTRACT AMARY(5).svg'}
            alt='Amary Logo'
            fill
            // className='object-cover'
            className='object-contain'
          />
        </div>
      </main>
    </>
  );
}
