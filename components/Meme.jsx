import { useState, useEffect } from "react"
// import memesData from "../memesData"

export default function Meme() {
    const [allMemes, setAllMemes] = useState({})
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg", 
        memeName: "One Does Not Simply"
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
    }, [])

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * allMemes.data.memes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            memeName: allMemes.data.memes[randomNum].name,
            randomImage: allMemes.data.memes[randomNum].url
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
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="bottomText" 
                    id="input-bot" 
                    placeholder="Bottom text" 
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <div className="meme-name">{meme.memeName}</div>
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