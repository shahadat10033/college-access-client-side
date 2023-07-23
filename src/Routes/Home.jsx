import React from 'react';
import SearchCard from '../Components/SearchCard';
import Banner from '../Components/Banner';
import PhotoGallery from '../Components/PhotoGallery';

const Home = () => {
    return (
        <div>
           <SearchCard></SearchCard> 
           <Banner></Banner>
           <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;