import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
	const [color, setColor] = useState('')
	const [error, setError] =useState(false)
	const [selector, setSelector] = useState(10)
	const [list, setList] = useState(new Values('#f10525').all(selector))

	const handleSubmit = (e) => {
		e.preventDefault()
		
		try{
			let colors = new Values(color).all(parseInt(selector))
			setList(colors)
			setError(false)
		}catch(error){
			setError(true)
			console.log(error)
		}
		
	}

  return (
		<>
			<section className="container">
				<h3>Color generator</h3>
				<form onSubmit={handleSubmit}>
					<input 
						type="text" 
						value={color} 
						onChange={(e)=>setColor(e.target.value)}
						placeholder="#f15025"
						className={`${error ? 'error' : null}`}
					/>
					<input 
						type="Number" 
						value={selector} 
						onChange={(e)=>setSelector(e.target.value)}
						placeholder="1 - 50"
					/>
					<button type="submit" className="btn">submit</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index)=>{
					
					return(
						<SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
					)
				})}
			</section>
		</>
		
		)
}

export default App
