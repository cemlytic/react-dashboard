import { recentActivities } from "../../constants";
import Title from "../UI/Title";

const RecentActivities = () => {
  return (
    <div className="bg-white dark:bg-gray-600 rounded-lg p-3 w-full">
      <Title>Recent Activities</Title>
      {recentActivities.map((activity) => (
        <div key={activity.id}>
          <div className="flex items-center justify-between my-3 pb-2 border-b border-slate-500/40 dark:border-slate-300/40 dark:text-gray-300 cursor-pointer">
            <div className="flex flex-1 items-center text-sm">
              {<activity.icon />}
              <div className="ml-2 tet-sm lg:text-base">
                <span className=" hidden sm:block">
                  {activity.description.slice(0, 22)}...
                </span>
                <span className=" block sm:hidden">
                  {activity.description.slice(0, 12)}...
                </span>
              </div>
            </div>
            <div className="text-xs opacity-60">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
