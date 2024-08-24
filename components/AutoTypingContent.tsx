import { TypeAnimation } from 'react-type-animation';

function AutoTypingContent({ textContent }: { textContent: string }) {
  return (
    <TypeAnimation
      sequence={[textContent]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '16px', display: 'inline-block' }}
      repeat={0}
      cursor
    />
  );
}

export default AutoTypingContent;
