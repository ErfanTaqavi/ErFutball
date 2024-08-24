import React from 'react';
import { TablesWidget3, TablesWidget14 } from '../../../../_metronic/partials/widgets';

interface OverviewProps {
  fixtureData: any;
  lineupsData: any;
}

export function Overview({ fixtureData, lineupsData }: OverviewProps) {
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-12'>
        <TablesWidget3 className='mb-5 mb-xxl-8' fixtureData={fixtureData} />
        <TablesWidget14 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  );
}
