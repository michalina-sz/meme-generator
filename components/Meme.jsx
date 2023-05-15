import React from 'react';
import memesData from '../memesData.js';

export default function Meme() {
	let url;

	function GetMemeImage() {
		const memesArray = memesData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		url = memesArray[randomNumber].url;
		console.log(url);
	}

	return (
		<main>
			<p>{url}</p>
			<div className='form'>
				<input type='text' placeholder='Top text' className='form--input' />
				<input type='text' placeholder='Bottom text' className='form--input' />
				<button className='form--button' onClick={GetMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
		</main>
	);
}
