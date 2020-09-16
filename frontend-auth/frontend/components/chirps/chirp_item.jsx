import React from 'react';

export default ({ chirp, likeChirp, unLikeChirp }) => {
  let likeButtonText = "Like";
  let likeButtonAction = () => likeChirp(chirp.id);
  if (chirp.liked_by_current_user) {
    likeButtonText = "Dislike";
    likeButtonAction = () => unLikeChirp(chirp.id);
  }
  return (
    <li>
      <h3>{chirp.body}</h3>
      <p><strong>Likes: {chirp.likes}</strong></p>
      <button onClick={likeButtonAction}>{likeButtonText}</button>
    </li>
  );
}
