'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addComment(data)
    .then(ui.addCommentSuccess)
    .catch(ui.addCommentFailure)
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateComment(data)
    .then(ui.updateCommentSuccess)
    .catch(ui.updateCommentFailure)
}

const onIndexComments = function (event) {
  event.preventDefault()
  api.indexComments()
    .then(ui.indexCommentsSuccess)
    .catch(ui.indexCommentsFailure)
}

const onShowComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showComment(data)
    .then(ui.showCommentSuccess)
    .catch(ui.showCommentFailure)
}

const onDeleteComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteComment(data)
    .then(ui.deleteCommentSuccess)
    .catch(ui.deleteCommentFailure)
}

module.exports = {
  onAddComment,
  onUpdateComment,
  onIndexComments,
  onShowComment,
  onDeleteComment
}
