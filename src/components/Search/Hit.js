import React from 'react';
import PostItem from '../PostItem';

const Hit = ({
  hit: { fields, background, title, date, timeToRead, description, category },
}) => {
  return (
    <PostItem
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
