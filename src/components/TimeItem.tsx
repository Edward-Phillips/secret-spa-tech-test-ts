import { observer } from "mobx-react-lite";
import { useStore } from "../App";
interface Props {
  time: number;
}

const getMinutes = (time: number) => {
  return time % 1 > 0 ? (time % 1) * 60 : "00";
};

const TimeItem = ({ time }: Props) => {
  const rootStore = useStore();
  const handleTimeClick = () => {
    rootStore.setSelectedTime(time);
  };
  return (
    <button onClick={handleTimeClick} className={(rootStore.selectedTime === time ? "selected " : "") + "timeItem"}>
      {Math.floor(time) + ":" + getMinutes(time)}
    </button>
  );
};

export default observer(TimeItem);
