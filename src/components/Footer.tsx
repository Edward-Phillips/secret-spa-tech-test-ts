import { observer } from "mobx-react-lite";
import moment from "moment";
import { useCallback } from "react";
import { useStore } from "../App";

const Footer = () => {
  const rootStore = useStore();

  const handleBookNow = () => {
    rootStore.requestBooking();
  };

  const dateAndTime = useCallback(() => {
    if ( rootStore.selectedDay && rootStore.selectedTime) {
      return `${moment(rootStore.selectedDay).hours(Math.floor(rootStore.selectedTime)).minutes((rootStore.selectedTime % 1) * 60).format("H:mm on MMM Do YYYY")}`
    } else if (!rootStore.selectedTime) {
      return "Please select a time"
    }
  }, [rootStore.selectedDay, rootStore.selectedTime])
  return (
    <div className="footer">
      <div>
        <p>
          <b>{dateAndTime()}</b>
        </p>
        <p>0 professionals available</p>
      </div>
      <button className="bookButton" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default observer(Footer);
