import { observer } from "mobx-react-lite";
import moment from "moment";
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

  const isDisabled = () => {
    const now = moment();
    const apptTime = moment(rootStore.selectedDay).hours(Math.floor(time)).minutes((time % 1) * 60);
    const difference = apptTime.diff(now, 'minutes')
    return (difference < 120) ?? false;
  }

  return (
    <button onClick={handleTimeClick} className={(isDisabled() ? "disabled " : "") + (rootStore.selectedTime === time ? "selected " : "") + "timeItem"}>
      {Math.floor(time) + ":" + getMinutes(time)}
    </button>
  );
};

export default observer(TimeItem);
