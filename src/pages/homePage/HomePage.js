import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getListCities } from '../../redux/cities/cityThunk';
import { CardItem } from '../../components/card/CardItem';
import { Loading } from '../../components/loading/Loading'
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListCities());
  }, [dispatch]);

  const { isLoading, cities, isError } = useSelector((state) => ({
    ...state.cities,
  }));

  if(!Array.isArray(cities)){
    dispatch(getListCities());
  }

  const navigateToFormCity = () => {
    navigate('/createCity');
  };

  return(
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      { isLoading ? (
        <Loading></Loading>
      ) : null}
      
      {isError ? (
        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isError}
        </div>
      ) : null}

      {!isLoading && cities && cities.length > 0 ? (
        <ul className="divide-y divide-gray-100 items-center" >                       
          {cities.map((city) => (
            <CardItem key={city.id_city} data={city} isPlay={false}></CardItem>
          ))}
        </ul>
      ) : null }

      <button type="button" 
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={navigateToFormCity}>Add New City</button>
    </div>
  )
}

export {HomePage}