import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Content from './Context'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {name: 'madhav', topic: 'Education and Learing', isRegister: false}

  onRegister = (name, topic) => {
    this.setState({name, topic, isRegister: true})
  }

  render() {
    const {name, topic, isRegister} = this.state
    return (
      <Content.Provider
        value={{
          topicsList,
          name,
          topic,
          isRegister,
          onRegister: this.onRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </Content.Provider>
    )
  }
}
export default App
