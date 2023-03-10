import { useStore } from "../App";

const Footer = () => {
  const rootStore = useStore();

  const handleBookNow = () => {
    rootStore.requestBooking();
  };
  return (
    <div className="footer">
      <div>
        <p>
          <b>Selected Date & Time</b>
        </p>
        <p>0 professionals available</p>
      </div>
      <button className="bookButton" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default Footer;
