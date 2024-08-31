import React from 'react';
import { ListsWidget2 } from '../../../../_metronic/partials/widgets';

type Player = {
  id: number;
  name: string;
  age: number;
  number: number | null;
  position: string;
};

type OverviewProps = {
  teamData: {
    response: {
      players: Player[];
    }[];
  };
};

export function Overview({ teamData }: OverviewProps) {

  if (!teamData || !teamData.response || teamData.response.length === 0) {
    return <div>No data</div>;
  }

  const players = teamData.response[0].players;

  // فیلتر کردن بازیکنان بر اساس موقعیت
  const goalkeepers = players.filter(player => player.position === 'Goalkeeper');
  const defenders = players.filter(player => player.position === 'Defender');
  const midfielders = players.filter(player => player.position === 'Midfielder');
  const attackers = players.filter(player => player.position === 'Attacker');

  return (
    <>
      <div className='card mb-5 mb-xl-10 dir ' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer bg-secondary'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>بازیکنان</h3>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row justify-content-around mt-5'>
          <ListsWidget2 className='col-lg-5' title='هافبک‌ها' players={midfielders} />
            <ListsWidget2 className='col-lg-5' title='مدافعین' players={defenders} />
          </div>
          <div className='row justify-content-around mt-5'>
            
            <ListsWidget2 className='col-lg-5' title='مهاجمان' players={attackers} />
            <ListsWidget2 className='col-lg-5' title='دروازه‌بان‌ها' players={goalkeepers} />

          </div>
        </div>
      </div>
    </>
  );
}
