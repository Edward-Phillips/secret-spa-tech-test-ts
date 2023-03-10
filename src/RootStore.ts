import { action, makeObservable, observable } from "mobx";


class RootStore {
  days: string[] = [];
  times: number[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];
  selectedDay: string;
  selectedTime: number | undefined;
  selectedPeriod: string;

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectedTime: observable,
      selectedPeriod: observable,
      setSelectedDay: action,
      setSelectedTime: action,
      setSelectedPeriod: action,
    });

    this.times = getTimes();
    this.days = Array.from({ length: 28}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toDateString();
    })
    this.selectedDay = this.days[0];
    this.selectedTime = undefined;
    this.selectedPeriod = this.periods[0];
  }

  setSelectedDay = (day: string) => {
    this.selectedDay = day;
  };

  setSelectedTime = (time: number) => {
    this.selectedTime = time;
  };

  setSelectedPeriod = (period: string) => {
    this.selectedPeriod = period;
  };

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