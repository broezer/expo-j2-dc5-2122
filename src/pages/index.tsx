/* eslint-disable no-empty-pattern */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';

import Container from '@/components/Container';
import Main from '@/components/Main';

import { getSortedPostsData } from '../../lib/posts';

interface Post {
  title: string;
  id: string;
}

interface IProps {
  allPostsData: Post[];
}

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = shuffleArray(getSortedPostsData());
  return {
    props: {
      allPostsData
    }
  };
};

const Home: NextPage<IProps> = ({}) => {
  const classAList = [
    { title: 'Dynamic System', link: 'dynamic-system' },
    { title: 'Idera', link: 'idera' },
    { title: 'WeDesign', link: 'we-design' },
    { title: 'We Bond!', link: 'we-bond' },
    { title: 'WeCreate', link: 'we-create' }
  ];

  const classBList = [
    { title: 'Team Undecided', link: 'team-undecided' },
    { title: 'In n Out', link: 'in-n-out' },
    { title: 'Team RANJAH', link: 'team-ranjah' },
    { title: 'Reach Out', link: 'reach-out' },
    { title: 'We Anwser', link: 'we-anwser' }
  ];

  // eslint-disable-next-line prettier/prettier
  const classCList = [
    { title: 'CMTA', link: 'cmta' },
    { title: 'Anoniem', link: 'anoniem' },
    { title: 'WiiTransfer', link: 'wii-transfer' },
    { title: 'Frietfjieuw', link: 'frietfjieuw' },
    { title: 'Tom', link: 'tom' }
  ];

  const classDList = [
    { title: 'Bijmekaar Geraapt Zootj', link: 'bgz' },
    { title: 'No Boys Please', link: 'no-boys-please' },
    { title: 'Portie', link: 'portie' },
    { title: 'The Monkey Business', link: 'tmb' },
    { title: 'Women of Wisdom', link: 'wow' }
  ];

  const classEList = [
    { title: 'AMG', link: 'amg' },
    { title: 'Diverse', link: 'diverse' },
    { title: 'Raja Official', link: 'raja-official' },
    { title: 'Voor Goud', link: 'voorgoud' },
    { title: 'WeTransform', link: 'we-transform' }
  ];

  return (
    <>
      <Container>
        <Head>
          <title>! CMD DC5 2021-2022 </title>
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <Main className="text-left justify-start">
          <h1 className="text-green-400 uppercase text-4xl py-4 font-black">
            High Fidelity Protoype Party
          </h1>
          <h2 className="text-purple-600 uppercase text-sm font-black">2A</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classAList.map((team, index) => (
              <li
                className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out"
                data-index={index}>
                <Link href={`/team/${team.link}`}>
                  <a>{team.title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2B</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classBList.map((team, index) => (
              <li
                className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out"
                data-index={index}>
                <Link href={`/team/${team.link}`}>
                  <a>{team.title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2C</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classCList.map((team, index) => (
              <li
                className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out"
                data-index={index}>
                <Link href={`/team/${team.link}`}>
                  <a>{team.title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2D</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classDList.map((team, index) => (
              <li
                className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out"
                data-index={index}>
                <Link href={`/team/${team.link}`}>
                  <a>{team.title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2E</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classEList.map((team, index) => (
              <li
                className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out"
                data-index={index}>
                <Link href={`/team/${team.link}`}>
                  <a>{team.title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>
        </Main>
      </Container>
    </>
  );
};

export default Home;
