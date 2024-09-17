import ProfileCard from "./ProfileCard";
import AreaChart from "./AreaChart";
import RecentActivities from "./RecentActivities";

const Profile = () => {
  return (
    <div className="px-2 py-4 mt-2 bg-gray-200 rounded-2xl w-full dark:bg-gray-700 lg:w-60 xl:w-96 flex flex-col justify-between gap-4">
      <ProfileCard />
      <RecentActivities />
      <AreaChart />
    </div>
  );
};

export default Profile;
