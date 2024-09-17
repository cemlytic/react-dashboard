import { events } from "../../constants";
import Title from "../UI/Title";
import EventItem from "./EventItem";

const Event = () => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Events</Title>
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </div>
  );
};

export default Event;
