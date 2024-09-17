import { MdAccountBalance } from "react-icons/md";
import Title from "../UI/Title";
import BarChart from "./BarChart";

const Balance = () => {
  return (
    <div className="bg-white p-5 mt-2 rounded-2xl flex-1 dark:bg-gray-600 dark:text-gray-300 ">
      <div className="flex items-center justify-between">
        <Title>Balance</Title>
        <MdAccountBalance className="p-2 rounded-full bg-gray-500 w-8 h-8 text-slate-300 shadow-lg" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          $300.000<span className="font-medium text-2xl">(USD)</span>
        </h1>
        <span>on September 2024</span>
      </div>
      <BarChart />
    </div>
  );
};

export default Balance;
