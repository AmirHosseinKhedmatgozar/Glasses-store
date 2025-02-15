/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function List({ sort }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sorted, setSorted] = useState("Sort By Price");

  function handleChange(e) {
    const newValue = e.target.value;
    setSearchParams({ sort: newValue });
    setSorted(newValue);
    console.log(searchParams);
  }

  if (sort)
    return (
      <select
        value={sorted}
        onChange={handleChange}
        className="border-1 w-36 rounded-md bg-[--color-body-secoundary] p-2 drop-shadow-lg"
      >
        <option disabled className="text-sm font-bold sm:text-lg">
          Sort By Price
        </option>
        {sort.map((fil) => {
          return (
            <option
              className="text-sm font-bold sm:text-lg"
              key={fil.message}
              value={fil.message
                .split(" ")
                .map((word) => word[0].toUpperCase())
                .join("")}
            >
              {fil.message}
            </option>
          );
        })}
      </select>
    );
}

export default List;
