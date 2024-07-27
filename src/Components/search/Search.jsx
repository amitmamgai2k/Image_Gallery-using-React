import react from 'react';
// import useDebounce from "../../hooks/useDebounce";


function Search({ updateSearchTerm }) {
    // const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value));
    return (
        <div className="flex flex-col items-center m-auto mt-10 w-full p-4">
      <input
        className=" px-4 py-2  w-full sm:w-3/4 md:w-2/3  rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:text-gray-700"
        type="text"
        placeholder="Search Photo"
        // onChange={debouncedCallback}
        
      />
    </div>
    );
}

export default Search;
