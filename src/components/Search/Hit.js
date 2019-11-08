import React from 'react';
import PostItem from '../PostItem';

const Hit = ({
  hit: { fields, title, date, description, category, background },
}) => {
  return (
    <PostItem
      slug={fields.slug}
      background={background}
      title={title}
      date={date}
      description={description}
      category={category}
    />
  );
};

export default Hit;
