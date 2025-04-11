import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-48 p-4 bg-white dark:bg-gray-800 shadow-md h-screen">
      <nav className="space-y-4">
        <Link to="/" className="block">สัปดาห์</Link>
        <Link to="/month" className="block">เดือน</Link>
        <Link to="/year" className="block">ปี</Link>
      </nav>
    </div>
  );
}
