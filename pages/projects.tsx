import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import { DATABASE_TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

const projects = ({ projects }: { projects: any }) => {
  return (
    <Layout>
      <Head>
        <title>돌이 포트폴리오</title>
        <meta name="description" content="포트폴리오 돌이" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold sm:text-4xl">
          총 프로젝트 {projects.results.length}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full m-6 p-12">
          {projects.results.map((aProject: any) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default projects;

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${DATABASE_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
