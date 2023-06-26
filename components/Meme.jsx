import { useState } from "react"
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * memesData.data.memes.length)
        setMemeImage(memesData.data.memes[randomNum].url)
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
                <button type="button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>

            <img src={memeImage} className="meme-image" alt="meme-image" />
        </main>
    )
}