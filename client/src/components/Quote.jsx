import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/actions';
import { ImSpinner9 } from 'react-icons/im';

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  //   console.log('quote:', quote);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className='quote-container'>
      {/* <p className="quote">There's no crying in baseball! </p>
      <p className="author">- A League of Their Own</p> */}
      {quote ? (
        <div>
          <p className='quote'>{quote.quote}</p>
          <p className='author'>— {quote.author}</p>
        </div>
      ) : (
        <ImSpinner9 className='spinner' size='2em' />
      )}
    </div>
  );
};

export default Quote;
