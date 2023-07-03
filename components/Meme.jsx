import { useState } from "react"
import memesData from "../memesData"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [meme, setMeme] = useState({
        topText: "One does not simply", 
        bottomText: "Walk into Mordor", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * allMemeImages.data.memes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages.data.memes[randomNum].url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <main>
            <form>
                <input 
                    type="text" 
                    name="topText" 
                    id="input-top" 
                    placeholder="Top text" 
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    name="bottomText" 
                    id="input-bot" 
                    placeholder="Bottom text" 
                    value={meme.bottomText}
                />
                <button type="button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>

            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}