import moment from "moment";

interface Props {
  day: string;
}

const DayItem = ({ day }: Props) => {
  return <button className="dayItem">{moment(day).format("MMM Do YYYY")}</button>;
};

export default DayItem;
