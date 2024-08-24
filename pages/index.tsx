import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { instance } from '@/api/config/default';
import toast from 'react-hot-toast';
import { IconGoogle, IconUnderline } from '@/public/icons';

const GOOGLE_SOCIAL_LOGIN_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?client_id=1078004894075-updf5oupt5gro270og25b6bocbgfg0ep.apps.googleusercontent.com&redirect_uri=http://localhost:3000/&response_type=code&scope=email profile';

function Landing() {
  const router = useRouter();

  const { code } = router.query; // id params : 수정할 건물 id
  const [, setCookie] = useCookies(['access_token']);

  const reqSocialLogin = async () => {
    const res = await instance.post('/code', {
      code,
    });

    if (res.status === 200) {
      const expiration = new Date(Date.now() + 3600 * 1000); // 1시간
      setCookie('access_token', res.data.data.jwt_token, {
        secure: false,
        sameSite: 'lax',
        path: '/',
        expires: expiration,
      });
    }
    toast.success('로그인에 성공하였습니다!');
    router.push('/home');
  };

  useEffect(() => {
    console.log(code);
    if (code) reqSocialLogin();
  }, [code]);

  return (
    <main className="flex flex-col items-center overflow-hidden h-[100vh]">
      {/* Header */}
      <section className="w-full flex items-center justify-between px-[80px] h-[96px] whitespace-nowrap">
        <div className="text-[23px] font-semibold">이야기 놀이터 AI</div>
        <div className="flex gap-[18px]">
          <Link className="h-[48px] flex items-center" href={GOOGLE_SOCIAL_LOGIN_URL}>
            Log In
          </Link>
          <Link
            className="border-[2px] border-[#0F172A] rounded-[8px] px-[29px] py-[10px]"
            href={GOOGLE_SOCIAL_LOGIN_URL}
          >
            Sign Up Now
          </Link>
        </div>
      </section>
      {/* 중간 메인 텍스트 부분 */}
      <section className="text-center relative whitespace-nowrap mt-[120px] flex flex-col gap-[50px]">
        <div className="font-semibold text-[70px] ">
          생성형 AI 어시스턴트 &apos;야기&apos;와 함께
          <p />
          만드는 나만의 이야기
          <IconUnderline width={121} height={15} className="absolute top-[90px] right-[215px]"></IconUnderline>
        </div>
        <h5 className="text-[28px] font-400">
          &apos;야기&apos; 의 도움을 받아 자유롭게 상상력을 펼치고,
          <p />
          동화의 주인공이 되어보세요!
        </h5>
      </section>
      <Link
        className="w-[530px] h-[60px] flex border rounded-[10px] flex items-center justify-center gap-[15px] text-[24px] font-medium text-[#00000096] shadow mt-[80px]"
        href={GOOGLE_SOCIAL_LOGIN_URL}
      >
        <IconGoogle alt="google" />
        Google 로그인
      </Link>
      {/* 야기 로고 이미지 */}
      <Image src={Logo} className="fixed -bottom-1 w-[420px] h-[450px] left-0 overflow-hidden" alt="logo" />
    </main>
  );
}

export default Landing;
