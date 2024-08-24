import React from 'react';
import { Link } from 'react-router-dom';


  const leagues = [
    { id: 39, name: 'لیگ برتر' ,country :'انگلیس' ,image: 'public/media/logos/leagues/premier-league.svg'},
    { id: 140, name: 'لالیگا' ,country :'اسپانیا', image: 'media/logos/leagues/LaLiga.png'},
    { id: 78, name: 'بوندسلیگا' , country :'آلمان', image: 'media/logos/leagues/Bundesliga.svg' },
    { id: 135, name: 'سری آ' , country :'ایتالیا', image: 'media/logos/leagues/Serie_A.png' },
    { id: 61, name: 'لیگ یک '  , country :'فرانسه', image: 'media/logos/leagues/Ligue_1.png' },
    { id: 94, name: 'لیگ برتر '  , country :'پرتغال', image: 'media/logos/leagues/PrimeiraLiga.svg' },
    { id: 290, name: 'لیگ خلیج فارس', country :'ایران '  ,image: 'media/logos/leagues/Persian_Gulf_Pro_League.png' },
    { id: 291, name: 'لیگ آزادگان'  , country :'ایران', image: 'media/logos/leagues/Azadegan_League.png' },
  ];


const LeaguesShow: React.FC = () => {
  return (
    <div className='m-0 dir mt-15'>
      <h1 className='text-gray-800 fw-bold mb-6 mx-5 text-end'>لیگ ها</h1>
      <div className='mb-10'>
        {leagues.map((league) => (
          <Link
            key={league.id}
            to={`/standing/${league.id}`}
            className='custom-list d-flex align-items-center px-5 py-4'
          >
            <div className='d-flex flex-column flex-grow-1'>
              <h5 className='custom-list-title fw-bold text-gray-800 mb-1'>{league.name}</h5>
              <span className='text-gray-500 fw-bold'>{league.country}</span>
            </div>
            <div className='symbol symbol-40px me-5'>
              <span className='symbol-label'>
                <img src={league.image} alt={league.name} className='h-50 align-self-center' />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { LeaguesShow };
