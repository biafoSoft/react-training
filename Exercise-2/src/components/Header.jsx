
function Header() {
    return (
        <div className="flex justify-between items-center p-9">
            <div>
                <h1 className="text-3xl font-bold mb-6">
                Amiphibia Memory Game
                </h1>
                <p>Get points by clicking on an image but donot click on any more than once!</p>
            </div>
            <div className="">
                <h2>Score:0</h2>
                <h2>Best Score:0</h2>
            </div>
            
        </div>
    )
}

export default Header