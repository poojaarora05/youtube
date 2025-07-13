import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col m-2 p-5 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={toggleMenuHandler}
          className='h-8 px-2 cursor-pointer'
          alt='menu'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6nGYL4WYW48-zG83lkTYJVXsTRlHOL2eZ_L9TlsWkNm9BxXWSyGRgJY&s'
        />
        <img
          className='h-8 bg-white'
          alt='youtube-logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KgSI5sJVoLW0qMYMwjnItoujnElq8IqAkw&s'
        />
        <a href='/'></a>
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full '
            type='text'
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 py-2 px-4 bg-gray-100 rounded-r-full text-center'>
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className='fixed bg-white py-2 px-2 w-[28.5rem] shadow-lg rounded-lg border-gray-100 absolute'>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  className='px-1 py-2 m-1 shadow-sm hover:bg-gray-100'
                  key={suggestion}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='user-logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwo8eJYb8h6_V7THlADVmoSbVkJQw6k08Liw&s'
        />
      </div>
    </div>
  );
};

export default Head;
