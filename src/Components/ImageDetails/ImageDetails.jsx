import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function ImageDetails() {
  const {id} = useParams()
  const [image,setImage] = useState({});
  console.log(id);
  async function downloadImage(){
       const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
       console.log("id",response.data);
       setImage({
        title:response.data.title,
        description:response.data.description,
        image:response.data.url
       })
  }
  useEffect(()=>{
    downloadImage()
  },[])
  return (
    <div>
      <h1 className='text-white'>details</h1>
    </div>
  )
}

export default ImageDetails
