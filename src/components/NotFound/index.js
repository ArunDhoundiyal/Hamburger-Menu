import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notFound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
        className="notFound"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-paragraph">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page page.
      </p>
    </div>
  </>
)

export default NotFound
