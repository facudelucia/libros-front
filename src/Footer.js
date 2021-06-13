import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer text-center">
      Desarrollado por
      <a target="_blank" rel="noopener noreferrer" href="https://facudelucia-web.netlify.app">
        <i className="icon fas fa-globe"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/facudelucia">
        <i className="icon fab fa-instagram"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:facundodeluciajudo@gmail.com">
        <i className="icon far fa-envelope"></i>
      </a>
    </footer>
  )
}

export default Footer