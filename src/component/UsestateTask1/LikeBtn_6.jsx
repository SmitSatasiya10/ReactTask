import React, { useState } from 'react';

const LikeBtn_6 = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Like Button with Count</h2>
      
      <p className="mt-3">Likes: {likeCount}</p>

      <button className="btn btn-primary" onClick={handleLike}>
        Like
      </button>
    </div>
  );
};

export default LikeBtn_6;
