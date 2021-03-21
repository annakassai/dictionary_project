import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    const [keyword, setKeyword] = useState(""); 
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        //documentaion: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; 
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input 
            type="search" onChange={handleKeywordChange}
            />
        </form>
        <Results results={results}/>
    </div>
    );
}