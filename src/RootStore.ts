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

    this.times = getTimes();
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


const startHour = 6;
const endHour = 22;
const increment = .25;
// function to get times in same format as this.times in RootStore
const getTimes = () => {
  const times = [];
  for (let i = startHour; i <= endHour; i += increment) {
    times.push(i);
  }
  return times;
}