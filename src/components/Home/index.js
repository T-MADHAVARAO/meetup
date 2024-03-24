import {Component} from 'react'
import {Link} from 'react-router-dom'

import Content from '../../Context'

class Home extends Component {
  render() {
    return (
      <Content.Consumer>
        {value => {
          const {name, topic, isRegister, topicsList} = value
          const userName = topicsList.filter(each => each.id === topic)
          return (
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <div>
                {!isRegister ? (
                  <div>
                    <h1>Welcome to Meetup</h1>
                    <p>Please Register for the topic.</p>
                    <Link to="/register">
                      <button type="button">Register</button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <h1>Hello {name}</h1>
                    <p>Welcome to {userName[0].displayText}</p>
                  </div>
                )}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup"
                />
              </div>
            </div>
          )
        }}
      </Content.Consumer>
    )
  }
}

export default Home
