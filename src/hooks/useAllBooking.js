import { useEffect, useState } from 'react';

const useAllBooking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch('https://obscure-thicket-61578.herokuapp.com/bookingTour')
      .then(res => res.json())
      .then(result => {
        setBooking(result)
      });
  }, []);

  return [booking];

}

export default useAllBooking;