import { useState } from 'react'
import Card from './Card'
import { Link } from "react-router-dom";




function Cards(){
    const [items, setItems] = useState([
      
        { id: 1, text: '1', stat: "" },
        { id: 2, text: '2', stat: "" },
        { id: 3, text: '3', stat: "" },
        { id: 4, text: '4', stat: "" },
        { id: 5, text: '5', stat: "" },
        { id: 6, text: '6', stat: "" },
        { id: 7, text: '7', stat: "" },
        { id: 8, text: '8', stat: "" },
        { id: 9, text: '9', stat: "" },
        
    ].sort(() => Math.random() - 0.5))

    
    const Cards = (props) => {
        return (
            <div>
                <p>{props.inputnumber}</p>
            </div>
        )
    }

    function check(current){
        if (items[current].id === Cards.inputnumber ){
            items[current].stat = "correct"
           
           setItems([...items])
            
        }else{
            items[current].stat = "wrong"
          
            setItems([...items])
            }
    }

    function handleClick(id){
        if(useState === null){
            items[id].stat = "active"
            setItems([...items])
           
        }else{
            check(id)
        }
    }

    return (
        <div className="header"><h1>Attepempts:2</h1>
        <div className="container">
        
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
            </div>
             
            <Link to="/">
                <button>
                    Exit
                </button>
            </Link>
            <a href='/Cards'>
                <button>
                    Retry
                </button>
            </a>
            
        </div>
    )
}

export default Cards