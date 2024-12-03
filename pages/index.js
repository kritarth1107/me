import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import Head from 'next/head';

export default function index() {
  return (
    <div className='flex flex-col justify-between h-screen w-full'>
      <Head>
        <title>Kritarth Agrawal</title>
        <meta
          name="description"
          content="Co-founder of Airchains, leveraging years of blockchain and cryptography expertise to advance confidentiality with zkFHE and drive privacy-preserving solutions."
        />
        <meta name="keywords" content="Fully Homomorphic Encryption (FHE), Multi-Party Computation (MPC), Trusted Execution Environment (TEE), Encrypted computation frameworks, Privacy-first blockchain architecture, Confidential smart contracts, Data privacy in decentralized systems, Zero-knowledge proofs (ZKPs), Confidential computing technologies, Secure enclave blockchain solutions, Privacy-preserving cryptography, End-to-end encrypted dApps, Data security in decentralized finance (DeFi), Homomorphic encryption use cases, Distributed ledger confidentiality, On-chain privacy innovations, Scalable privacy solutions for blockchain, Secure computation protocols, Confidential data sharing on blockchain, Cryptographic primitives for privacy, Decentralized identity and privacy, Zero-trust security models for blockchain, Privacy-enhanced data analytics, Next-gen cryptographic technologies, Post-quantum cryptography, Zero-Knowledge Fully Homomorphic Encryption (zkFHE), Blockchain confidentiality solutions, Privacy-preserving blockchain applications, Secure decentralized applications (dApps), Cryptographic privacy techniques, Confidential blockchain transactions, Data privacy in blockchain, zkFHE implementation in blockchain, Blockchain privacy protocols, Secure multiparty computation in blockchain, founder of Airchains, Airchains CTO, blockchain innovator, cryptography expert, zkFHE pioneer, privacy-focused blockchain leader, decentralized application developer, blockchain confidentiality advocate, blockchain entrepreneur, cryptographic solutions architect." />
      
        <meta property="og:title" content="Kritarth Agrawal | Co-founder & CTO Airchains" />
  <meta property="og:description" content="Kritarth Agrawal focuses on zkFHE and blockchain confidentiality for privacy-preserving applications." />
  <meta property="og:url" content="https://kritarthagrawal.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://kritarthagrawal.com/kritarth-agrawal.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kritarth Agrawal | Co-founder & CTO Airchains" />
  <meta name="twitter:description" content="Specializing in zkFHE and blockchain privacy solutions." />
  <meta name="twitter:image" content="https://kritarthagrawal.com/kritarth-agrawal.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='max-w-[1200px] mx-auto w-full'>
      <nav className='flex flex-row item-center justify-between py-8'>
        {/* Icon and Email */}
          <div className='flex flex-row items-center gap-6'>
            <span className='font-extrabold text-[36px]'>K.</span>
            <div>
              /
            <Link href="mailto:kritarth@airchains.io"> <span className='underline tracking-wide font-light'>kritarth@airchains.io</span></Link>
            </div>
            
          </div>
          <div  className='flex flex-row items-center gap-3'>
          <Link href="https://x.com/kritarthagrawal" target="_blank"><RiTwitterXLine size={23} /></Link>
          <Link href="https://www.linkedin.com/in/kritarthagrawal/" target="_blank"><FaLinkedin size={25}/></Link>
          <Link href="https://discord.gg/joinairchains" target="_blank"><FaDiscord size={25} /></Link>

          </div>
      </nav>

     

    </div>
  
   {/* Main Body */}

   <div className='flex flex-col gap-[80px] max-w-[1200px] mx-auto w-full'>
      <div className='flex flex-row justify-between'>
            {/* Name */}
            <div className='flex flex-col'>
                <span className='font-semibold text-[24px]'>Hello I'm,</span>
                <span className='font-bold text-[160px] tracking-tight leading-[150px]'>Kritarth A.</span>
                <span className='font-extralight  text-[20px] text-[#4B4B4B]'>Co-founder & CTO at <Link href="https://airchains.io" target='_blank'><span className='underline'>Airchains</span></Link></span>
            </div>
            {/* Image */}
            <div>
              <Image
              width={1000}
              height={1000}
              className='h-48 w-48'
              src='/kritarth-agrawal.png' />
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            {/* Content */}
            <div className='flex flex-row items-center gap-8'>
            <Image
              width={1000}
              height={1000}
              className='h-40 w-auto'
              src='/guidance_up-arrow.png'
              alt='kritarth-agrawal-co-founder-airchains' />

              <span className='max-w-[500px] leading-[38px] text-[18px] font-light'>
              With a Computer Science background, I lead Airchains’ efforts to integrate zkFHE, making blockchain indispensable for real-world use.
              </span>
            </div>
            {/* Links */}
            <div className='flex flex-col gap-4 text-right'>
              <div><Link href="https://docsend.com/view/a8hrvn5vfhd94nqb" target="_blank"><span className='text-[#ACACAC] font-light underline'>Whitepaper</span></Link></div>
              <div><Link href="https://kritarthagrawal.medium.com/" target="_blank"><span className='text-[#ACACAC] font-light underline'>Medium</span></Link></div>
              <div><Link href="https://github.com/airchains-network" target="_blank"><span className='text-[#ACACAC] font-light underline'>Github</span></Link></div>
            </div>
          </div>
      </div>

    <div className='bg-[#FCFCFC] py-6'>
        <div className='max-w-[1200px] mx-auto w-full'>
          <span className='text-[#A7A7A7] font-thin'>In blockchain, confidentiality isn’t just a feature—it’s the foundation of trust in a decentralized world.</span>
        </div>
    </div>
      
    </div>
  )
}


