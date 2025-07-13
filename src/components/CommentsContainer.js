import { React } from 'react';

const commentsData = [
  {
    name: 'Akshay',
    text: 'This video is very nice and great to watch',
    replies: [
      {
        name: 'Akshay',
        text: 'This video is very nice and great to watch',
        replies: [
          {
            name: 'Akshay',
            text: 'This video is very nice and great to watch',
            replies: [
              {
                name: 'Akshay',
                text: 'This video is very nice and great to watch',
                replies: [],
              },
              {
                name: 'Akshay',
                text: 'This video is very nice and great to watch',
                replies: [
                  {
                    name: 'Akshay',
                    text: 'This video is very nice and great to watch',
                    replies: [
                      {
                        name: 'Akshay',
                        text: 'This video is very nice and great to watch',
                        replies: [
                          {
                            name: 'Akshay',
                            text: 'This video is very nice and great to watch',
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Akshay',
            text: 'This video is very nice and great to watch',
            replies: [],
          },
        ],
      },
      {
        name: 'Akshay',
        text: 'This video is very nice and great to watch',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay',
    text: 'This video is very nice and great to watch',
    replies: [],
  },
  {
    name: 'Akshay',
    text: 'This video is very nice and great to watch',
    replies: [],
  },
  {
    name: 'Akshay',
    text: 'This video is very nice and great to watch',
    replies: [],
  },
];

const showComments = (comments) => {
  return comments.map((comment, index) => {
    return (
      <div
        className='px-2 py-1 mx-2 my-1'
        key={index}
      >
        <div>{comment.name}</div>
        <div>{comment.text}</div>
        {comment?.replies?.length > 0 && (
          <div>{showComments(comment.replies)}</div>
        )}
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div>
      <h2 className='p-2 m-2 font-bold text-xl'>Comments:</h2>
      {/* {commentsData.map((comment, index) => {
        return <span key={index}>{showComments(comment)}</span>;
      })} */}
      {showComments(commentsData)}
    </div>
  );
};

export default CommentsContainer;
