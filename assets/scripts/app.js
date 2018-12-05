'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events.js')
const mixEvents = require('./mixes/events.js')
const voteEvents = require('./votes/events.js')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#add-mix-form').on('submit', mixEvents.onAddMix)
  $('#update-mix-form').on('submit', mixEvents.onUpdateMix)
  $('#index-mixes-button').on('click', mixEvents.onIndexMixes)
  $('#show-mix-form').on('submit', mixEvents.onShowMix)
  $('#delete-mix-form').on('submit', mixEvents.onDeleteMix)
  $('#add-vote-form').on('submit', voteEvents.onAddVote)
  $('#update-vote-form').on('submit', voteEvents.onUpdateVote)
  $('#index-votes-button').on('click', voteEvents.onIndexVotes)
  $('#show-vote-form').on('click', voteEvents.onShowVote)
  $('#delete-vote-form').on('submit', voteEvents.onDeleteVote)
})
