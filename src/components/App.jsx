import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const BeerList = lazy(() => import('./Gallery/GalleryBeer'));
const BeerDetails = lazy(() => import('./BeerDetails/BeerDetails'))

export const App = () => {

  return (
    <>
      <Suspense >
        <Routes>
          <Route path="/beers" element={<BeerList/>} />
          <Route path="/beers/:beerId" element={<BeerDetails/>} />
        </Routes>
      </Suspense>
    </>
  );
};
