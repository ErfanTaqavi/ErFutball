import React from 'react'

type Props = {
  className: string
  fixtureData: any 
}

const translateStatType = (type: string) => {
  switch (type) {
    case "Shots on Goal": return "شوت در چارچوب";
    case "Shots off Goal": return "شوت خارج از چارچوب";
    case "Total Shots": return "تعداد شوت";
    case "Blocked Shots": return "شوت بلاک شده";
    case "Shots insidebox": return "شوت داخل محوطه";
    case "Shots outsidebox": return "شوت خارج محوطه";
    case "Fouls": return "خطا";
    case "Corner Kicks": return "کرنر";
    case "Offsides": return "آفساید";
    case "Ball Possession": return "مالکیت توپ";
    case "Yellow Cards": return "کارت زرد";
    case "Red Cards": return "کارت قرمز";
    case "Goalkeeper Saves": return "مهار دروازه‌بان";
    case "Total passes": return "تعداد پاس";
    case "Passes accurate": return "پاس صحیح";
    case "Passes %": return "درصد پاس صحیح";
    case "expected_goals": return "گل‌های مورد انتظار";
    case "goals_prevented": return "گل‌های جلوگیری شده";
    default: return type;
  }
}

const TablesWidget14: React.FC<Props> = ({ className, fixtureData }) => {
  const team1 = fixtureData.response[0]?.statistics[0];
  const team2 = fixtureData.response[0]?.statistics[1];

  // بررسی اینکه آیا داده‌های آماری برای نمایش وجود دارد
  if (!team1 || !team2 || team1.statistics.length === 0 || team2.statistics.length === 0) {
    return null;
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 d-flex justify-content-center text-center'>
        <h3 className='card-title card-label fw-bold fs-3 mb-1 align-items-center flex-column text-center '>
          آمار
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3 px-5 px-lg-7'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold'>
                <th className='ps-4 w-2/5'>{team1?.team?.name}</th>
                <th className='w-1/5 text-center'>وضعیت بازی</th>
                <th className='pe-4 w-2/5 d-flex justify-content-end'>{team2?.team?.name}</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {team1?.statistics?.map((stat: any, index: number) => {
                const team2Stat = team2?.statistics?.find((s: any) => s.type === stat.type);
                const statTypeInPersian = translateStatType(stat.type);

                return (
                  <tr key={index}>
                    <td className='px-4'>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-gray-900 fw-bold  mb-1 fs-7'>
                            {stat.value !== null ? stat.value : '0'}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className='text-gray-900 text-center fw-bold  d-block mb-1 fs-6 px-1 '>
                        {statTypeInPersian}
                      </span>
                    </td>
                    <td className='px-4'>
                      <div className='d-flex justify-content-end align-items-center'>
                        <div className='d-flex justify-content-end flex-column'>
                          <span className='text-gray-900 fw-bold  mb-1 fs-7'>
                            {team2Stat ? (team2Stat.value !== null ? team2Stat.value : '0') : '0'}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export { TablesWidget14 }
