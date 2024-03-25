import React,{useState} from "react";

const SearchBar = (props) => {
    const [searchTerm,setSearchTerm]=useState("")

    const onHandleSubmit=(event)=>{
        event.preventDefault()
        props.onSubmit(searchTerm)
        console.log("searchTerm",searchTerm)
    }
  return (

    
    <form onSubmit={(event)=>onHandleSubmit(event)}>
      <input
        className=" mt-10 rounded-md p-2 w-full "
        type="text"
        placeholder="Search the Workout....."
        value={searchTerm}
        onChange={(event)=>setSearchTerm(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;
