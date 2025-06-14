import React from 'react';
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Posts</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Create Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard 
            title="First Post" 
            body="This is the content of my first post" 
          />
          <PostCard 
            title="Second Post" 
            body="This is the content of my second post" 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;