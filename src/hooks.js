import { useState } from 'react';
import axios from "axios";


// custom hook for flipping any type of card
function useFlip(initialFlipState=true) {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flipCard = () => {
        setIsFlipped(isFlipped => !isFlipped);
    };

    return [isFlipped, flipCard];
}

// custom hook for initializing array and adding to it via ajax request w axios. 
// accepts a URL and returns an array with two elements. 
function useAxios(baseURL) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (endOfURL) => {
        if ((typeof endOfURL) === 'string'){
            const response = await axios.get(`${baseURL}${endOfURL}`);
            setResponses(data => [...data, { ...response.data }]);
        } else {
            const response = await axios.get(`${baseURL}`);
            setResponses(data => [...data, { ...response.data }]);
        }        
    };
    return [responses, addResponseData]
}


export { useFlip, useAxios };
