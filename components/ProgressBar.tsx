import IconCheck from '@/public/icons/check.svg';

interface ProgressBarProps {
  currStep: number;
}

interface ChipProps {
  stepNum: number;
  currStepNum?: number;
}

function ProgressBar({ currStep = 0 }: ProgressBarProps) {
  function Line({ stepNum }: { stepNum: number }) {
    return (
      <div className={`h-[2px] w-[80px]`} style={{ backgroundColor: stepNum < currStep ? '#4F46E5' : '#9CA3AF' }}></div>
    );
  }

  return (
    <div className="relative flex h-fit w-fit items-center">
      {new Array(5).fill(0).map((_, index) => (
        <>
          <ProgressChip stepNum={index + 1} currStepNum={currStep} />
          {index + 1 < 5 && <Line stepNum={index + 1} />}
        </>
      ))}
    </div>
  );
}

function ProgressChip({ stepNum = 0, currStepNum = 0 }: ChipProps) {
  return stepNum < currStepNum ? (
    // 체크 표시 ProgressChip 리턴 (지난 단계 칩)
    <div className="flex size-[32px] items-center justify-center rounded-full bg-[#4F46E5] font-bold text-white ">
      <IconCheck width={20} height={20} alt="check" />
    </div>
  ) : (
    // 블루 or 회색 ProgressChip 리턴 (진행 중 혹은 진행 예정 단계 칩)
    <div
      className={`flex size-[32px] items-center justify-center rounded-full border-[2px]`}
      style={{ borderColor: stepNum === currStepNum ? '#4F46E5' : '#9CA3AF' }}
    >
      <div
        className={`size-[10px] rounded-full`}
        style={{ backgroundColor: stepNum === currStepNum ? '#4F46E5' : '#D1D5DB' }}
      ></div>
    </div>
  );
}

export default ProgressBar;
