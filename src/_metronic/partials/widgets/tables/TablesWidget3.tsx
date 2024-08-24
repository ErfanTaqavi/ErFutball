import React from "react";

type Props = {
  className: string;
  fixtureData: any;
};

const TablesWidget3: React.FC<Props> = ({ className, fixtureData }) => {
  // بررسی وجود داده‌ها
  if (!fixtureData || !fixtureData.response || fixtureData.response.length === 0) {
    return <div>اطلاعات موجود نیست</div>;
  }

  // استخراج داده‌ها از fixtureData
  const fixture = fixtureData.response[0]?.fixture;
  const league = fixtureData.response[0]?.league;
  const referee = fixture?.referee || "نامشخص";
  const venue = fixture?.venue || { name: "نامشخص", city: "نامشخص" };

  // اطلاعات تورنمنت
  const tournament = league ? `${league.name}, ${league.country}` : "نامشخص";
  const season = league?.season ? `${league.season}` : "نامشخص";
  const stage = league?.round ? league.round : "نامشخص";
  
  // تاریخ و زمان شروع بازی
  const startDate = fixture ? new Date(fixture.date) : new Date();
  const formattedDate = startDate.toLocaleDateString("fa-IR");
  const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`;

  return (
    <div className={`card ${className} dir`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">اطلاعات مسابقه</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table align-middle gs-0 gy-3">
            {/* begin::Table head */}
            <thead>
              <tr>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-140px"></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                  >
                    تورنمنت
                  </a>
                </td>
                <td className="text-start text-muted fw-semibold">{tournament}</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                  >
                    فصل
                  </a>
                </td>
                <td className="text-start text-muted fw-semibold">{season}</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                  >
                    گروه/مرحله
                  </a>
                </td>
                <td className="text-start text-muted fw-semibold">{stage}</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                  >
                    شروع بازی
                  </a>
                </td>
                <td className="text-start text-muted fw-semibold">
                  {formattedDate} ساعت {startTime}
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                  >
                    داور بازی
                  </a>
                </td>
                <td className="text-start text-muted fw-semibold">{referee}</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                  >
                    محل برگزاری بازی
                  </a>
                </td>
                <td className="text-start text-muted fw-semibold">{`${venue.city}, ${venue.name}`}</td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { TablesWidget3 };
