import './App.css';
import Quote from './Quote';
import React, { useState, useEffect } from 'react';
function App() {
    const [quotes, setQuote] = useState([]);
    function fetchAdvice() {
        const url =
            'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const newData = data.quotes;
                const quoteNum = Math.floor(Math.random() * newData.length);
                const randomQuote = newData[quoteNum];
                setQuote([randomQuote]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchAdvice();
    }, []);

    function handClick() {
        fetchAdvice();
    }
    return (
        <div className=' flex justify-center h-screen bg-gray-500'>
            <Quote clickApi={handClick} data={quotes} />
        </div>
    );
}

export default App;
