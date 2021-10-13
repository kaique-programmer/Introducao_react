import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const Abc = () => {
  const { slug, id } = useParams();

  return (

    <div>
      <h1>
        Abc
        {slug}
        {' '}
        {id}
      </h1>
    </div>
  );
};

export default Abc;
