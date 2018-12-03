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
  $('#add-set-form').removeClass('hidden')
  $('#update-set-form').removeClass('hidden')
  $('#index-sets-button').removeClass('hidden')
  $('#show-set-form').removeClass('hidden')
  $('#delete-set-form').removeClass('hidden')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
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
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
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
  $('#add-set-form').addClass('hidden')
  $('#update-set-form').addClass('hidden')
  $('#index-sets-button').addClass('hidden')
  $('#show-set-form').addClass('hidden')
  $('#delete-set-form').addClass('hidden')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const signOutFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
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
