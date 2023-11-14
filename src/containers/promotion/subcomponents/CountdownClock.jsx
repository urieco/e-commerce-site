import { useEffect, useMemo, useState } from "react";

function CountdownClock() {
  const [timer, setTimer] = useState(86500);

  const timeValues = useMemo(() => {
    const day = Math.floor(timer / 86400);
    const hour = Math.floor((timer % 86400) / 3600);
    const minute = Math.floor((timer % 3600) / 60);
    const second = timer % 60;

    return { day, hour, minute, second };
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      if (timer <= 0) return;
      else setTimer((prev) => prev - 1);
    }, 1000);
    return () => {};
  }, [timer]);

  return (
    <>
      <div className="flex gap-2 justify-center sm:ml-6">
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">{timeValues.day}</span>{" "}
          DAYS
        </div>
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">{timeValues.hour}</span>{" "}
          HOURS
        </div>
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">
            {timeValues.minute}
          </span>{" "}
          MINUTES
        </div>
        <div className="text-gray-200 bg-primary_1 text-center text-sm w-20 h-20 font-light flex flex-col pt-3 rounded-full shadow-lg">
          <span className="text-xl font-semibold mb-1">
            {timeValues.second}
          </span>{" "}
          SECONDS
        </div>
      </div>
    </>
  );
}

export { CountdownClock };
