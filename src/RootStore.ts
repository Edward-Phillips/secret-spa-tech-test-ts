import { makeObservable, observable } from "mobx";

class RootStore {
  days: string[] = [];
  times: number[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    });

    this.times = [6, 6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75, 8, 8.25, 8.5, 8.75];
    this.days = Array.from({ length: 28}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toDateString();
    })
  }

  requestBooking = () => {
    alert("Booking requested!");
  };
}

export default RootStore;
