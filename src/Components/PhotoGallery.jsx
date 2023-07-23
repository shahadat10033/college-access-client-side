import React from 'react';
import Gallery from 'react-photo-gallery';


const PhotoGallery = () => {
    const photos = [
        {
          src: 'party1.jpg',
          width: 300,
          height: 400,
        },
        
        {
          src: 'party2.jpg',
          width: 200,
          height: 400,
        },
        
        {
          src: 'party3.jpg',
          width: 400,
          height: 400,
        },
        {
          src: 'party4.jpg',
          width: 500,
          height: 400,
        },
        
        {
          src: 'party5.jpg',
          width: 600,
          height: 400,
        },
        
        {
          src: 'party6.jpg',
          width: 400,
          height: 400,
        },
        {
          src: 'party7.jpg',
          width: 300,
          height: 400,
        },
        
        {
          src: 'party8.jpg',
          width: 400,
          height: 400,
        },
        
        {
          src: 'party9.jpg',
          width: 500,
          height: 400,
        },
        {
          src: 'party10.jpg',
          width: 400,
          height: 400,
        },
        
        {
          src: 'party11.jpg',
          width: 300,
          height: 400,
        },
        
        {
          src: 'party12.jpg',
          width: 500,
          height: 400,
        }
      ];

    return (
        <div>
          
            <h2 className='text-center text-xl text-green-500'>Gallery</h2>
            <Gallery photos={photos} />;
       <div>




       </div>
       
        </div>
    );
};

export default PhotoGallery;