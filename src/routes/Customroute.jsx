import React from 'react'
import { Route, Routes} from 'react-router-dom'
import ImageDetails from '../Components/ImageDetails/ImageDetails'
import ImageGallery from "../Components/ImageGallery/ImageGallery"

function Customroute() {
  return (
    
   <Routes>
   <Route path="/" element={<ImageGallery/>} />
   <Route path="image/:id" element={<ImageDetails />} />
   </Routes>
    
  )
}

export default Customroute;
