import React from 'react';
import './CardItem.css';
import { useDispatch } from 'react-redux';

function CardItem({img, name, location, date, players, isPlay, url}) {
  const dispatch = useDispatch();
  return(
    <Link to={url}>
      <li class="flex justify-between gap-x-6 py-5" onClick={() => setActivePage(i)}>
        <div class="flex min-w-0 gap-x-4">
          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={img} alt={name} />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">{name}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{location}</p>
          </div>
        </div>
        {
        isPlay &&
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{date}</p>
          <p class="mt-1 text-xs leading-5 text-gray-500">{players}</p>
        </div>
        }
      </li>
    </Link>
  );
}

export {CardItem}
