import { useEffect, useState } from "react";

function CountdownClock() {
  const [timer, setTimer] = useState(10);

  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  if (timer >= 86400) {
    day = Math.floor(timer / 86400);
  }
  if ((timer - 86400*day) >= 3600) {
    hour = Math.floor((timer - 86400*day) / 3600);
  }
  if ((timer - 86400*day - 3600*hour) >= 60) {
    minute = Math.floor((timer - 86400*day - 3600*hour) / 60);
  }
  second = timer - 86400*day - 3600*hour - 60*minute;

  const countdown = () => {
    setTimer((prev) => prev-1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 0) return;
      else countdown();
    }, 1000)
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <div className="flex gap-2 justify-center ml-6">
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">{day}</span> DAYS
        </div>
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">{hour}</span> HOURS
        </div>
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">{minute}</span> MINUTES
        </div>
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">{second}</span> SECONDS
        </div>
      </div>
    </>
  );
}


export { CountdownClock };
