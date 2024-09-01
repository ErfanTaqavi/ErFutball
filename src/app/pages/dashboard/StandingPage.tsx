import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TablesWidget9, TablesWidget11 } from "../../../_metronic/partials/widgets";

const fetchStandings = async (leagueId: number) => {
  const response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueId}&season=2024`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '8c62bbad82bf14e61d07baaa6574b378'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};


const fetchFixtures = async (from: string, to: string, leagueId: number) => {
  const response = await fetch(`https://v3.football.api-sports.io/fixtures/?from=${from}&to=${to}&season=2024&league=${leagueId}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '8c62bbad82bf14e61d07baaa6574b378'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const StandingPage = () => {
  const { id } = useParams<{ id: string }>();
  const leagueId = parseInt(id, 10);

  // محاسبه تاریخ سه روز قبل و سه روز بعد از امروز
  const today = new Date();
  const fromDate = new Date(today);
  fromDate.setDate(today.getDate() - 3); 
  const toDate = new Date(today);
  toDate.setDate(today.getDate() + 3); 

  const from = fromDate.toISOString().split('T')[0];
  const to = toDate.toISOString().split('T')[0];

  // دریافت داده‌های استندینگ‌ها
  const { data: standingsData, error: standingsError, isLoading: standingsLoading } = useQuery(
    ['standings', leagueId], 
    () => fetchStandings(leagueId), 
    {
      enabled: !isNaN(leagueId),
      keepPreviousData: true,
      staleTime: 86400 * 1000, 
      refetchOnWindowFocus: false, 
    }
  );

  // دریافت داده‌های بازی‌های هفته جاری
  const { data: fixturesData, error: fixturesError, isLoading: fixturesLoading } = useQuery(
    ['fixtures', from, to, leagueId], 
    () => fetchFixtures(from, to, leagueId), 
    {
      enabled: !isNaN(leagueId),
      keepPreviousData: true,
      staleTime: 86400 * 1000, 
      refetchOnWindowFocus: false, 
    }
  );

  if (fixturesLoading || standingsLoading) {
    return (
      <div className="loading-container">
        <img src="/media/logos/img2.png" alt="logo" className="loading-logo" />
        <p className="loading-text dir">در حال بارگزاری...</p>
      </div>
    );
  }

  if (fixturesError || standingsError) {
    return (
      <div className="dir text-center">
        خطایی در بارگزاری اطلاعات رخ داده است ...
      </div>
    );
  }

  // استخراج اطلاعات لیگ و استندینگ‌ها
  const leagueInfo = standingsData?.response?.[0]?.league || {};
  const standings = standingsData?.response?.[0]?.league.standings?.[0] || [];
  const fixtures = fixturesData || [];  

  return (
    <>
      {/* begin::Row */}
      <div className="row gy-5 g-xl-8">
        {/* begin::Col */}
        <div className="col-xxl-4 order-1 order-xxl-0">
          {/* ارسال داده‌های بازی‌ها به TablesWidget11 */}
          <h3 className='dir fw-bold  p-2 m-2 '> بازی های این هفته :</h3>
          <TablesWidget11 className="card-xxl-stretch mb-5 mb-xl-8" data={fixtures} />
        </div>
        {/* end::Col */}
        {/* begin::Col */}
        <div className="col-xxl-8 dir">
          {standingsLoading ? (
            <div className="loading-container">
              <img src="/media/logos/img2.png" alt="logo" className="loading-logo" />
              <p className="loading-text dir">در حال بارگزاری...</p>
            </div>
          ): standingsError ? (
            <div className="dir text-center">خطایی در بارگزاری اطلاعات رخ داده است ...</div>
          ): ( <TablesWidget9 
          className="card-xxl-stretch mb-5 mb-xl-8" 
          data={standings} 
          leagueName={leagueInfo.name || 'Unknown League'} 
          leagueLogo={leagueInfo.logo || 'default-logo-url'} 
          leagueCountry={leagueInfo.country || 'Unknown Country'} 
        />)
        }
         
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  );
};

export default StandingPage;


// const fetchStandings = async (leagueId: number) => {

//   const standingsResponse = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueId}&season=2024`, {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//       'x-rapidapi-key': '8c62bbad82bf14e61d07baaa6574b378'
//     }
//   });

//   if (!standingsResponse.ok) {
//     throw new Error('Network response was not ok for standings');
//   }

//   const standingsData = await standingsResponse.json();
//   // ارسال داده‌ها به API ترجمه
//   const translationResponse = await fetch('https://movie.rashx.ir/api/v1/new-translate/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(standingsData)
//   });

//   if (!translationResponse.ok) {
//     throw new Error('Failed to translate response');
//   }
 

//   return translationResponse.json();
// };


// const fetchFixtures = async (from: string, to: string, leagueId: number) => {
//   const response = await fetch(`https://v3.football.api-sports.io/fixtures/?from=${from}&to=${to}&season=2024&league=${leagueId}`, {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//       'x-rapidapi-key': '8c62bbad82bf14e61d07baaa6574b378'
//     }
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const leagueData = await response.json();
//   // ارسال داده‌ها به API ترجمه
//   const translationResponse = await fetch('https://movie.rashx.ir/api/v1/new-translate/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(leagueData)
//   });

//   if (!translationResponse.ok) {
//     throw new Error('Failed to translate response');
//   }
 

//   return translationResponse.json();
// };