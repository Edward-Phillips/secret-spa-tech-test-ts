import { action, computed, makeObservable, observable, runInAction } from "mobx";
import moment from "moment";
import mockApi from "./mockApi";


class RootStore {
  days: string[] = [];
  times: number[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];
  selectedDay: string;
  selectedTime: number | undefined;
  selectedPeriod: string;
  availablePros: number;
  availableProsLoading: boolean;

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectedTime: observable,
      selectedPeriod: observable,
      availableProsLoading: observable,
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
    this.availablePros = -1;
    this.availableProsLoading = false;
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

  get dateAndTime() {
    if (this.selectedTime && this.selectedDay) {
      return `${moment(this.selectedDay).hours(Math.floor(this.selectedTime)).minutes((this.selectedTime % 1) * 60).format("H:mm on MMM Do YYYY")}`
    }
    return "No date and time selected";
  }

  fetchPros = () => {
    this.availableProsLoading = true;
    mockApi.getNumberOfPros(Number(moment(this.selectedDay).format("DD"))).then((availablePros:number) => {
      runInAction(() => {
        this.availablePros = availablePros;
        this.availableProsLoading = false;
      })
    })
  }

  setSelectedDay = async (day: string) => {
    this.selectedDay = day;
    this.selectedTime = undefined;
    this.availablePros = await mockApi.getNumberOfPros(Number(moment(day).format("DD")));
  };

  setSelectedTime = (time: number) => {
    this.selectedTime = time;
  };

  setSelectedPeriod = (period: string) => {
    this.selectedPeriod = period;
  };

  requestBooking = () => {
    alert(`Your booking has been made for ${this.dateAndTime}. We have sent your request to ${this.availablePros} professional${this.availablePros > 1 ? "s" : ""}.`);
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