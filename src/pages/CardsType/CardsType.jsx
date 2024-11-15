import { useState, useEffect } from "react";
import axios from "axios";
import "./CardsType.css";


const CardsType = () => {

  
    const [cards, setCards] = useState([]);
    const apiCards = "https://api.magicthegathering.io/v1/cards";
    const getCards = async() => {
      const response = await axios.get(apiCards);
      setCards(response.data.cards)
    }
    useEffect(()=> {
      getCards()
    },[]);
  

  return (
    <>
    <div className="cards-container">
    <h1>Cartas</h1>
      {
        cards.map((card)=>(
          <div key={Math.random()} className="card">
            <figure>
            <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&amp;type=card" alt="Ancestor's Chosen"/>
            </figure>
            <h2>{card.name}</h2>
            <p className="type-text">{card.type}</p>
            <p className="description-text">{card.setName}</p>
            <button className="btn">Show More</button>
          </div>
        ))
      }

    </div>
    </>
    

  )
}

export default CardsType