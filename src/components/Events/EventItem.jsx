const EventItem = ({ event }) => {
  const { date, title, description } = event;

  return (
    <div className="flex gap-5 items-center">
      <span className="bg-gray-300 text-gray-700 p-2 w-16 h-16 rounded-md flex items-center justify-center font-bold text-center">
        {date}
      </span>
      <div className="cursor-pointer">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="text-gray-400 text-sm">
          <p className="block md:hidden">{description.slice(0, 35)}...</p>
          <p className="hidden md:block">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
