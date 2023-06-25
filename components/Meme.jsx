export default function Meme() {
    return (
        <form>
            <div className="inputs">
                <input type="text" name="input-top" id="input-top" placeholder="Shut up" />
                <input type="text" name="input-bot" id="input-bot" placeholder="and take my money" />
            </div>
            <button>Get a new meme image</button>
        </form>
    )
}