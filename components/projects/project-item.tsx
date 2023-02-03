import Image from "next/legacy/image";

const ProjectItem = ({ data }: { data: any }) => {
  const title = data.properties.이름.title[0]?.plain_text;
  const github = data.properties.github.url;
  const youtube = data.properties.youtube.url;
  const dateStart = data.properties.날짜.date.start;
  const dateEnd = data.properties.날짜.date.end;
  const imgCover = data.cover.external.url;
  const tags = data.properties.태그.multi_select;

  return (
    <div className="project-card">
      <Image
        src={imgCover}
        alt=""
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        className="rounded-t-xl"
        quality={100}
      />
      <div className="p-4 flex flex-col ">
        <h1 className="text-2xl font-bold">{title}</h1>
        <a href={github}>github repositories</a>
        <a href={youtube}>youtube 시연영상</a>
        <div>
          {dateStart} ~ {dateEnd}
        </div>
        <div className="flex items-start mt-2 p-[2px]">
          {tags?.map((aTag: any) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag?.id}
            >
              {aTag?.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
