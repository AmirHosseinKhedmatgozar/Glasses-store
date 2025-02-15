import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";
import { useSearchGlasses } from "./useSearchGlasses";

function SearchBox() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [openSearchBox, setopenSearchBox] = useState(false);
  const { searchGlasss } = useSearchGlasses(searchCharacter);

  useEffect(
    function () {
      const searchBox = document.getElementById("searchBox");
      const inputeSearch = document.getElementById("inputeSearch");

      function handleEventClick(e) {
        const clicked = e.target;
        if (searchBox !== clicked) {
          setopenSearchBox(false);
        }
        if (clicked === inputeSearch) {
          setopenSearchBox(true);
        }
        if (clicked !== inputeSearch) {
          setSearchCharacter("");
        }
      }

      function handleEventFocus() {
        if (!openSearchBox) setopenSearchBox(true);
      }

      document.addEventListener("click", handleEventClick);
      inputeSearch.addEventListener("focus", handleEventFocus);

      return () => {
        document.removeEventListener("click", handleEventClick);
        inputeSearch.removeEventListener("focus", handleEventFocus);
      };
    },
    [openSearchBox],
  );

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setSearchCharacter(value);
    setopenSearchBox(true);
  }

  return (
    <div className="relative col-span-3 row-start-2 grid font-semibold md:col-span-1 md:row-start-1 md:w-96">
      <input
        value={searchCharacter}
        id="inputeSearch"
        onChange={handleChange}
        type="text"
        placeholder="Search Glasses"
        className="w-full rounded-xl bg-gray-300 pb-1 pl-5 pt-1 focus:pb-[0.4rem] focus:pt-[0.4rem] focus:outline-none"
      />
      {openSearchBox && searchGlasss && (
        <div
          id="searchBox"
          className="absolute z-10 max-h-80 w-full overflow-scroll rounded-lg"
        >
          <ul className="flex flex-col border-gray-200">
            {searchGlasss.map((searchItems) => {
              return (
                <SearchItem
                  searchItem={searchItems}
                  key={searchItems.id}
                  firstItemId={searchGlasss[0].id}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
