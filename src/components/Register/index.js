import {Component} from 'react'

import Content from '../../Context'

class Register extends Component {
  state = {name: '', topic: 'ARTS_AND_CULTURE'}

  onUserName = event => {
    this.setState({name: event.target.value})
  }

  onUserTopic = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    return (
      <Content.Consumer>
        {value => {
          const {topicsList, onRegister} = value
          const {name, topic} = this.state
          const onUserRegister = event => {
            event.preventDefault()
            if (name !== '') {
              const {history} = this.props
              history.replace('/')

              onRegister(name, topic)
            }
          }
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
                <div className="card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                    className="register"
                  />
                  <form onSubmit={onUserRegister}>
                    <h1>Let Us Join</h1>
                    <label htmlFor="name">NAME</label>
                    <br />
                    <input
                      value={name}
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      onChange={this.onUserName}
                    />
                    <br />
                    <label htmlFor="topics">TOPICS</label>
                    <br />
                    <select
                      value={topic}
                      id="topics"
                      onChange={this.onUserTopic}
                    >
                      {topicsList.map(each => (
                        <option key={each.id} value={each.id}>
                          {each.displayText}
                        </option>
                      ))}
                    </select>
                    <br />
                    <button type="submit">Register Now</button>
                    <p className="error">error</p>
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </Content.Consumer>
    )
  }
}

export default Register
