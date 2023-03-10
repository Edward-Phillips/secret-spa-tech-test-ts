import moment from "moment";
import { useStore } from "../App";

interface Props {
  day: string;
}

const DayItem = ({ day }: Props) => {
  const rootStore = useStore();
  const handleDayClick = () => {
    rootStore.setSelectedDay(day);
  };
  return (
    <button onClick={handleDayClick} className="dayItem">
      {moment(day).format("MMM Do YYYY")}
    </button>
  );
};

export default DayItem;
