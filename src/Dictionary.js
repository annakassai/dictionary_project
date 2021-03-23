import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyWord); 
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    
    function handlePexelsResponse (response) {
        setPhotos(response.data.photos);
    }

    function search(){
        //documentaion: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; 
        axios.get(apiUrl).then(handleDictionaryResponse);
    
        const pexelsApiKey = "563492ad6f917000010000014ce1eea200274a10b3cb33d7e11fee69";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers: headers,}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search()
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word are you looking for?</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="search" onChange={handleKeywordChange}
                        defaultValue={props.defaultKeyWord}
                        />
                    </form>
                    <div className="hint">
                        Suggested words: welcome, traveling, sunset, joy
                    </div>
                </section>
                <Results results={results}/>
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading..."
    }
}
