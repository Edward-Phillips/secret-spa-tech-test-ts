import moment from "moment";

interface Props {
  time: number;
}

const getMinutes = (time: number) => {
  return ( time % 1 > 0 ? ((time % 1) * 60) : "00");
}

const TimeItem = ({ time }: Props) => {
  return <button className="timeItem">{Math.floor(time) + ":" + getMinutes(time)}</button>;
};

export default TimeItem;
