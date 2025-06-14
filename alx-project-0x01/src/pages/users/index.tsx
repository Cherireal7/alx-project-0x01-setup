import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Users</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-gray-600">john@example.com</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-lg">Jane Smith</h3>
            <p className="text-gray-600">jane@example.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;