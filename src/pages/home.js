import React,{useState} from 'react';
import "../App.css";
import {Link} from "react-router-dom";
import Cards from './Cards';
function App() {
    const [data,setData]=useState(null)
    function getData(Event){
        setData(Event.target.value)
        console.warn(Event.target.value)
    }
    <Cards inputnumber={data} />
    
 return (
        <div className="App">
            <h1>FIND THE NUMBER</h1>
            <div className='userinputs'>
                <input
                    id="username"
                    type="Name"
                    label="Player Name"
                    placeholder="Enter your Name"
                    margin="normal"
                />
                <input
                    id="number"
                    name="num1"
                    type="Number"
                    label="Guess the number"
                    placeholder="Enter number between 1-9"
                    margin="normal"
                    onChange={getData}
                />
                
            </div>
           
            <Link to="/Cards">
            <button>
                START
            </button>
         </Link>

        </div>
    );
}

export default App;
