import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'


export default function Meme() {
	return (
		<div className="form--container">
			<form action="submit" className="form">
				<input type="text" />
				<input type="text" />
			</form>
			<button>Get a new meme image <FontAwesomeIcon icon={faImage} className="image-icon" /></button>
		</div>
	)
}