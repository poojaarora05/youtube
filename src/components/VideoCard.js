import React from 'react';

const VideoCard = ({ info }) => {
  // console.log(info, Object.keys(info), new Object(info));
  const { statistics, snippet } = info;
  const { thumbnails, channelTitle, title } = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg '>
      <img
        className='rounded-lg'
        alt='thumbnail'
        src={thumbnails.medium.url}
      />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

const RedBorderVideoCard = ({ info }) => {
  return (
    <div className='p-1 border border-red-900'>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
