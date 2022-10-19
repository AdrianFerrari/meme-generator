import { useState, useEffect } from "react"
import "../styles/Main.css"

export default function Main() {

    const [memeArray, setMemeArray] = useState([])
    const [meme, setMeme] = useState({ 
        topText: "", 
        bottomText: "", 
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })

    

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then((response) => response.json())
        .then((data) => setMemeArray(() => data.data.memes));
    }, [meme.randomImage])


    function handleMemeTextChange(event) {
        const {value, name} = event.target
        setMeme(prevState => {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }

    function newMemeImage() {
        let randomNumber = Math.floor(Math.random() * memeArray.length)
        setMeme(prevMeme => ({...prevMeme, randomImage: memeArray[randomNumber].url}))
    }

    return (
        <div className="main">
            <div className="meme-text">
                <input type="text" name="topText" value={meme.topText} onChange={handleMemeTextChange}/>
                <input type="text" name="bottomText" value={meme.bottomText} onChange={handleMemeTextChange}/>
            </div>
            <button className="new-image purple" onClick = {newMemeImage} >Get new meme image</button>
            <div className="meme-image">
                <img src={meme.randomImage} alt="meme"/>
                <p className="meme-img-text-top">{meme.topText}</p>
                <p className="meme-img-text-bottom">{meme.bottomText}</p>
            </div>
        </div>
    );
}