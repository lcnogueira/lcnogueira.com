import React from 'react';
import Post from '../Post';

const Hit = ({
  hit: { fields, background, title, date, timeToRead, description, category },
}) => {
  return (
    <Post
      slug={fields.slug}
      background={background}
      title={title}
      date={date}
      timeToRead={timeToRead}
      description={description}
      category={category}
    />
  );
};

export default Hit;
