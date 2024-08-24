import AutoTypingContent from '@/components/AutoTypingContent';
import ProgressBar from '@/components/ProgressBar';
import Image from 'next/image';
import { useState } from 'react';
import SideNavigationBar from '@/components/NavigationBar';
import SendMsg from '@/public/icons/send.svg';
import { IconBookBackground, IconCheck, IconExImg } from '@/public/icons';

function StoryChat() {
  const [storyStep, setStoryStep] = useState(3);

  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center pl-[280px]">
      <SideNavigationBar />
      <IconCheck />
      <div className="w-[850px] flex flex-col">
        {/* 책 페이지 상단의 정보 텍스트 부분 */}
        <section className="w-full flex items-center justify-between">
          {/* 텍스트 왼쪽 부분 (책 정보 부분) */}
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[32px] font-semibold">수민이와 젊어지는 샘물</h1>
            <div className="flex flex-col gap-[7px]">
              <h5>최근 수정일 : 2024.8.12</h5>
              <h5>Written by 재훈</h5>
            </div>
          </div>
          {/* 오른쪽 progress bar 부분 */}
          <div>
            <ProgressBar currStep={storyStep}></ProgressBar>
          </div>
        </section>
        {/* 책 부분 */}
        <section className="relative w-full h-fit">
          <IconBookBackground className="" width={850} height={600} alt="book background" />
          <IconExImg
            alt="book img"
            width={194}
            height={271}
            className="absolute top-0 left-[160px] top-[150px]"
          ></IconExImg>
          {/* 책의 텍스트 부분 */}
          <div className="absolute top-0 w-[330px] right-[70px] top-24">
            <AutoTypingContent
              textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum."
            />
          </div>
        </section>
        {/* 채팅 Input 부분 */}
        <div className="w-full relative">
          <input
            className="w-full border-[1.5px] border-[#888080] rounded-[27px] px-[43px] py-[15px]"
            placeholder="다음 이야기를 입력해줘!"
          ></input>
          <Image src={SendMsg} width={25} height={25} alt="send" className="absolute top-[15px] right-[30px]"></Image>
        </div>
      </div>
    </main>
  );
}
export default StoryChat;
