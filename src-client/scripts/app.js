import ReactDOM from 'react-dom'
import React from 'react'

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "showHomePage",
    "about" : "showAboutMePage",
    "projects" : "showProjectsPage",
		"skills": "showSkillsPage"
  },

ReactDOM.render(<h1> We are da shit</h1>, document.querySelector('#app-container'))

new AppRouter()
