/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
/* eslint-disable import/order */
import {
  getAllDIPostIds,
  getDIPostData,
  getSortedDIPostsData
} from '../../../lib/di-posts';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import 'tailwindcss/dist/tailwind.css';

import Container from '@/components/Container';
import Main from '@/components/Main';

import styles from '../../styles/Post.module.css';

interface Post {
  firstname: string;
  id: string;
}

interface IProps {
  allDIPostsData: Post[];
  postData: {
    firstname: string;
    lastname: string;
    contentHtml: string;
  };
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDIPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getDIPostData(params.id as string);
  const allDIPostsData = shuffleArray(getSortedDIPostsData());
  return {
    props: {
      postData,
      allDIPostsData
    }
  };
};

const Project: NextPage<IProps> = ({ postData, allDIPostsData }) => {
  return (
    <>
      <Container>
        <Head>
          <title>
            {postData.firstname} {postData.lastname} | EXPO CMD Jaar 1 2020-21
          </title>
        </Head>
        <Main>
          <Link href="/">
            <a>
              <svg
                className="m-4 fill-current text-white hover:fill-current hover:text-purple-600 transition duration-300 ease-in-out"
                clipRule="evenodd"
                fillRule="evenodd"
                height="50"
                viewBox="0 0 24 24"
                width="50"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" />
              </svg>
            </a>
          </Link>
          <article className="container max-w-full bg-white bg-opacity-95 text-black-85 p-4 pb-20 m-4 rounded-xl">
            <header className="text-center mt-10">
              <h1 className="text-5xl font-black uppercase text-green-400 mt-5 mb-5">
                {postData.firstname} {postData.lastname}
              </h1>
            </header>

            <section
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

          <h2 className="text-green-600 uppercase text-sm font-black mt-10">
            Students
          </h2>
          <ul className="container no-underline flex flex-wrap  justify-start text-white">
            {allDIPostsData.map(({ id, firstname }) => (
              <li
                key={id}
                className="py-2 px-3 text-xl font-medium  hover:text-green-600 transition duration-300 ease-in-out">
                <Link href={`/student/${id}`}>
                  <a>{firstname}</a>
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

export default Project;
