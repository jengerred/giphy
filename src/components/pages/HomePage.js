import CarouselStrap from '../helpers/CarouselStrap';
import CardStrap from '../../partials/CardStrap';
import {CardGroup} from 'reactstrap';
import ToDo from '../helpers/ToDo';
import axios from 'axios';
import {useEffect, useState} from'react';




function HomePage(){

    const apiKey ='DBgWoyaQKQmprgPSAJQ3C24kntcA2Wpe';
const [homeImages, setHomeImages] = useState([]);

useEffect(() => {
  getImages()
},[])

async function getImages() {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`)
 
  setHomeImages(res.data.data)
 
}
const aboutPage = {
  title:"About Page",
  description: "Learn About This Giphy App",
  buttonText: "Learn about us"

}
const searchPage = {
  title: "Search For Gifs",
  description: "Begin the search for your favorite gifs",
  buttonText: "Start Searching"
}
const savePage = {
  title: "View Your Saved Gifs",
  description: "Your favorite gifs"
 
}

    return(
    <div>
        <h1>Giphy App</h1>
        <div className='app'>
            <div className='container'>

                <div className='row'>
                    <CarouselStrap images={homeImages}/>
                </div>

                <div className='row'>
                    <CardGroup>
                        <CardStrap cardobject={aboutPage}/> 
                        <CardStrap cardobject={searchPage}/> 
                        <CardStrap cardobject={savePage}/>
                    </CardGroup>
                </div>
        
                 <div className='row'>
                    <ToDo/>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage;