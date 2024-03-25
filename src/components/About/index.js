import Header from '../Header'
import './index.css'

const About = () => (
  <div className="bg-about-container">
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="desktop-about-size"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="small-about-size"
      />
    </div>
  </div>
)

export default About
