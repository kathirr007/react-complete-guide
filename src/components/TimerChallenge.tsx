import { ResultModal } from './ResultModal';

export function TimerChallenge({ title, targetTime }: { title: string; targetTime: number }) {
  const timer = useRef<number>();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // set
    (dialog.current as any).open();
  }

  function handleTimerReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);

    // setTimerStarted(true);
  }

  function handleStop() {
    (dialog.current as any).open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleTimerReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime}
          {' '}
          second
          {targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button type="button" onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'}
            {' '}
            Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          { timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
