'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign Up Successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign In Successful!')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#add-mix-form').removeClass('hidden')
  $('#update-mix-form').removeClass('hidden')
  $('#index-mixes-button').removeClass('hidden')
  $('#show-mix-form').removeClass('hidden')
  $('#delete-mix-form').removeClass('hidden')
  $('#add-vote-form').removeClass('hidden')
  $('#update-vote-form').removeClass('hidden')
  $('#index-votes-button').removeClass('hidden')
  $('#show-vote-form').removeClass('hidden')
  $('#delete-vote-form').removeClass('hidden')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const signInFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Password changed successfully!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#display-mixes').addClass('hidden')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign out successful!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#display-mixes').addClass('hidden')
  $('#display-votes').addClass('hidden')
  $('#add-mix-form').addClass('hidden')
  $('#update-mix-form').addClass('hidden')
  $('#index-mixes-button').addClass('hidden')
  $('#show-mix-form').addClass('hidden')
  $('#delete-mix-form').addClass('hidden')
  $('#add-vote-form').addClass('hidden')
  $('#update-vote-form').addClass('hidden')
  $('#index-votes-button').addClass('hidden')
  $('#show-vote-form').addClass('hidden')
  $('#delete-vote-form').addClass('hidden')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const signOutFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
