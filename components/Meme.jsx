import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'


export default function Meme() {
	return (
		<main className="form--container">
			<div action="submit" className="form">
				<input type="text" placeholder="Top text" />
				<input type="text" placeholder="Bottom text" />
			</div>
			<button>Get a new meme image <FontAwesomeIcon icon={faImage} className="image-icon" /></button>
		</main>
	)
}