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
    'Dynamic System',
    'Idera',
    'WeDesign',
    'We Bond!',
    'WeCreate'
  ];

  const classBList = [
    'Team Undecided',
    'In n Out',
    'Team RANJAH',
    'Reach Out',
    'We Anwser'
  ];

  // eslint-disable-next-line prettier/prettier
  const classCList = [
    'CMTA',
    'Anoniem',
    'WiiTransfer',
    'Frietfjieuw',
    'Tom'
  ];

  const classDList = [
    'Bijmekaar Geraapt Zootj',
    'No Boys Please',
    'Portie',
    'The Monkey Business',
    'Women of Wisdom'
  ];

  const classEList = [
    'AMG',
    'Diverse',
    'Raja Official',
    'Voor Goud',
    'WeTransform'
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
            {classAList.map(name => (
              <li className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${name}`}>
                  <a>{name}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2B</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classBList.map(name => (
              <li className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${name}`}>
                  <a>{name}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2C</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classCList.map(name => (
              <li className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${name}`}>
                  <a>{name}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2D</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classDList.map(name => (
              <li className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${name}`}>
                  <a>{name}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>

          <h2 className="text-purple-600 uppercase text-sm font-black">2E</h2>

          <ul className="container no-underline flex flex-wrap  justify-center text-black mb-10">
            {classEList.map(name => (
              <li className="py-4 px-3 text-4xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${name}`}>
                  <a>{name}</a>
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
