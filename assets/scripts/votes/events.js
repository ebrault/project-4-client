'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddVote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addVote(data)
    .then(ui.addVoteSuccess)
    .catch(ui.addVoteFailure)
}

const onUpdateVote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateVote(data)
    .then(ui.updateVoteSuccess)
    .catch(ui.updateVoteFailure)
}

const onIndexVotes = function (event) {
  event.preventDefault()
  api.indexVotes()
    .then(ui.indexVotesSuccess)
    .catch(ui.indexVotesFailure)
}

const onShowVote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showVote(data)
    .then(ui.showVoteSuccess)
    .catch(ui.showVoteFailure)
}

const onDeleteVote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteVote(data)
    .then(ui.deleteVoteSuccess)
    .catch(ui.deleteVoteFailure)
}

module.exports = {
  onAddVote,
  onUpdateVote,
  onIndexVotes,
  onShowVote,
  onDeleteVote
}
