import memesData from "../memesData"

export default function Meme() {
    function getMeme() {
        const randomNum = Math.floor(Math.random() * 100)
        console.log(memesData.data.memes[randomNum].url)
    }

    return (
        <main>
            <form>
                <input 
                    type="text" 
                    name="input-top" 
                    id="input-top" 
                    placeholder="Top text" 
                />
                <input 
                    type="text" 
                    name="input-bot" 
                    id="input-bot" 
                    placeholder="Bottom text" 
                />
                <button type="button" onClick={getMeme}>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}