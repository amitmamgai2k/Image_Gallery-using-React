import ImageList from "../ImageList/ImageList";
import Search from "../search/Search"
import { Link } from "react-router-dom";

function ImageGallery({url,id,title}){
   return(
      <>

<Search/>

  
    <Link to={`/image/${id}`}>
                <div className='uppercase font-medium tracking-widest  text-black font-mono text-2xl  '>{title}</div>
                <div>
                    <img className='pokemon-image h-[150px] font-bold h-max-[80%] ' src={url} />
                </div>
            </Link>

    <ImageList/>
    </>
   )
}
export default ImageGallery;