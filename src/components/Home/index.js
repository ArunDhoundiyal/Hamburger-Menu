import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg-home-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="desktop-home-size"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
        alt="home"
        className="small-home-size"
      />
    </div>
  </div>
)

export default Home
