import React from 'react';

const SearchCard = () => {
    return (
        <form className='mx-auto  w-1/4 my-4  md:flex'>
            <input type="text" placeholder="Type college name" className="input  input-bordered   max-w-xs" />
        <button className="btn  bg-green-500 ms-12 md:ms-0 ">Search</button>
        </form>
    );
};

export default SearchCard;