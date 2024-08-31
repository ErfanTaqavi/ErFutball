import React from 'react';
import { TablesWidget9 } from '../../../../../src/_metronic/partials/widgets/tables/TablesWidget9';

export function Campaigns({ leagueData }) {
  // استخراج داده‌های لیگ و تیم‌ها
  const league = leagueData?.response?.[0]?.league || {};
  const standings = league?.standings[0] || []; 
  const leagueName = league?.name || '';
  const leagueLogo = league?.logo || '';
  const leagueCountry = league?.country || '';

  return (
    <div className='d-flex flex-column mb-6 dir'>
      <TablesWidget9 
        className='' 
        data={standings} 
        leagueName={leagueName} 
        leagueLogo={leagueLogo}
        leagueCountry={leagueCountry} 
      />
    </div>
  );
}
