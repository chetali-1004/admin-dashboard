"use client";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  //to solve hydration problem
  useEffect(() => {
    const storedQuery = localStorage.getItem("query") || "";
    setQuery(storedQuery);
    setIsMounted(true); // Mark as mounted after fetching localStorage
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user input: ", query);
  };

  // Render nothing until the component is mounted to prevent hydration error
  if (!isMounted) return null;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex border bg-[#deeafd] rounded-lg p-2 mx-2">
        <MagnifyingGlassIcon className="h-5 w-5 mx-3 my-auto text-gray-800" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="quick finding..."
          className="bg-[#deeafd] rounded-lg focus:outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBox;
