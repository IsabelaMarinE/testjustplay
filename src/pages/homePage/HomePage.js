import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListCities } from '../../redux/cities/cityThunk';
import CardItem from '../../components/card/CardItem';
import Loading from '../../components/loading/Loading'
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCities());
  }, [dispatch]);

  const { isLoading, cities, isError } = useSelector((state) => ({
    ...state.cities,
  }));

  return(
    <div className="container">
      { isLoading ? (
        <Loading></Loading>
      ) : null}
      
      {isError ? (
        <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isError}
        </div>
      ) : null}

      {!isLoading && cities.length ? (
        <>                        
        {cities.map((city) => (
          <ul role="list" class="divide-y divide-gray-100" >
            <CardItem key={city.id} data={city}></CardItem>
          </ul>
        ))}
        </>
      ) : null }
    </div>
  )
}

export {HomePage}