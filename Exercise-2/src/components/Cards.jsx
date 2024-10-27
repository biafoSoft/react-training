
import { useState } from 'react';
import cardsData from '../data/cardsData.json'
import Header from './Header';

const shuffleArray= (array) =>{
    let shuffledArray = [...array];
    for(let i=shuffledArray.length-1; i>0; i--){
        const j = Math.floor(Math.random() * i);
        [shuffledArray[i], shuffledArray[j]]=[shuffledArray[j], shuffledArray[i]];

    }
    return shuffledArray;
}

function Cards() {
    const [score, setScore]=useState(0);
    const [clickedCards, setClickedCards]=useState([]);
    const [shuffledCards, setShuffledCards]=useState(shuffleArray(cardsData));


    const handleClicks=(title)=>{
        if(clickedCards.includes(title)){
            setScore(0);
            setClickedCards([]);
            setShuffledCards(cardsData);
        }
        else{
            const newScore = score + 1;
            setScore(newScore);
            setClickedCards([...clickedCards, title]);
            setShuffledCards(shuffleArray(shuffledCards));
            if(newScore===cardsData.length){
                alert("Congratulations!!! You have won the game");
            }
        }
        cardsData.toReversed();
    }   
    return (
            <div className="p-6">
            <Header score={score}/>
            <div className="flex flex-wrap justify-center ">
                {
                  shuffledCards.map((cards, index)=>{
                    return(
                      <div className="card  w-[18rem] shadow-xl m-1 cursor-pointer  transition-all duration-200 transform hover:scale-105 hover:shadow-2xl" key={index} onClick={()=>{handleClicks(cards.title)}}>
                        <figure className="px-4 pt-5">
                          <img
                            src={cards.image}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{cards.title}</h2>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    )
}

export default Cards;