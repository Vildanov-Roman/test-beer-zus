import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useStore from '../../api/Store';
import { BeerLink, WrapTitle, WrapDescription, Wrapper } from './BeerDetails.style';

const BeerDetails = () => {


  const { beer, getBeerById } = useStore();
  const { beerId } = useParams();
  const location = useLocation();
  const refLocation = useRef(location.state?.location);
  console.log(beerId);

  useEffect(() => {
    getBeerById(beerId);
  }, [beerId]);

  if (!beer) {
    return <p>404 Not Found</p>;
  }


  const { name, image_url, abv, tagline, brewers_tips, contributed_by, first_brewed } = beer[0];

  return (
    <Wrapper>
      <BeerLink to={refLocation.current ?? '/'}>Go back</BeerLink>
      <WrapTitle>
        <img src={image_url} alt={name} />
        <WrapDescription>
          <h2>
            {name}: {first_brewed?.split('/')?.[1]}
          </h2>
          <p>{brewers_tips}</p>
          <h3>strength</h3>
          <p>{abv}</p>
          <h2>{tagline}</h2>
          <p>{contributed_by}</p>
        </WrapDescription>
      </WrapTitle>
    </Wrapper>
  );
};

export default BeerDetails;


