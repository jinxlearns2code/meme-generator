import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'



export default function Meme() {
	const [memeImage, setMemeImage] = useState({
		topText: "",
		bottomText: "",
		randomImage: "images/white-img.png"
	})

	const [allMemes, setAllMemes] = useState([])

	useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
	}, [])
	
    
    function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[randomNumber].url
		setMemeImage(prevMemeImage => ({
			...prevMemeImage,
			randomImage: url
		}))
	}

	function handleChange(event) {
		const { name, value } = event.target
		setMemeImage(prevMemeImage => ({
				...prevMemeImage,
				[name]: value
		}))
	}

	function handleSubmit(event) {
		event.preventDefault()
	}
	
	return (
		<main>
			<div className="form--container">
			<div onSubmit={handleSubmit} className="form">
				<input
					type="text"
					placeholder="Top text"
					name="topText"
					value={memeImage.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					name="bottomText"
					value={memeImage.bottomText}
					onChange={handleChange}
				/>
			</div>
			<button
				className="form--button"
				onClick={getMemeImage}
			>
				Get a new meme image
				<FontAwesomeIcon icon={faImage} className="image-icon" />
			</button>
			</div>
			<div className="meme">
				<img src={memeImage.randomImage} alt="meme-image" className="form--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
		</main>
	)
}

