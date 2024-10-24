
import cardsData from '../data/cardsData.json'

function Cards() {
  
    return (
        <div className="p-6">
            <div className="flex flex-wrap justify-center ">
                {
                  cardsData.map((cards, index)=>{
                    return(
                      <div className="card  w-[18rem] shadow-xl m-1 cursor-pointer" key={index}>
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