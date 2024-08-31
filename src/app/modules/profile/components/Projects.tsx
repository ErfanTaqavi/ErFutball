import React from 'react';
import FieldImage from './../../../../../public/media/logos/lineup.png';
import goalIcon from "../../../../../public/media/logos/ball.svg"; 
import yellowCardIcon from "../../../../../public/media/logos/yellowcard.png"; 
import redCardIcon from "../../../../../public/media/logos/redcard.png";
import { Link } from 'react-router-dom';

// کامپوننت Player که شماره و نام بازیکن را نمایش می‌دهد
const Player = ({ style, number, name, id }) => {
  return (
    <div className="player" style={style}>
      <div className='playerphoto'>
        <div className='playernumber'>{number}</div>
      </div>
      <Link to={`/player/${id}`} className="player-link">
        {name}
      </Link>
    </div>
  );
};

// کامپوننت Team که موقعیت بازیکنان را تنظیم می‌کند
const Team = ({ side, players, name }) => {
  // موقعیت‌های از پیش تعیین‌شده برای بازیکنان
  const positions = [
    { top: '45%', left: side === 'left' ? '0%' : 'unset', right: side === 'right' ? '0%' : 'unset' }, // دروازه‌بان
    { top: '35%', left: side === 'left' ? '30%' : 'unset', right: side === 'right' ? '30%' : 'unset' }, // دفاع وسط
    { top: '55%', left: side === 'left' ? '30%' : 'unset', right: side === 'right' ? '30%' : 'unset' },// دفاع وسط
    { top: '15%', left: side === 'left' ? '35%' : 'unset', right: side === 'right' ? '35%' : 'unset' }, // دفاع بالا
    { top: '75%', left: side === 'left' ? '35%' : 'unset', right: side === 'right' ? '35%' : 'unset' },// دفاع پایین
    { top: '25%', left: side === 'left' ? '50%' : 'unset', right: side === 'right' ? '50%' : 'unset' }, // هافبک‌های وسط
    { top: '45%', left: side === 'left' ? '50%' : 'unset', right: side === 'right' ? '50%' : 'unset' },
    { top: '65%', left: side === 'left' ? '50%' : 'unset', right: side === 'right' ? '50%' : 'unset' },
    { top: '15%', left: side === 'left' ? '70%' : 'unset', right: side === 'right' ? '70%' : 'unset' },// مهاجمان
    { top: '75%', left: side === 'left' ? '70%' : 'unset', right: side === 'right' ? '70%' : 'unset' },
    { top: '45%', left: side === 'left' ? '72%' : 'unset', right: side === 'right' ? '75%' : 'unset' },
  ];

  return (
    <div className={`team team-${side}`}>
      {players.map((player, index) => {
        const { number, name, id } = player.player;
        const style = positions[index] || {};

        return (
          <Player
            key={player.player.id}
            number={number}
            name={name}
            style={style}
            id={id}
          />
        );
      })}
    </div>
  );
};

// کامپوننت اصلی Projects
export function Projects({ fixtureData }) {
  const teamLeft = fixtureData?.response[0]?.lineups[0];
  const teamRight = fixtureData?.response[0]?.lineups[1];

  if (!teamLeft || !teamRight) {
    return <div className='text-center'>اطلاعاتی از این بازی در دسترس نیست</div>;
  }

  // فیلتر کردن رویدادها برای هر تیم
  const eventsLeft = fixtureData?.response[0]?.events?.filter(event =>
    (event.type === 'Goal' || event?.type === 'Card') && event?.team?.id === teamLeft?.team?.id
  );
  const eventsRight = fixtureData?.response[0]?.events?.filter(event =>
    (event?.type === 'Goal' || event?.type === 'Card') && event?.team?.id === teamRight?.team?.id
  );

  const getEventIcon = (eventType, detail) => {
    if (eventType === 'Goal') return goalIcon;
    if (eventType === 'Card') {
      if (detail === 'Yellow Card') return yellowCardIcon;
      if (detail === 'Red Card') return redCardIcon;
    }
    return null;
  };

  return (
    <div>
      <div className="football-container">
        <img src={FieldImage} alt="Football Field" className="football-field" />
        <Team side="left" players={teamLeft?.startXI} name={teamLeft?.team?.name} />
        <Team side="right" players={teamRight?.startXI} name={teamRight?.team?.name} />
      </div>
      <div className='container w-full fs-md-6'>
        <div className='row dir align-items-center gap-5 gap-md-0'>
          <div className='col-md-6 col-12 text-center'>
            <h3 className='pt-2'>{teamRight?.team?.name}</h3>
            <div className='d-flex flex-row justify-content-around'>
              {eventsRight?.length > 0 ? (
                <div>
                  <h6>رویدادها</h6>
                  <table>
                    <tbody>
                      {eventsRight?.map((event, index) => (
                        <tr key={index}>
                          <td><img src={getEventIcon(event?.type, event?.detail)} alt={event?.type} style={{ width: '20px' }} /></td>
                          <td>{event?.time?.elapsed}'</td>
                          <td><Link to={`/player/${event?.player?.id}`} className="text-hover-primary text-gray-900">
                            {event?.player?.name}
                          </Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>چیزی برای نمایش وجود ندارد</div>
              )}
              {teamRight?.substitutes?.length > 0 ? (
                <div>
                  <table>
                    <tbody>
                      <tr><th colSpan="2">تعویضی‌ها</th></tr>
                      {teamRight?.substitutes?.map(player => (
                        <tr key={player?.player?.id}>
                          <td>{player?.player?.number}</td>
                          <td><Link to={`/player/${player?.player?.id}`} className="text-hover-primary text-gray-900">
                            {player?.player?.name}
                          </Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>چیزی برای نمایش وجود ندارد</div>
              )}
            </div>
          </div>
          <div className='col-md-6 col-12 text-center'>
            <h3>{teamLeft?.team?.name}</h3>
            <div className='d-flex flex-row justify-content-around'>
              {eventsLeft?.length > 0 ? (
                <div>
                  <h6>رویدادها</h6>
                  <table>
                    <tbody>
                      {eventsLeft?.map((event, index) => (
                        <tr key={index}>
                          <td><img src={getEventIcon(event?.type, event?.detail)} alt={event?.type} style={{ width: '20px' }} /></td>
                          <td>{event.time.elapsed}'</td>
                          <td><Link to={`/player/${event?.player?.id}`} className="text-hover-primary text-gray-900">
                            {event?.player?.name}
                          </Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>چیزی برای نمایش وجود ندارد</div>
              )}
              {teamLeft?.substitutes?.length > 0 ? (
                <div>
                  <table>
                    <tbody>
                      <tr><th colSpan="2">تعویضی‌ها</th></tr>
                      {teamLeft?.substitutes?.map(player => (
                        <tr key={player?.player?.id}>
                          <td>{player?.player?.number}</td>
                          <td><Link to={`/player/${player?.player?.id}`} className="text-hover-primary text-gray-900">
                            {player?.player?.name}
                          </Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>چیزی برای نمایش وجود ندارد</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
