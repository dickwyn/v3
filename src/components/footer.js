import React from 'react'
import '../scss/footer.scss'

const Footer = () => (
  <footer>
    <div className="links">
      <a href="https://twitter.com/dickwyn">github</a>
      <a href="https://twitter.com/dickwyn">instagram</a>
      <a href="https://twitter.com/dickwyn">linkedin</a>
      <a href="https://twitter.com/dickwyn">twitter</a>
      <a href="https://twitter.com/dickwyn">youtube</a>
    </div>

    <p className="credit">© {new Date().getFullYear()} - DICK WYN YONG</p>
  </footer>
)

export default Footer
