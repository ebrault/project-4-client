'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addMix = function (data) {
  return $.ajax({
    url: config.apiUrl + '/mixes',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: data
  })
}

const updateMix = function (data) {
  const mixId = data.mix.id
  return $.ajax({
    url: config.apiUrl + `/mixes/${mixId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

const indexMixes = function () {
  return $.ajax({
    url: config.apiUrl + '/mixes',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const showMix = function (data) {
  const mixId = data.mix.id
  return $.ajax({
    url: config.apiUrl + `/mixes/${mixId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: data
  })
}

const deleteMix = function (data) {
  const mixId = data.mix.id
  return $.ajax({
    url: config.apiUrl + `/mixes/${mixId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  addMix,
  updateMix,
  indexMixes,
  showMix,
  deleteMix
}
