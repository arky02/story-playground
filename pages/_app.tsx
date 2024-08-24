import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />{' '}
      <Toaster
        containerStyle={{ fontSize: '16px', fontWeight: '600' }}
        toastOptions={{
          style: {
            padding: '10px 13px',
            color: '#242424',
            borderRadius: '999px',
          },
        }}
      />
    </>
  );
}
