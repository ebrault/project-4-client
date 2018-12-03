'use strict'

const addSetSuccess = function (data) {
  $('#display-sets').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  const djSet = data.dj_set
  const djSetHtml = (`
    <p>DJ: ${djSet.dj}</p>
    <h4>Title: ${djSet.title}</h4>
    <h4>Type: ${djSet.set_type}</h4>
    <h4>Genre: ${djSet.genre}</h4>
    <h4>Date: ${djSet.date}</h4>
    <h4>ID: ${djSet.id}</h4>
    <br />
    `)
  $('#display-sets').html(djSetHtml)
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const addSetFailure = function () {
  $('#display-sets').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const updateSetSuccess = function (data) {
  $('#display-sets').html('')
  $('#display-message').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Update successful!')
  $('#display-message').css('color', 'red')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const updateSetFailure = function () {
  $('#display-sets').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const indexSetsSuccess = function (data) {
  if (data.dj_sets.length === 0) {
    $('#display-message').html('')
    $('#collection-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('#display-sets').html('')
    data.dj_sets.forEach(function (djSet) {
      const djSetHtml = (`
        <p>DJ: ${djSet.dj}</p>
        <h4>Title: ${djSet.title}</h4>
        <h4>Type: ${djSet.set_type}</h4>
        <h4>Genre: ${djSet.genre}</h4>
        <h4>Date: ${djSet.date}</h4>
        <h4>ID: ${djSet.id}</h4>
        <br />
        `)
      $('#display-sets').append(djSetHtml)
    })
  }
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const indexSetsFailure = function () {
  $('#display-sets').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const showSetSuccess = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-sets').html('')
  const djSet = data.dj_set
  const djSetHtml = (`
    <p>DJ: ${djSet.dj}</p>
    <h4>Title: ${djSet.title}</h4>
    <h4>Type: ${djSet.set_type}</h4>
    <h4>Genre: ${djSet.genre}</h4>
    <h4>Date: ${djSet.date}</h4>
    <h4>ID: ${djSet.id}</h4>
    <br />
    `)
  $('#display-sets').html(djSetHtml)
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const showSetFailure = function () {
  $('#display-sets').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const deleteSetSuccess = function () {
  $('#collection-empty-message').addClass('hidden')
  $('#display-sets').html('')
  $('#display-message').html('Deletion successuful!')
  $('#display-message').css('color', 'green')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

const deleteSetFailure = function () {
  $('#display-sets').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-set-form').trigger('reset')
  $('#update-set-form').trigger('reset')
  $('#show-set-form').trigger('reset')
  $('#delete-set-form').trigger('reset')
}

module.exports = {
  addSetSuccess,
  addSetFailure,
  updateSetSuccess,
  updateSetFailure,
  indexSetsSuccess,
  indexSetsFailure,
  showSetSuccess,
  showSetFailure,
  deleteSetSuccess,
  deleteSetFailure
}
