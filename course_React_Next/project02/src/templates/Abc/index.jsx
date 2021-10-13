import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const Abc = () => {
  const { slug, id } = useParams();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  }, [history]);

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
