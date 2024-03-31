import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import Language from './Language'
const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My Technical Capabilities</span>

      <div className='skills__container container grid'>
        <Language />
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills
