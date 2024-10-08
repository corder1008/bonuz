/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import walletIcon from "../../public/icons/wallet-icon.svg";
import copyIcon from "../../public/icons/copy-icon.svg";
import walletAvatar from "../../public/icons/wallet-avatar-icon.svg";

import socialIcon from "../../public/icons/social-icon.svg";
import messageIcon from "../../public/icons/message-icon.svg";
import blockchainIcon from "../../public/icons/blockchain-icon.svg";
import decentralIcon from "../../public/icons/decentral-icon.svg";
import dropdownIcon from "../../public/icons/dropdown-icon.svg";
import cancleIcon from '../../public/icons/arrow-cancle.png';
import searchIcon from '../../public/icons/search.svg';


import Frame1 from "../../public/images/carousel/Frame_1.png";
import Frame2 from "../../public/images/carousel/Frame_2.png";
import Frame3 from "../../public/images/carousel/Frame_3.png";
import Frame4 from "../../public/images/carousel/Frame_4.png";

import GoogleIcon from "../../public/icons/apple.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const frames = [Frame1, Frame2, Frame3, Frame4];

  function shortenEthereumAddress(address: any) {
    if (address) {
      const firstPart = address.slice(0, 6);
      const lastPart = address.slice(-6);
      return `${firstPart}...${lastPart}`;
    }
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? frames.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === frames.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      router.push(`/q=${searchQuery}&filters=all`)
    }
  }

  return (
    <>
      <Head>
        <title>WalletConnect | Next Starter Template</title>
        <meta name="description" content="Generated by create-wc-dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className="w-full">
          <div className="flex gap-2 w-full z-50 mb-2 max-w-screen-xl flex flex-wrap flex-col">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                const navbar = document.getElementById("navbar-default");
                if (navbar) {
                  if (navbar.classList.contains("hidden")) {
                    navbar.classList.remove("hidden");
                  } else {
                    navbar.classList.add("hidden");
                  }
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:flex md:w-auto gap-2"
              id="navbar-default"
            >
              <ul className="flex w-full gap-2 flex-col md:flex-row">
                <li>
                  <button
                    className="w-[228px] h-[41px] rounded-[40px] bg-custom-bg-gradient border border-transparent"
                    style={{
                      borderImageSource:
                        "linear-gradient(3.31deg, rgba(255, 161, 16, 0.6) -14.44%, rgba(255, 161, 16, 0) 91.68%)",
                      borderWidth: "1px",
                    }}
                  >
                    bonuz.market #Ecosystem
                  </button>
                </li>
                <li>
                  <button
                    className="w-[208px] h-[41px] rounded-[40px] border border-transparent"
                    style={{
                      background:
                        "linear-gradient(97.19deg, rgba(106, 52, 211, 0.4) 14.82%, rgba(106, 52, 211, 0) 83.7%)",
                      borderImageSource:
                        "linear-gradient(3.31deg, rgba(255, 161, 16, 0.6) -14.44%, rgba(255, 161, 16, 0) 91.68%)",
                      borderWidth: "1px",
                    }}
                  >
                    Whitepaper #Degen
                  </button>
                </li>
                <li>
                  <button
                    className="w-[208px] h-[41px] gap-[8px] rounded-[30px]"
                    style={{
                      background:
                        "linear-gradient(122.58deg, #e79413 -19.89%, #ea3e5b 48.73%, #fa0af0 119.63%)",
                    }}
                  >
                    Documentation #Devs
                  </button>
                </li>
                <li>
                  <button
                    className="w-[208px] h-[41px] gap-[8px] rounded-[30px]"
                    style={{
                      background:
                        "linear-gradient(122.58deg, #e79413 -19.89%, #ea3e5b 48.73%, #fa0af0 119.63%)",
                    }}
                  >
                    Bonuz Wallet
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="relative z-[100] pb-[13px] rounded-[40px] w-full flex flex-col bg-[#9c9c9c4d] px-[5px] py-[5px] md:px-[75px] md:py-[89px]">
          <div
            className="flex w-full flex-col md:flex-row"
          >
            <div className="flex flex-col flex-1">
              <div
                className="flex justify-between max-w-[700px] p-[10px] gap-0 rounded-[30px] bg-gradient-to-r from-[#0e2875] to-[#4b2ea2] via-[#4b2ea2] flex-col flex-col md:flex-row md:p-[46px]"
              >
                <div>
                  <div className=' h-[268px] gap-[16px] w-full md:w-[213px]'>
                    <div className='flex w-full justify-center mb-[30px]'>
                      <Image
                        src={walletAvatar}
                        alt="walletAvatar"
                        width={140}
                        height={140}
                      />
                    </div>
                    <div className="h-[112px] px-[16px] gap-[12px] w-full md:w-[213px]">
                      <p className="text-center">Santiago Bob</p>
                      <p className="text-center">@bob</p>
                      <div className="flex h-[40px] p-[8px_10px] gap-[12px] rounded-[12px] w-full justify-center md:w-[200px]">
                        <Image
                          src={walletIcon}
                          alt="walletIcon"
                          width={24}
                          height={24}
                        />
                        <p>{shortenEthereumAddress("0x235e3Bc8aA372bee06A3f2E264895022fCE7c2e7")}</p>
                        <Image
                          src={copyIcon}
                          alt="copyIcon"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex h-[64px] p-[12px] gap-[30px] rounded-[24px] items-center justify-between w-full md:w-[361px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={socialIcon}
                        width={40}
                        height={40}
                        alt="socialIcon"
                      />
                      <p>Social Media Accounts</p>
                    </div>
                    <Image
                      src={dropdownIcon}
                      width={28}
                      height={28}
                      alt="dropdownIcon"
                    />
                  </div>
                  <div className="flex h-[64px] p-[12px] gap-[30px] rounded-[24px] items-center justify-between w-full md:w-[361px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={messageIcon}
                        width={40}
                        height={40}
                        alt="messageIcon"
                      />
                      <p>Messaging Apps</p>
                    </div>
                    <Image
                      src={dropdownIcon}
                      width={28}
                      height={28}
                      alt="dropdownIcon"
                    />
                  </div>
                  <div className="flex h-[64px] p-[12px] gap-[30px] rounded-[24px] items-center justify-between w-full md:w-[361px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={blockchainIcon}
                        width={40}
                        height={40}
                        alt="blockchainIcon"
                      />
                      <p>Blockchain & Wallets</p>
                    </div>
                    <Image
                      src={dropdownIcon}
                      width={28}
                      height={28}
                      alt="dropdownIcon"
                    />
                  </div>
                  <div className="flex h-[64px] p-[12px] gap-[30px] rounded-[24px] items-center justify-between :w-full md:w-[361px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={decentralIcon}
                        width={40}
                        height={40}
                        alt="decentralIcon"
                      />
                      <p>Decentralized Identifiers</p>
                    </div>
                    <Image
                      src={dropdownIcon}
                      width={28}
                      height={28}
                      alt="dropdownIcon"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-[510px] top-[548px] left-[142px] gap-[24px] mt-[5rem]">
                  <p className="font-space-grotesk font-bold leading-[61.6px] tracking-[-0.08em] text-left text-white text-[40px] md:text-[56px]">
                    Exclusive BRC-721 Social ID Airdrop
                  </p>
                  <p className="font-inter font-normal leading-[24px] tracking-[-0.4px] text-left text-white opacity-60 mt-[24px] text-[12px] md:text-[16px]">
                    Get Your exclusive 2-char, 3-char or 4-char letter Bonuz
                    username and secure your spot for the next round of quests
                    coming soon! We will mint BTC username similar to lens
                    powered by the bonuz ecosystem!
                  </p>
                </div>
                <button className="h-[51px] gap-[8px] rounded-[30px] bg-custom-gradient my-[29px] w-full md:w-[330px]">
                  Mint for 0.00011 $BTC
                </button>
              </div>
            </div >
            <div className="flex flex-col flex-1 items-center">
              <div
                id="controls-carousel"
                className="relative w-full w-[550px] h-[330px] flex justify-center"
                data-carousel="static"
              >
                <button
                  type="button"
                  className="top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                  onClick={handlePrev}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <svg
                      className="w-4 h-4 text-white  rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <div className="relative overflow-hidden rounded-lg h-[100%] w-[100%] flex items-center justify-center">
                  {frames.map((frame, index) => (
                    <div
                      key={index}
                      className={`duration-700 ease-in-out ${index === currentIndex ? "block" : "hidden"
                        }`}
                      data-carousel-item={
                        index === currentIndex ? "active" : undefined
                      }
                    >
                      <Image
                        src={frame}
                        alt={`Frame ${index + 1}`}
                        width={330}
                        height={330}
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                  onClick={handleNext}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
              <div>
                <h2 className="h-[68px] mt-[62px] font-inter font-bold text-[28px] leading-[34px] text-center tracking-[-0.4px] text-white self-stretch md:w-[360px]">
                  Connect to Apps & Dapps using your Wallet
                </h2>
                <p className="h-[48px] mt-10 font-inter font-normal text-[16px] leading-[24px] text-center tracking-[-0.4px] text-white opacity-60 self-stretch md:w-[360px]">
                  Seamlessly access and use your favorite Web3 applications
                  directly from your wallet interface
                </p>
              </div>
              <div className="mt-[55px] flex gap-[24px] flex-col md:flex-row w-full">
                <button className="flex items-center justify-center gap-[4px] isolate h-[56px] bg-white rounded-[16px] w-full md:w-[172.63px]">
                  <Image
                    src={GoogleIcon}
                    alt="GoogleIcon"
                    width={32}
                    height={36}
                  />
                  <div>
                    <p className="text-start text-black text-[12px] font-normal">Download on the</p>
                    <p className="text-start text-black text-[22px] font-semibold">App Store</p>
                  </div>
                </button>

                <button className="flex items-center justify-center gap-[4px] isolate h-[56px] bg-white rounded-[16px] w-full md:w-[172.63px]">
                  <Image
                    src={GoogleIcon}
                    alt="GoogleIcon"
                    width={32}
                    height={36}
                  />
                  <div>
                    <p className="text-start text-black text-[12px] font-normal">GET IT ON </p>
                    <p className="text-start text-black text-[22px] font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <hr className="flex w-full mt-2 md:hidden" />
          </div >
          <hr className="flex w-[98%]" />
          <div className="flex justify-between items-center mt-[28px] flex-col md:flex-row md: gap-2">
            <p className='font-[26px] hidden md:flex'>bonuz</p>
            <div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] bg-[url('/icons/up-icon.png')] rounded-[50px] bg-center flex justify-center items-center cursor-pointer" onClick={() => router.push('/')} />
            <button className="rounded-[30px] px-[8px] bg-custom-gradient1">
              Connect Bonuz On-Chain Social ID
            </button>
          </div>
        </div >

        <div className="mt-16 w-full h-[48px] flex justify-between items-center justify-center p-3 pt-0 gap-2 rounded-[30px] border-2 pb-0 pt-0 border-[#9651FF]">
          <Image src={searchIcon} width={24} height={24} alt="search" />
          <input name="search" className="w-full bg-transparent font-inter text-base font-normal leading-6 tracking-tight text-left border-none" defaultValue="Search" onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} />
          <Image src={cancleIcon} width={30} height={30} alt="cancle" className="cursor-pointer" />
        </div>
      </main >
    </>
  );
}
