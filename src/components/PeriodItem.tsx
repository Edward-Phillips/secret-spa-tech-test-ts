import { observer } from "mobx-react-lite";
import { useStore } from "../App";

interface Props {
  period: string;
}

const PeriodItem = ({ period }: Props) => {
  const rootStore = useStore();
  const handlePeriodClick = () => {
    rootStore.setSelectedPeriod(period);
  };
  return (
    <button
      onClick={handlePeriodClick}
      className={
        (rootStore.selectedPeriod === period ? "selected " : "") + "periodItem"
      }
    >
      {period}
    </button>
  );
};

export default observer(PeriodItem);
