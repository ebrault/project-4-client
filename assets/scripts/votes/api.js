'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addVote = function (data) {
  return $.ajax({
    url: config.apiUrl + '/votes',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: data
  })
}

const updateVote = function (data) {
  const voteId = data.vote.id
  return $.ajax({
    url: config.apiUrl + `/votes/${voteId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

const indexVotes = function () {
  return $.ajax({
    url: config.apiUrl + '/votes',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const showVote = function (data) {
  const voteId = data.vote.id
  return $.ajax({
    url: config.apiUrl + `/votes/${voteId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: data
  })
}

const deleteVote = function (data) {
  const voteId = data.vote.id
  return $.ajax({
    url: config.apiUrl + `/votes/${voteId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  addVote,
  updateVote,
  indexVotes,
  showVote,
  deleteVote
}
