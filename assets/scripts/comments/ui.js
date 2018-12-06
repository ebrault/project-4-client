'use strict'

const addCommentSuccess = function (data) {
  $('#display-mixes').html('')
  $('#display-votes').html('')
  $('#display-comments').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  const comment = data.comment
  const commentHtml = (`
    <p>Comment Body: ${comment.comment_body}</p>
    <h4>Mix ID: ${comment.mix_id}</h4>
    <h4>Comment ID: ${comment.id}</h4>
    <br />
    `)
  $('#display-comments').removeClass('hidden')
  $('#display-comments').html(commentHtml)
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const addCommentFailure = function () {
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const updateCommentSuccess = function (data) {
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const updateCommentFailure = function () {
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const indexCommentsSuccess = function (data) {
  if (data.comments.length === 0) {
    $('#display-message').html('')
    $('#collection-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('#display-comments').html('')
    data.comments.forEach(function (comment) {
      const commentHtml = (`
        <p>Comment Body: ${comment.comment_body}</p>
        <h4>Mix ID: ${comment.mix_id}</h4>
        <h4>Comment ID: ${comment.id}</h4>
        <br />
        `)
      $('#display-comments').removeClass('hidden')
      $('#display-comments').append(commentHtml)
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const indexCommentsFailure = function () {
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const showCommentSuccess = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-comments').html('')
  const comment = data.comment
  const commentHtml = (`
    <p>Comment Body: ${comment.comment_body}</p>
    <h4>Mix ID: ${comment.mix_id}</h4>
    <h4>Comment ID: ${comment.id}</h4>
    <br />
    `)
  $('#display-comments').removeClass('hidden')
  $('#display-comments').html(commentHtml)
  $('#add-mix-form').trigger('reset')
  $('#update-mix-form').trigger('reset')
  $('#show-mix-form').trigger('reset')
  $('#delete-mix-form').trigger('reset')
  $('#add-vote-form').trigger('reset')
  $('#update-vote-form').trigger('reset')
  $('#show-vote-form').trigger('reset')
  $('#delete-vote-form').trigger('reset')
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const showCommentFailure = function () {
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const deleteCommentSuccess = function () {
  $('#collection-empty-message').addClass('hidden')
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

const deleteCommentFailure = function () {
  $('#display-comments').html('')
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
  $('#add-comment-form').trigger('reset')
  $('#update-comment-form').trigger('reset')
  $('#show-comment-form').trigger('reset')
  $('#delete-comment-form').trigger('reset')
}

module.exports = {
  addCommentSuccess,
  addCommentFailure,
  updateCommentSuccess,
  updateCommentFailure,
  indexCommentsSuccess,
  indexCommentsFailure,
  showCommentSuccess,
  showCommentFailure,
  deleteCommentSuccess,
  deleteCommentFailure
}
