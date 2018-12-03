'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events.js')
const djSetEvents = require('./dj_sets/events.js')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#add-set-form').on('submit', djSetEvents.onAddSet)
  $('#update-set-form').on('submit', djSetEvents.onUpdateSet)
  $('#index-sets-button').on('click', djSetEvents.onIndexSets)
  $('#show-set-form').on('submit', djSetEvents.onShowSet)
  $('#delete-set-form').on('submit', djSetEvents.onDeleteSet)
})
