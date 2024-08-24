import Logo from '@/public/images/small-logo.png';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import {
  IconBox,
  IconChat,
  IconFriend,
  IconHelp,
  IconLeftArrow,
  IconLogout,
  IconMultibox,
  IconSetting,
} from '@/public/icons';
import { useRouter } from 'next/router';
import { instance } from '@/api/config/default';

const SideNavigationBar = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'JHOON KIM',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfoRes = await instance.get('/api/user/info');
      console.log(userInfoRes.data.data);

      if (userInfoRes.status === 200) {
        // setUserInfo(userInfoRes.data.data);
      }
    };

    getUserInfo();
  }, []);

  return (
    <div className="fixed left-0 top-0 shadow h-full w-[280px] bg-white z-10">
      <div className="flex flex-col h-full">
        {/* 로고 헤더 부분 */}
        <div className="flex gap-[5px] mt-[15px] ml-[14px] mb-[40px]">
          <Image src={Logo} width={28} height={28} alt="logo"></Image>
          <h2 className="font-semibold text-[18px]">이야기 놀이터</h2>
        </div>
        <NavStackContent />
      </div>
    </div>
  );
};

interface NavContentProps {
  name: string;
  href?: string;
  children: ReactNode;
  color?: string;
  selected?: boolean;
  onClick?: () => void;
}

const NavStackContent = () => {
  const [currPage, setCurrPage] = useState('홈');

  const router = useRouter();
  return (
    <div className="h-full flex flex-col">
      <div>
        {/* User Profile Section */}
        <section className="flex p-[20px] items-center justify-between">
          <div className="flex gap-[8px]">
            <div className="w-[28px] h-[28px] bg-[#C4C4C4] rounded-full" />
            <h4 className="whitespace-nowrap">JHOON KIM</h4>
          </div>
          <IconLeftArrow width={24} height={24} alt="left arrow"></IconLeftArrow>
        </section>
        {/* Bottom Division Line */}
        <div className="h-[1.7px] bg-[#E9E9E9]" />
      </div>
      <section className="flex flex-col h-full justify-between">
        <div>
          <NavCell
            name="홈"
            onClick={() => {
              setCurrPage('홈');
              router.push('/home');
            }}
            selected={currPage === '홈'}
          >
            <IconBox stroke={currPage === '홈' ? '#7F57F1' : '#000000'} />
          </NavCell>
          <NavCell name="만들던 이야기">
            <IconBox stroke={'#000000'} />
          </NavCell>
          <NavCell name="완성한 이야기">
            <IconBox stroke={'#000000'} />
          </NavCell>
          <NavCell
            name="이야기 만들기"
            onClick={() => {
              setCurrPage('이야기 만들기');
              router.push('/storychat');
            }}
            selected={currPage === '이야기 만들기'}
          >
            <IconMultibox stroke={currPage === '이야기 만들기' ? '#7F57F1' : '#000000'} />
          </NavCell>
          <NavCell name="친구">
            <IconFriend stroke={'#000000'} />
          </NavCell>
          <NavCell name="다른 사람이 만든 이야기">
            <IconChat stroke={'#000000'} />
          </NavCell>
          <NavCell name="설정">
            <IconSetting stroke={'#000000'} />
          </NavCell>
        </div>
        <div>
          <NavCell name="Help">
            <IconHelp stroke={'#000000'} />
          </NavCell>
          <NavCell name="Logout" color="#EB5757">
            <IconLogout color="#EB5757" />
          </NavCell>
        </div>
      </section>
    </div>
  );
};

const NavCell = ({
  name,
  href = '/',
  children,
  color = '#2A2D37',
  selected = false,
  onClick = () => {},
}: NavContentProps) => {
  return (
    <div className="my-[27px] ml-[22px] flex gap-[8px] cursor-pointer" onClick={onClick}>
      {/* <Image src={icon} width={24} height={24} alt="icon" /> */}
      {children}
      <h5
        className={`text-[18px] ${selected ? 'font-semibold' : 'font-normal'}`}
        style={{ color: selected ? '#7F57F1' : color }}
      >
        {name}
      </h5>
    </div>
  );
};

// 홈, 만들던 이야기, 완성한 이야기, 이야기 만들기, 친구, 다른 사람이 만든 이야기, 설정 , HELP, Logout
export default SideNavigationBar;
