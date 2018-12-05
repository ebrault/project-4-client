'use strict'

const addVoteSuccess = function (data) {
  $('#display-votes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  const vote = data.vote
  const voteHtml = (`
    <p>Vote Count: ${vote.vote_count}</p>
    <h4>Mix ID: ${vote.mix_id}</h4>
    <h4>Vote ID: ${vote.id}</h4>
    <br />
    `)
  $('#display-votes').removeClass('hidden')
  $('#display-votes').html(voteHtml)
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const addVoteFailure = function () {
  $('#display-votes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const updateVoteSuccess = function (data) {
  $('#display-votes').html('')
  $('#display-message').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Update successful!')
  $('#display-message').css('color', 'green')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const updateVoteFailure = function () {
  $('#display-votes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const indexVotesSuccess = function (data) {
  if (data.votes.length === 0) {
    $('#display-message').html('')
    $('#collection-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('#display-votes').html('')
    data.votes.forEach(function (vote) {
      const voteHtml = (`
        <p>Vote Count: ${vote.vote_count}</p>
        <h4>Mix ID: ${vote.mix_id}</h4>
        <h4>Vote ID: ${vote.id}</h4>
        <br />
        `)
      $('#display-votes').removeClass('hidden')
      $('#display-votes').append(voteHtml)
    })
  }
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const indexVotesFailure = function () {
  $('#display-votes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const showVoteSuccess = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-votes').html('')
  const vote = data.vote
  const voteHtml = (`
    <p>Vote Count: ${vote.vote_count}</p>
    <h4>Mix ID: ${vote.mix_id}</h4>
    <h4>Vote ID: ${vote.id}</h4>
    <br />
    `)
  $('#display-votes').removeClass('hidden')
  $('#display-votes').html(voteHtml)
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const showVoteFailure = function () {
  $('#display-votes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const deleteVoteSuccess = function () {
  $('#collection-empty-message').addClass('hidden')
  $('#display-votes').html('')
  $('#display-message').html('Deletion successuful!')
  $('#display-message').css('color', 'green')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

const deleteVoteFailure = function () {
  $('#display-votes').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
}

module.exports = {
  addVoteSuccess,
  addVoteFailure,
  updateVoteSuccess,
  updateVoteFailure,
  indexVotesSuccess,
  indexVotesFailure,
  showVoteSuccess,
  showVoteFailure,
  deleteVoteSuccess,
  deleteVoteFailure
}
