
import { Oval } from 'react-loader-spinner';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageList() {
  const [imageList, setImageList] = useState([]); // State to hold image data
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const [offset, setOffset] = useState(0); // Offset for pagination
  const limit = 20; // Number of images per page
  const maxImages = 132; // Total number of images available

  const downloadImage = async () => {
    setIsLoading(true); // Start loading
    try {
      // Construct URL with offset and limit
      const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
      const response = await axios.get(url);
      const imageResults = response.data.photos;

      console.log('API URL:', url);
      console.log('Image Results:', imageResults);

      // Extract image URLs from imageResults
      const imageUrls = imageResults.map((img) => img.url);

      setImageList(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error); // Error handling
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    downloadImage(); // Fetch images when offset changes
  }, [offset]);

  const handleNext = () => {
    if (offset + limit < maxImages) {
      setOffset(offset + limit);
    }
  };

  const handlePrev = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <div className='items-center justify-center mx-[2rem] my-auto flex flex-col'>
      <div className='border-solid border-1 hover:drop-shadow-2xl flex flex-row flex-wrap justify-evenly'>
        {isLoading ? (
          <Oval
            height={40}
            width={40}
            color='#3498db'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#f3f3f3'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          <div className='grid grid-cols-4 gap-4 px-5'>
            {imageList.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index}`} className='h-auto w-[300px] rounded-xl' />
            ))}
          </div>
        )}
      </div>
      <div className='inline-flex mt-10 mb-10 hover:drop-shadow-2xl'>
        <button
          className='bg-gray-200 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-l'
          disabled={offset === 0} // Disable button if at start
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className='bg-gray-200 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-r'
          disabled={offset + limit >= maxImages} // Disable button if at end
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageList;
