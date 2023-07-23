import React from 'react';

const SearchCard = () => {
    const handleSubmit=(e)=>{
e.preventDefault()
const form =e.target
const collegeName=form.collegeName.value


    }
    return (
        <form onSubmit={handleSubmit}className='mx-auto  w-1/4 my-4  md:flex'>
            <input type="text"name="collegeName" placeholder="Type college name" className="input  input-bordered   max-w-xs" />
        <button type="submit"className="btn  bg-green-500 ms-12 md:ms-0 ">Search</button>
        </form>
    );
};

export default SearchCard;