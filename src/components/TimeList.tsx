import { observer } from "mobx-react-lite";
import { useStore } from "../App";
import TimeItem from "./TimeItem";

const TimeList = () => {
  const rootStore = useStore();

  return (
    <div className="timeList">
      {rootStore.times
        .filter((time) => time >= rootStore.timeMin && time < rootStore.timeMax)
        .map((t) => (
          <TimeItem time={t} key={t} />
        ))}
    </div>
  );
};

export default observer(TimeList);
