import ReactDOM from 'react-dom'
import React from 'react'

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "showHomePage",
    "about" : "showAboutMePage",
    "projects" : "showProjectsPage",
    "projects:id" :"showOneProjectPage"
		"skills": "showSkillsPage"
  },

ReactDOM.render(<h1> Woop</h1>, document.querySelector('#app-container'))

new AppRouter()
