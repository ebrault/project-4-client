'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddMix = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addMix(data)
    .then(ui.addMixSuccess)
    .catch(ui.addMixFailure)
}

const onUpdateMix = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateMix(data)
    .then(ui.updateMixSuccess)
    .catch(ui.updateMixFailure)
}

const onIndexMixes = function (event) {
  event.preventDefault()
  api.indexMixes()
    .then(ui.indexMixesSuccess)
    .catch(ui.indexMixesFailure)
}

const onShowMix = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showMix(data)
    .then(ui.showMixSuccess)
    .catch(ui.showMixFailure)
}

const onDeleteMix = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteMix(data)
    .then(ui.deleteMixSuccess)
    .catch(ui.deleteMixFailure)
}

module.exports = {
  onAddMix,
  onUpdateMix,
  onIndexMixes,
  onShowMix,
  onDeleteMix
}
