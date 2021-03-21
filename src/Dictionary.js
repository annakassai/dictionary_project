import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyWord); 
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    function search(){
        //documentaion: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; 
        axios.get(apiUrl).then(handleResponse);
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
                        Suggested words: welcome, travelling, sunset, joy
                    </div>
                </section>
                <Results results={results}/>
            </div>
        );
    } else {
        load();
        return "Loading..."
    }
}
