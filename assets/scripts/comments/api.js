'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: data
  })
}

const updateComment = function (data) {
  const commentId = data.comment.id
  return $.ajax({
    url: config.apiUrl + `/comments/${commentId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

const indexComments = function () {
  return $.ajax({
    url: config.apiUrl + '/comments',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const showComment = function (data) {
  const commentId = data.comment.id
  return $.ajax({
    url: config.apiUrl + `/comments/${commentId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: data
  })
}

const deleteComment = function (data) {
  const commentId = data.comment.id
  return $.ajax({
    url: config.apiUrl + `/comments/${commentId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  addComment,
  updateComment,
  indexComments,
  showComment,
  deleteComment
}
