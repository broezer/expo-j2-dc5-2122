/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment } from 'react';
import 'tailwindcss/dist/tailwind.css';

import Container from '@/components/Container';
import Main from '@/components/Main';
import Miro from '@/components/Miro';
import Visual from '@/components/Visual';

import {
  getAllPostIds,
  getPostData,
  getSortedPostsData
} from '../../../lib/posts';
import styles from '../../styles/Post.module.css';

interface Post {
  title: string;
  id: string;
}

interface IProps {
  allPostsData: Post[];
  postData: {
    title: string;
    date: string;
    client: string;
    ontwerpvraag: string;
    members: any;
    contentHtml: string;
    casestudy: string;
    miro: string;
    teams: string;
    visual: string;
  };
}

function shuffleArray(array) {
  let i = array.length - 1;
  // eslint-disable-next-line no-plusplus
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = array[j];
    // eslint-disable-next-line no-param-reassign
    array[j] = temp;
  }
  return array;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  const allPostsData = shuffleArray(getSortedPostsData());
  return {
    props: {
      postData,
      allPostsData
    }
  };
};

const Project: NextPage<IProps> = ({ postData, allPostsData }) => {
  return (
    <>
      <Container>
        <Head>
          <title>{postData.title} | EXPO CMD Jaar 2 2020-21</title>
        </Head>
        <Main>
          <Link href="/">
            <a>
              <svg
                className="m-4 fill-current text-white hover:text-purple-600 transition duration-300 ease-in-out"
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
          <article className="container max-w-full bg-white bg-opacity-95 text-black-85 p-4 m-4 rounded-xl">
            <header className="text-center">
              <h1 className="text-5xl font-black uppercase text-green-400 mt-10 mb-0">
                {postData.title}
              </h1>
              <h2 className="text-xs mb-10 text-gray-800">
                <span className="lowercase font-light">Client: </span>
                <span className="font-bold">{postData.client}</span>
              </h2>
            </header>

            <section className="flex flex-wrap justify-center">
              {postData.members.map(({ name }) => (
                <>
                  <div className="w-1/6 flex flex-col flex-wrap text-center ">
                    <h3 className="text-center font-semibold my-2 w-full  text-gray-800">
                      {name}
                    </h3>
                  </div>
                </>
              ))}
            </section>

            <section className="flex flex-wrap justify-center my-10">
              <h3 className="uppercase text-xs text-purple-600 font-bold w-full text-center ">
                Ontwerpvraag
              </h3>
              <h2 className="font-light italic text-xl text-gray-800 text-center w-4/5">
                &quot;{postData.ontwerpvraag}&quot;
              </h2>
            </section>

            <section className="flex w-3/5 justify-center m-auto my-10">
              <figure className="shadow-lg">
                <Visual src={postData.visual} />
              </figure>
            </section>

            <section
              className={styles.postContent}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />

            {/*
            <section className="flex flex-wrap justify-center my-10 w-4/5 m-auto">
              <h2 className="uppercase text-xs text-purple-600 font-bold w-full mb-4 text-center">
                Connect with us
              </h2>
              <a
                className="w-1/3 cursor-pointer bg-white text-center mx-5 p-4 text-green-400 rounded-md border-solid border-2 border-green-400 hover:text-white hover:bg-green-400 transition ease-in-out duration-300"
                href={postData.casestudy}>
                Bezoek onze case-study
              </a>
              <a
                className="w-1/3 cursor-pointer bg-white text-center mx-5 p-4 text-purple-600 rounded-md border-solid border-2 border-purple-600 hover:text-white hover:bg-purple-600 transition ease-in-out duration-300"
                href={postData.teams}>
                Meet op MS Teams
              </a>
            </section>
            */}

            <h4 className="text-xl text-center w-full font-black uppercase text-green-400 my-6">
              Bekijk het project op ons Miro board
            </h4>
            <Miro src={postData.miro} />
          </article>

          <h2 className="text-green-600 uppercase text-sm font-black mt-10">
            Teams
          </h2>
          <ul className="container no-underline flex flex-wrap  justify-start text-white mb-6">
            {allPostsData.map(({ id, title }) => (
              <li
                key={id}
                className="py-2 px-3 text-3xl font-medium  hover:text-green-600 transition duration-300 ease-in-out">
                <Link href={`/team/${id}`}>
                  <a>{title}</a>
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
