import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return coding pattern
  if (!isMenuOpen) return null;
  return (
    <div className='shadow-lg p-5 w-48'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Movies</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Likes</li>
      </ul>
    </div>
  );
};

export default Sidebar;
