import React from 'react';

type Team = {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  home: {
    played: number | null;
    win: number | null;
    draw: number | null;
    lose: number | null;
    goals: {
      for: number | null;
      against: number | null;
    };
  };
  away: {
    played: number | null;
    win: number | null;
    draw: number | null;
    lose: number | null;
    goals: {
      for: number | null;
      against: number | null;
    };
  };
  update: string;
};

type Props = {
  className: string;
  data: Team[];
  leagueName: string;
  leagueLogo: string;
};

const TablesWidget9: React.FC<Props> = ({ className, data, leagueName, leagueLogo ,leagueCountry}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <div className='card-header border-0 pt-2'>
        <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1 me-0'>{leagueName}</span>
            <span className='text-muted mt-1 fw-semibold fs-7'>{leagueCountry}</span> 
          </h3>
        </div>
        <div className="symbol symbol-40px symbol-lg-70px symbol-fixed m-2 p-2">
          <img src={leagueLogo} alt="league logo" />
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3 px-0 px-sm-5'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-10px'>Rank</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Team</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Played</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Win</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Draw</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Lose</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Goals For</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Goals Against</th>
                <th className='p-0 py-sm-3 px-sm-2 text-center'>Points</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((team) => (
                  <tr key={team.team.id}>
                    <td>{team.rank}</td>
                    <td className='p-1 py-sm-4 px-sm-2'>
                      <div className='d-flex align-items-center gap-1 gap-sm-2'>
                        <div className='symbol symbol-25px symbol-sm-45px'>
                          <img src={team.team.logo} alt={team.team.name} />
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-gray-900 fw-bold text-hover-primary fs-6'>
                            {team.team.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.all.played}</td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.all.win}</td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.all.draw}</td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.all.lose}</td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.all.goals.for}</td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.all.goals.against}</td>
                    <td className='text-center p-0 py-sm-3 px-sm-2'>{team.points}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className='text-center'>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { TablesWidget9 };
