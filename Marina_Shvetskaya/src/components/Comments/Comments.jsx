import React from 'react';

export default function Comments({comments}) {

  return (
    <ul className="mt-4">
      {comments.map((comment, idx) =>
        <li className="text-primary" key={idx}>{comment.author}: {comment.message}</li>)}
    </ul>
  )
}