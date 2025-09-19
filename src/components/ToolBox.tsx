import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdAdsClick } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';

interface CompanyRole {
  index: number;
  image: string;
  image_dark: string;
  name: string;
  role: string;
  description: string;
  company_link: string;
  hover_gif_dark: string;
  hover_gif_light: string;
  back_line?: string;
}

export default function LeadershipCompanies() {
  const [modalImg, setModalImg] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { theme } = useTheme();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImg(undefined);
      // Also flip back on Escape if card is flipped
      if (e.key === 'Escape') setFlippedIndex(null);
    };
    window.addEventListener('keydown', closeOnEscapeKey);
    return () => window.removeEventListener('keydown', closeOnEscapeKey);
  }, []);

  useEffect(() => {
    setShowModal(modalImg !== undefined);
  }, [modalImg]);

  const companyRoles: CompanyRole[] = [
    {
      index: 1,
      image: '/project_thumbnails/light/magnest_realty.png',
      image_dark: '/project_thumbnails/dark/magnest_realty.png',
      name: 'Magnest Realty',
      role: 'Broker of Record',
      description: 'Real Estate Brokerage',
      company_link: 'https://www.magnest.ca',
      hover_gif_dark: '/project_gifs/dark/magnest_realty.png',
      hover_gif_light: '/project_gifs/light/magnest_realty.png',
      back_line: 'Magnest Realty aim to empower both clients and real estate professionals—blending innovation with trusted expertise.',
    },
    {
      index: 2,
      image: '/project_thumbnails/light/magnest_aiL.png',
      image_dark: '/project_thumbnails/dark/magnest_aiD.png',
      name: 'Magnest AI',
      role: 'Founder',
      description: 'Asset Management Platform',
      company_link: 'https://magnest.ca',
      hover_gif_dark: '/project_gifs/dark/magnest_aiD.png',
      hover_gif_light: '/project_gifs/light/magnest_aiL.png',
      back_line: 'Maximize income and efficiency with AI-powered property management platform.',
    },
    {
      index: 3,
      image: '/project_thumbnails/light/wheelhouse.png',
      image_dark: '/project_thumbnails/dark/wheelhouse.png',
      name: 'Wheelhouse',
      role: 'Founder',
      description: 'Real Estate Corporation',
      company_link: 'https://www.arunpandeygroup.com',
      hover_gif_dark: '/project_gifs/dark/wheelhouse.png',
      hover_gif_light: '/project_gifs/light/wheelhouse.png',
      back_line: 'Smart Advice. Real Estate Growth. Financial Freedom.',
    },
    {
      index: 4,
      image: '/project_thumbnails/light/cellspark.png',
      image_dark: '/project_thumbnails/dark/cellspark.png',
      name: 'CellSpark Consulting',
      role: 'Advisory Board Member',
      description: 'Life Sciences Consulting',
      company_link: 'https://cellsparkconsulting.com',
      hover_gif_dark: '/project_gifs/dark/cellspark.png',
      hover_gif_light: '/project_gifs/light/cellspark.png',
      back_line: 'Consulting at the forefront of life sciences.',
    },
    {
      index: 5,
      image: '/project_thumbnails/light/r3.png',
      image_dark: '/project_thumbnails/dark/r3.png',
      name: 'r3 Advisory Services',
      role: 'Advisory Board Member',
      description: 'Third Party Risk Management',
      company_link: 'https://r3a.ca',
      hover_gif_dark: '/project_gifs/dark/r3.png',
      hover_gif_light: '/project_gifs/light/r3.png',
      back_line: 'Experts in third-party risk advisory services.',
    },
  ];

  return (
    <>
      <Element name="leadership" className="relative" />
      <div className="mb-48">
        <h1 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
          Entrepreneurial Journey
        </h1>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
          {companyRoles.map((company, idx) => (
            <div
              key={company.index}
              className="relative [perspective:1000px] m-6 w-[340px] h-[390px]"
            >
              <div
                className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedIndex === idx ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 [backface-visibility:hidden] flex flex-col justify-between">
                  <Fade bottom>
                    <div className="relative flex items-center justify-center w-[140px] h-[110px] mb-4 mx-auto">
                      <Image
                        src={theme === 'light' ? company.image : company.image_dark}
                        alt={company.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        onClick={() =>
                          setModalImg(theme === 'dark' ? company.image_dark : company.image)
                        }
                        className="absolute transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0"
                      />
                      <Image
                        src={theme === 'light' ? company.hover_gif_light : company.hover_gif_dark}
                        alt={`${company.name} Demo`}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="absolute"
                      />
                    </div>

                    <div className="w-full">
                      <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500 font-semibold">
                        {company.description}
                      </p>
                      <p className="my-1 text-xl font-medium">{company.name}</p>
                      <p className="my-1 text-md text-gray-600 dark:text-gray-300 italic">{company.role}</p>
                      <div className="flex justify-between mt-3 relative">
                        <Link
                          className="text-sm"
                          href={company.company_link}
                          aria-label="Visit Company"
                          onClick={e => {
                            e.preventDefault();
                            window.open(company.company_link, '_blank');
                          }}
                        >
                          Visit
                          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
                        </Link>
                        <button
                          className="absolute bottom-0 right-0 p-2 rounded-full bg-cyan-200 dark:bg-cyan-800 hover:bg-cyan-400 dark:hover:bg-cyan-500 transition"
                          aria-label="Flip Card"
                          onClick={() => setFlippedIndex(idx)}
                          type="button"
                        >
                          <MdAdsClick className="text-4xl text-black dark:text-white transition delay-75 ease-in-out hover:scale-125" />
                        </button>
                      </div>
                    </div>
                  </Fade>
                </div>

                {/* BACK SIDE */}
                <div className="absolute w-full h-full bg-cyan-50 dark:bg-gray-700 rounded-xl border-2 border-cyan-200 p-5 text-cyan-700 dark:text-cyan-300 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center">
                  <div className="mb-4 text-xl font-semibold">{company.name}</div>
                  <div className="mb-6 text-base text-center">{company.back_line ?? 'Company details not available.'}</div>
                  <button
                    className="mt-auto p-2 rounded-full bg-cyan-200 dark:bg-cyan-800 hover:bg-cyan-400 dark:hover:bg-cyan-500 transition"
                    aria-label="Flip Back"
                    onClick={() => setFlippedIndex(null)}
                    type="button"
                  >
                    Flip Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="modal"
        className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
          showModal ? 'flex' : 'hidden'
        }`}
        onClick={() => setModalImg(undefined)}
      >
        <div className="flex items-center justify-center sm:m-10 lg:m-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="modal-img" alt="" src={modalImg ?? ''} className="max-h-[90dvh]" />
        </div>
      </div>
    </>
  );
}




