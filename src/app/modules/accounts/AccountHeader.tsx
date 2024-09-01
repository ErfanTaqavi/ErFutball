import React from 'react';

type AccountHeaderProps = {
  teamName: string;
  teamLogo: string | null;  
  foundingYear: number;
  country: string;
  stadium: string;
  city: string;
  stadiumCapacity: number;
};

const AccountHeader: React.FC<AccountHeaderProps> = ({
  teamName,
  teamLogo,
  foundingYear,
  country,
  stadium,
  city,
  stadiumCapacity,
}) => {
  
  return (
    <div className='card mb-5 mb-xl-10 dir'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3 gap-3 flex-column flex-sm-row '>
        <div className='d-flex align-items-center mb-4 justify-content-center justify-content-sm-start' style={{ flex: '0 0 auto' }}>
            <div className='symbol symbol-70px symbol-lg-120px symbol-fixed position-relative'>
              <img src={teamLogo} alt='team logo' style={{  objectFit: 'contain' }} />
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2' style={{ fontFamily: 'peyda-bold ' }}>
                  <span className='text-gray-800 text-hover-primary fs-2 fw-bolder'>
                    {teamName}
                  </span>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-2 gap-5 flex-column '>
                  <div className='d-flex align-items-center text-gray-500 text-hover-primary'>
                    <span>{country}</span>
                  </div>
                  <div className='d-flex gap-1 align-items-center text-hover-primary'>
                    <span className='text-gray-500'>تاریخ تاسیس:</span>
                    <span className='text-gray-800'>{foundingYear}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex flex-column'>
              

              <div className='d-flex gap-sm-5 gap-2 flex-column flex-md-row mt-3' style={{ fontFamily: 'peyda-bold ' }}>
                <div className='d-flex gap-1 align-items-center text-gray-500 text-hover-primary mb-2'>
                  <span className='text-gray-500'>استادیوم:</span>
                  <span className='text-gray-700'>{stadium}</span>
                </div>
                <div className='d-flex gap-1 align-items-center text-gray-500 text-hover-primary mb-2'>
                  <span className='text-gray-500'>شهر:</span>
                  <span className='text-gray-700'>{city}</span>
                </div>
                <div className='d-flex gap-1 align-items-center text-gray-500 text-hover-primary mb-2'>
                  <span className='text-gray-500'>ظرفیت استادیوم:</span>
                  <span className='text-gray-700'>{stadiumCapacity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AccountHeader };
