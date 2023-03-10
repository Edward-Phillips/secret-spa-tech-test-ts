import { action, computed, makeObservable, observable } from "mobx";


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
      timeMax: computed,
      timeMin: computed,
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
  get timeMax() {
    switch (this.selectedPeriod) {
      case "Anytime":
        return 10;
      case "Morning":
        return 12;
      case "Afternoon":
        return 17;
      case "Evening":
        return 22;
      default:
        return 22;
    }
  }

  get timeMin() {
    switch (this.selectedPeriod) {
      case "Anytime":
        return 6;
      case "Morning":
        return 6
      case "Afternoon":
        return 12;
      case "Evening":
        return 15;
      default:
        return 6;
    }
  }

  setSelectedDay = (day: string) => {
    this.selectedDay = day;
    this.selectedTime = undefined;
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