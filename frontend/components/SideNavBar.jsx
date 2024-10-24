const SideNavBar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <h1 className="text-xl font-bold">Hello World</h1>
      </div>
    </div>
  );
};

export default SideNavBar;
