import React from 'react'
import './styles.css'

const Skills = () => {
  return (
    <div className='contain'>
    <div className='skill' id='Skills'>
        <h1>My skill</h1>

        <li><h3>HTML</h3> 
        <span className='bar'><span className='html'></span></span>
        </li>
        <li><h3>CSS</h3>
        <span className='bar'><span className='css'></span></span>
        </li>
        <li><h3>Javascript</h3>
        <span className='bar'><span className='Javascript'></span></span>
        </li>
        <li><h3>React.js</h3>
        <span className='bar'><span className='React'></span></span>
        </li>
    </div>
    </div>
  )
}

export default Skills