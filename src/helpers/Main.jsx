const Main = ({ children }) => {
  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex flex-col-reverse lg:flex-row gap-2 transition-all duration-150 mt-14 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default Main;
