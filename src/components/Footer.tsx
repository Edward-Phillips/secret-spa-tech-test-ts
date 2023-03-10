import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../App";

const Footer = () => {
  const rootStore = useStore();

  const handleBookNow = () => {
    rootStore.requestBooking();
  };

  useEffect(() => {
    rootStore.fetchPros();
  }, [rootStore.selectedDay]);

  return (
    <div className="footer">
      <div>
        <p>
          <b>{rootStore.dateAndTime}</b>
        </p>
        <p>
          {rootStore.availableProsLoading ? "..." : rootStore.availablePros}{" "}
          professionals available
        </p>
      </div>
      <button
        disabled={!rootStore.selectedTime || rootStore.availablePros == 0}
        className="bookButton"
        onClick={handleBookNow}
      >
        Book Now
      </button>
    </div>
  );
};

export default observer(Footer);
