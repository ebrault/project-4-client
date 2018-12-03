'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddSet = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addSet(data)
    .then(ui.addSetSuccess)
    .catch(ui.addSetFailure)
}

const onUpdateSet = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSet(data)
    .then(ui.updateSetSuccess)
    .catch(ui.updateSetFailure)
}

const onIndexSets = function (event) {
  event.preventDefault()
  api.indexSets()
    .then(ui.indexSetsSuccess)
    .catch(ui.indexSetsFailure)
}

const onShowSet = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showSet(data)
    .then(ui.showSetSuccess)
    .catch(ui.showSetFailure)
}

const onDeleteSet = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteSet(data)
    .then(ui.deleteSetSuccess)
    .catch(ui.deleteSetFailure)
}

module.exports = {
  onAddSet,
  onUpdateSet,
  onIndexSets,
  onShowSet,
  onDeleteSet
}
