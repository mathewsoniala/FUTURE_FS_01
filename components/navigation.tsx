'use client'

import { useEffect, useState } from 'react'
import Hero from './hero'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark')
        } else {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkMode(systemDark)
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
        localStorage.setItem('theme', 'dark')
        } else {
        localStorage.setItem('theme', 'light')
        }
    }, [isDarkMode])

  return (
    <>
      <div className="navigationBody">
        <nav className="flex justify-between items-center p-4">
          <h1><a href="#home">MO</a></h1>

          <ul className="flex gap-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className='themeButton' onClick={() => {
            setIsDarkMode(prev => {
              const newMode = !prev
              localStorage.setItem('theme', newMode ? 'dark' : 'light')
              return newMode
            })
          }}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </nav>
      </div>
      <div className={isDarkMode ? 'dark-section' : 'light-section'}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <div className="footer">
        <p>© 2026 Mathews Oniala. All rights reserved.</p>
      </div>
    </>
  )
}

export default Navigation