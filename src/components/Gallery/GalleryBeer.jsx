import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useStore from '../../api/Store'
import { Button } from '../Button/Button';

import {
  Item,
  Img,
  ImgBox,
  About,
  BeerLink,
  ItemAbout,
  ItemImg,
  Btn,
} from './GalleryBeer.styled';

const PER_PAGE_MAX = 25;
const PER_PAGE_INIT = 15;

const BeerList = ( searchQuery ) => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(PER_PAGE_INIT)
  const { beers, getBeers, deleteBeer } = useStore();
  const { visibleButtonId, toggleButtonVisibility } = useStore();

  useEffect(() => {
     getBeers(page, perPage);
  }, [page, perPage]);

  const loadMore = () => {
    setPage(page + 1);
    setPerPage(PER_PAGE_MAX)
  };

  const handleContextMenu = (id) => (e) => {
    e.preventDefault();
    toggleButtonVisibility(id);
  };

  return (
    <div>
    <ul>
      {beers.map(beer => (
        <div>
            <Item key={beer.id}  onContextMenu={handleContextMenu(beer.id)}>
              <BeerLink  to={`/beers/${beer.id}`} state={{ location }}>
                <div>
                  <ItemImg>
                    <ImgBox>
                      <h3>{beer.name}</h3>
                      <Img src={beer.image_url}/>
                    </ImgBox>
                  </ItemImg>
                </div>
                <div>
                  <ItemAbout>
                    <About>{beer.description}</About>
                    <About>{beer.brewers_tips}</About>
                    <div>
                      <span>{beer.food_pairing}</span>
                    </div>
                  </ItemAbout>
                </div>
              </BeerLink>
              <div>
                {visibleButtonId.includes(beer.id) && <Btn onClick={() => deleteBeer(beer.id)}>Delete</Btn>}
              </div>
            </Item>
        </div>
      ))}
    </ul>
      <Button children={'Load more'} onClick={loadMore} />
    </div>
  );
};

export default BeerList;
