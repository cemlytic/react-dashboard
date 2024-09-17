import avatar from "../../assets/user.webp";

const ProfileCard = () => {
  return (
    <div className="flex items-center gap-3 bg-white shadow-md rounded-full p-4 dark:text-gray-300 dark:bg-gray-600">
      <img src={avatar} alt="avatar" className="w-14 h-14 rounded-full" />
      <div>
        <h1 className="font-bold text-2xl">John Doe</h1>
        <p>Developer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
