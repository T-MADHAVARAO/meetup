import React from 'react'

const Content = React.createContext({
  name: '',
  topic: '',
  isRegister: false,
  onRegister: () => {},
  topicsList: [],
})

export default Content
