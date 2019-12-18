import React from 'react';
import Post from '../Post';

const Hit = ({
  hit: { fields, title, date, timeToRead, description, tags },
}) => {
  return (
    <Post
      slug={fields.slug}
      title={title}
      date={date}
      timeToRead={timeToRead}
      description={description}
      tags={tags}
    />
  );
};

export default Hit;
