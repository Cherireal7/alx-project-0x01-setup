import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;