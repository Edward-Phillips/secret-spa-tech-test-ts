import { observer } from "mobx-react-lite";
import moment from "moment";
import { useCallback, useEffect, useMemo } from "react";
import { useStore } from "../App";

const Footer = () => {
  const rootStore = useStore();

  const handleBookNow = () => {
    rootStore.requestBooking();
  };

  useEffect(() => {
    rootStore.fetchPros();
  }, [rootStore.selectedDay])

  const dateAndTime = useMemo(() => {
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
          <b>{dateAndTime}</b>
        </p>
        <p>{rootStore.availableProsLoading ? "..." : rootStore.availablePros} professionals available</p>
      </div>
      <button disabled={!rootStore.selectedTime || rootStore.availablePros == 0} className="bookButton" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default observer(Footer);
