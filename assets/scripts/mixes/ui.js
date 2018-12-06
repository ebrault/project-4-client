'use strict'

const addMixSuccess = function (data) {
  $('#display-mixess').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  const mix = data.mix
  const mixHtml = (`
    <p>DJ: ${mix.dj}</p>
    <h4>Title: ${mix.title}</h4>
    <h4>Type: ${mix.mix_type}</h4>
    <h4>Genre: ${mix.genre}</h4>
    <h4>Date: ${mix.date}</h4>
    <h4>ID: ${mix.id}</h4>
    <br />
    `)
  $('#display-mixes').removeClass('hidden')
  $('#display-mixes').html(mixHtml)
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const addMixFailure = function () {
  $('#display-mixes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const updateMixSuccess = function (data) {
  $('#display-mixes').html('')
  $('#display-message').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Update successful!')
  $('#display-message').css('color', 'green')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const updateMixFailure = function () {
  $('#display-mixes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const indexMixesSuccess = function (data) {
  if (data.mixes.length === 0) {
    $('#display-message').html('')
    $('#collection-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('#display-mixes').html('')
    $('#display-comments').html('')
    $('#display-votes').html('')
    data.mixes.forEach(function (mix) {
      let voteTotal = 0
      mix.votes.forEach(function (vote) {
        voteTotal += vote.vote_count
      })
      let commentString = ''
      mix.comments.forEach(function (comment) {
        commentString += `<p>${comment.comment_body}</p>`
      })
      const mixHtml = (`
        <p>DJ: ${mix.dj}</p>
        <h4>Title: ${mix.title}</h4>
        <h4>Type: ${mix.mix_type}</h4>
        <h4>Genre: ${mix.genre}</h4>
        <h4>Date: ${mix.date}</h4>
        <h4>ID: ${mix.id}</h4>
        <h4>Votes: ${voteTotal}</h4>
        <h4>Comments: ${commentString}</h4>
        <br />
        `)
      $('#display-mixes').removeClass('hidden')
      $('#display-mixes').append(mixHtml)
    })
  }
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const indexMixesFailure = function () {
  $('#display-mixes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const showMixSuccess = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-mixes').html('')
  $('#display-comments').html('')
  $('#display-votes').html('')
  const mix = data.mix
  let voteTotal = 0
  mix.votes.forEach(function (vote) {
    voteTotal += vote.vote_count
  })
  let commentString = ''
  mix.comments.forEach(function (comment) {
    commentString += `<p>${comment.comment_body}</p>`
  })
  const mixHtml = (`
    <p>DJ: ${mix.dj}</p>
    <h4>Title: ${mix.title}</h4>
    <h4>Type: ${mix.mix_type}</h4>
    <h4>Genre: ${mix.genre}</h4>
    <h4>Date: ${mix.date}</h4>
    <h4>ID: ${mix.id}</h4>
    <h4>Votes: ${voteTotal}</h4>
    <h4>Comments: ${commentString}</h4>
    <br />
    `)
  $('#display-mixes').removeClass('hidden')
  $('#display-mixes').html(mixHtml)
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const showMixFailure = function () {
  $('#display-mixes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const deleteMixSuccess = function () {
  $('#collection-empty-message').addClass('hidden')
  $('#display-mixes').html('')
  $('#display-message').html('Deletion successuful!')
  $('#display-message').css('color', 'green')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

const deleteMixFailure = function () {
  $('#display-mixes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
}

module.exports = {
  addMixSuccess,
  addMixFailure,
  updateMixSuccess,
  updateMixFailure,
  indexMixesSuccess,
  indexMixesFailure,
  showMixSuccess,
  showMixFailure,
  deleteMixSuccess,
  deleteMixFailure
}
