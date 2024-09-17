const Content = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col gap-7 w-full lg:w-[95%] mx-auto">
      {children}
    </div>
  );
};

export default Content;
