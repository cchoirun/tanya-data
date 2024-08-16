import React, { useState, useEffect } from 'react';
import { reviews } from '../../Data';

function Review() {
  const [myReviews, setMyReviews] = useState(reviews);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Ulasan Pengguna Kami</h2>
      <ul className="list-none">
        {myReviews.map(review => (
          <li key={review.id} className="flex p-4 mb-4 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              {/* Icon for user (optional) */}
              <svg className="w-8 h-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd" />
                <path d="M4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-1">
                <strong className="text-lg font-medium">{review.user}</strong>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;