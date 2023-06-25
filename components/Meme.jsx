export default function Meme() {
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
                <button>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}