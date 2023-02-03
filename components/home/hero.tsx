import Link from "next/link";
import React from "react";
import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 돌이입니다.
          <br className="hidden lg:inline-block" />
          방가어용
        </h1>
        <p className="mb-8 leading-relaxed">
          원질이 봄바람을 남는 보이는 같이, 바이며, 관현악이며, 굳세게 거선의
          황금시대다. 그림자는 천자만홍이 안고, 설레는 무엇이 너의 것이다. 주는
          싸인 설레는 교향악이다. 뛰노는 그들은 날카로우나 현저하게 인간이
          사막이다. 열매를 피가 꽃이 피다. 얼음이 역사를 그들의 보내는 사랑의
          얼마나 소금이라 이상이 풀이 봄바람이다. 아니한 피고 불어 같은 우리
          튼튼하며, 위하여서. 주는 붙잡아 수 할지니, 인생을 열락의 유소년에게서
          풍부하게 약동하다. 가지에 부패를 인생을 안고, 무엇을 봄바람이다.
          우리의 싸인 설레는 물방아 뜨거운지라, 긴지라 꽃 우리 있으랴?
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />

        {/* <iframe
          src="https://jjalbot.com/embed/HkOu_aVGgV"
          width="420px"
          height="235px"
        /> */}
      </div>
    </>
  );
};

export default Hero;
