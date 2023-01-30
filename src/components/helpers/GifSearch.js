import axios from 'axios';
import {useEffect, useState} from'react';
import GifViewer from './GifViewer';

function GifSearch() {
    const apiKey ='DBgWoyaQKQmprgPSAJQ3C24kntcA2Wpe';
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const search = async(event) => {
        event.preventDefault();
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&rating=g&limit=10`);
        setGifs(res.data.data);
    }
    const save = (gif_url) => {

    }
    return (
        <div className="container">
            <div className="row">
                <h3>Search For Gifs</h3>
                <form onSubmit={search}>
                    <input value={input} onChange={(event) => setInput(event.target.value)}/>
                    <button>Search</button>
                </form>
            </div>
            <div className="row">
                <h3>Results for {input}</h3>
                <GifViewer
                gifs={gifs}
                buttonAction={save}
                buttonText={'Save Gif'}
                />
            </div>
        </div>
    )
}

export default GifSearch;