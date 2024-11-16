import { useEffect, useState } from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import Quote from './components/Quote';

function App() {
  const [quote, setQuote] = useState();
  
  const fetchQuote = ()=>{
    fetch('/Data/qoutes.json') // Use the correct path with a leading '/'
      .then((response) => response.json())
      .then((data) => {

        var index = Math.round(data.length * Math.random());

        if (index >= data.length){
          index = data.length - 1
        }

        setQuote(data[index]); // Set the parsed data to the state
        
      })
      .catch((error) => {
        console.error('Error fetching the quotes:', error); // Handle errors
      });
  }
  // useEffect(() => {
  //   fetch('/Data/qoutes.json') // Use the correct path with a leading '/'
  //     .then((response) => response.json())
  //     .then((data) => {

  //       var index = Math.round(data.length * Math.random());

  //       if (index >= data.length){
  //         index = data.length - 1
  //       }

  //       setQuote(data[index]); // Set the parsed data to the state
        
  //       // Logging data directly after setting state
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching the quotes:', error); // Handle errors
  //     });
  // }, []);

  return (
    <>
      <div className="card">
      <div className="card-header">
        <h2>Random Quote Generator</h2>
      </div> 
      { quote && <Quote quote={quote.quote} author={quote.author} tags={quote.tags}/>
      }
      <button onClick={fetchQuote}>Generate</button>
      </div>


      
    </>
  );
}

export default App;
