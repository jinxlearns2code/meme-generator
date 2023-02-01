import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import memesData from "../memesData.js"


export default function Meme() {
	const [memeImage, setMemeImage] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "images/white-img.png"
	})

	const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[randomNumber].url
		setMemeImage(prevMemeImage => ({
			...prevMemeImage,
			randomImage: url
		}))
	}
	
	const [formData, setFormData] = React.useState({
		topText: "", bottomText: ""
	})

	function handleChange(event) {
		setDataForm(prevFormData => {
			return {
				...prevFormData,
				[event.target.name]: event.target.value
			}
		})
	}

	return (
		<main className="form--container">
			<div action="submit" className="form">
				<input
					type="text"
					placeholder="Top text"
					name="topText"
					value={formData.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					name="bottomText"
					value={formData.bottomText}
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
			
			<img src={memeImage.randomImage} alt="meme-image" className="form--image" />

		</main>
	)
}