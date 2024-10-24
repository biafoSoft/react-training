/* eslint-disable react/prop-types */

function Header({score}) {
    
    return (
        <div className="flex justify-between items-center p-9">
            <div>
                <h1 className="text-3xl font-bold mb-6">
                Amiphibia Memory Game
                </h1>
                <p>Get points by clicking on an image but donot click on any more than once!</p>
            </div>
            <div className="text-2xl font-bold ">
                <h1>Score:{score}</h1>
                
            </div>
            
        </div>
    )
}

export default Header