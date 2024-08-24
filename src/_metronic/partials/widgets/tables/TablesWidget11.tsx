import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  className: string;
  data: any;
}

const TablesWidget11: React.FC<Props> = ({ className, data }) => {
  const navigate = useNavigate();

  // تبدیل اعداد انگلیسی به فارسی
  const convertToPersianNumbers = (num: number | string) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
  };

  // تبدیل زمان به فرمت فارسی
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
  };

  // محاسبه زمان باقی‌مانده به صورت فارسی
  const formatTimeRemaining = (startTime: string) => {
    const currentTime = new Date().getTime();
    const gameTime = new Date(startTime).getTime();
    const timeDiff = gameTime - currentTime;

    if (timeDiff <= 0) {
      return "در حال شروع";
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${convertToPersianNumbers(hours)} ساعت و ${convertToPersianNumbers(minutes)} دقیقه`;
  };

  const handleRowClick = (fixtureId: number) => {
    navigate(`/profile/${fixtureId}/overview`);
  };

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 d-flex justify-content-between align-items-center pe-2'>
        <div className='d-flex align-items-center'>
          {data?.response[0]?.league?.logo && (
            <img
              src={data?.response[0]?.league?.logo}
              alt={data?.response[0]?.league?.name}
              className='me-3'
              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
            />
          )}
        </div>
        <div>
          <h3 className='card-title align-items-start flex-column justify-content-end text-end'>
            <span className='card-label fw-bold fs-3 mb-1'>{data?.response[0]?.league?.name}</span>
            <span className='text-muted mt-1 fw-semibold fs-7 ps-4'>{data?.response[0]?.league?.country}</span>
          </h3>
        </div>
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
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 w-2/5 rounded-start'>میزبان</th>
                <th className='w-1/5 text-center'>نتیجه</th>
                <th className='pe-4 w-2/5 rounded-start d-flex justify-content-end'>مهمان</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data?.response?.map((item: any, index: number) => (
                <tr 
                  key={index}
                  onClick={() => handleRowClick(item?.fixture?.id)}
                  className="cursor-pointer"
                  style={{ cursor: 'pointer' }} // اضافه کردن استایل برای نشان دادن اینکه سطر قابل کلیک است
                >
                  <td className='pe-0'>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-40px symbol-lg-50px me-3'>
                        <img
                          src={item?.teams?.home?.logo}
                          className=''
                          alt={item?.teams?.home?.name}
                        />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
                          {item?.teams?.home?.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1'>
                      {item?.fixture?.status?.short === 'NS' ? (
                        formatDateTime(item?.fixture?.date)
                      ) : (
                        `${convertToPersianNumbers(item?.goals?.home)} : ${convertToPersianNumbers(item?.goals?.away)}`
                      )}
                    </span>
                  </td>
                  <td className='ps-0'>
                    <div className='d-flex justify-content-end align-items-center'>
                      <div className='d-flex flex-column'>
                        <span className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 text-end'>
                          {item?.teams?.away?.name}
                        </span>
                      </div>
                      <div className='symbol symbol-40px symbol-lg-50px ms-2'>
                        <img
                          src={item?.teams?.away?.logo}
                          className=''
                          alt={item?.teams?.away?.name}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { TablesWidget11 };
