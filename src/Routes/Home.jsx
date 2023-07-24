import React from 'react';
import SearchCard from '../Components/SearchCard';
import Banner from '../Components/Banner';
import PhotoGallery from '../Components/PhotoGallery';
import PopularCollege from '../Components/PopularCollege';
import Research from '../Components/Research';

const Home = () => {
    return (
        <div>
           <SearchCard></SearchCard> 
           <Banner></Banner>
           <PopularCollege></PopularCollege>
           <Research></Research>
           <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;