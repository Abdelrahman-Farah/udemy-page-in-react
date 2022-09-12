import React from 'react'
import { Link } from 'react-router-dom'
import invertedLogo from '../assets/logo-udemy-inverted.svg'
import sponsers from '../assets/sponsers.png'

function Footer() {
  const links = [ ["Udemy Business", "Teach on Udemy", "Get the app", "About us", "Contact us"],
                  ["Careers", "Blog", "Help and Support", "Affiliate", "Investors"],
                  ["Terms", "Privacy policy", "Cookie settings", "Sitemap", "Accessibility statement"]
  ]

  const renderLinks = () => {
    const groups = links.map((group) => {
      const collection = group.map((linkItem) => {
        return <div className="link-item">{linkItem}</div>
      });
      return <div> {collection} </div>
    });
    return groups;
  }

  return (
    <footer>
      <div className="sponsers">
        <h5 className="m-0">Top companies choose <span className="udemy-business">Udemy Business</span> to build in-demand career skills.</h5>
        <img src={sponsers} alt="sponsers" />
      </div>

      <hr className="mt-0" />

      <div className="footer-mid mb-5">
        <button className="language-button mb-3">English</button>
        <div className="links-container">{renderLinks()}</div>
      </div>

      <div className="footer-end mt-5">
        <Link to="/udemy-page-in-react"><img src={invertedLogo} className="inverted-logo pointer-on-hover" alt="logo" /></Link>
        <span>© 2022 Udemy, Inc.</span>
      </div>

    </footer>
  )
}

export default Footer