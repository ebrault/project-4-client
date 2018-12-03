'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addSet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/dj_sets',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: data
  })
}

const updateSet = function (data) {
  const setId = data.dj_set.id
  return $.ajax({
    url: config.apiUrl + `/dj_sets/${setId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

const indexSets = function () {
  return $.ajax({
    url: config.apiUrl + '/dj_sets',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const showSet = function (data) {
  const setId = data.dj_set.id
  return $.ajax({
    url: config.apiUrl + `/dj_sets/${setId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: data
  })
}

const deleteSet = function (data) {
  const setId = data.dj_set.id
  return $.ajax({
    url: config.apiUrl + `/dj_sets/${setId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  addSet,
  updateSet,
  indexSets,
  showSet,
  deleteSet
}
