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

import { getSortedDIPostsData } from '../../lib/di-posts';
import { getSortedPostsData } from '../../lib/posts';

interface Post {
  firstname: string;
  id: string;
}

interface IProps {
  allPostsData: Post[];
  allDIPostsData: Post[];
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
  const allPostsData = getSortedPostsData();
  const allDIPostsData = shuffleArray(getSortedDIPostsData());
  return {
    props: {
      allPostsData,
      allDIPostsData
    }
  };
};

const Home: NextPage<IProps> = ({ allDIPostsData }) => {
  return (
    <>
      <Container>
        <Head>
          <title>EXPO CMD Jaar 1 2020-21</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <Main>
          <h2 className="text-green-600 uppercase text-sm font-black">
            Students
          </h2>
          <ul className="container no-underline flex flex-wrap  justify-start text-white">
            {allDIPostsData.map(({ id, firstname }) => (
              
                <li
                  key={id}
                  className="py-2 px-3 text-xl font-medium  hover:text-green-600 transition duration-300 ease-in-out">
                  {firstname}
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
