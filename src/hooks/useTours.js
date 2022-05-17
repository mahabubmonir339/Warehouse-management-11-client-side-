import { useEffect, useState } from 'react';

const useTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://obscure-thicket-61578.herokuapp.com/tours')
      .then(res => res.json())
      .then(result => {
        setTours(result.tours)
        setLoading(false);
      });
  }, [tours, loading]);

  return [tours, loading];

}

export default useTours;