import React from "react";
import { useLocation } from "react-router-dom";
import ball from "../../../../public/media/logos/ball.svg";
import redcard from "../../../../public/media/logos/redcard.png";
import yellowcard from "../../../../public/media/logos/yellowcard.png";
import { Link } from "react-router-dom";

// تبدیل اعداد انگلیسی به فارسی
const convertToPersianNumbers = (num: number | string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

// تبدیل تاریخ و زمان به فرمت فارسی
const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  return new Intl.DateTimeFormat("fa-IR", options).format(date);
};

// تابع برای محاسبه زمان باقی‌مانده به صورت فارسی
const formatTimeRemaining = (startTime: string) => {
  const currentTime = new Date().getTime();
  const gameTime = new Date(startTime).getTime();
  const timeDiff = gameTime - currentTime;

  if (timeDiff <= 0) {
    return "در حال شروع";
  }

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return `${convertToPersianNumbers(hours)} ساعت و ${convertToPersianNumbers(
    minutes
  )} دقیقه`;
};

interface ProfileHeaderProps {
  fixtureData?: any;
  lineupsData?: any;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ fixtureData, lineupsData }) => {
  const location = useLocation();
  const fixtureId = fixtureData?.response[0]?.fixture?.id;

  if (!fixtureData || !fixtureData.response || fixtureData.response.length === 0) {
    return <div>No data available</div>;
  }

  const fixture = fixtureData.response[0].fixture;
  const homeTeam = fixtureData.response[0].teams.home;
  const awayTeam = fixtureData.response[0].teams.away;

  const homeLineup = lineupsData?.response.find(
    (lineup: any) => lineup.team.id === homeTeam.id
  );
  const awayLineup = lineupsData?.response.find(
    (lineup: any) => lineup.team.id === awayTeam.id
  );

  const homeCoach = homeLineup?.coach?.name || "نامعلوم";
  const awayCoach = awayLineup?.coach?.name || "نامعلوم";
  const homeFormation = homeLineup?.formation || "نامعلوم";
  const awayFormation = awayLineup?.formation || "نامعلوم";

  const homeScore = fixture.score?.fulltime?.home || 0;
  const awayScore = fixture.score?.fulltime?.away || 0;
  const matchDate = new Date(fixture.date);
  const matchDateString = formatDateTime(fixture.date);
  const isMatchPlayed = fixture.status?.short !== "NS";
  const timeRemaining = formatTimeRemaining(fixture.date);

  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-body pt-9 pb-0 px-4">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3 justify-content-around">
            <div>
              <div className="mb-4 d-flex justify-content-center align-items-center">
                <div className="symbol symbol-50px symbol-lg-100px symbol-fixed">
                  <img
                    src={homeTeam.logo || "/media/avatars/300-23.jpg"}
                    alt={homeTeam.name}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column align-items-center mb-2 justify-content-center">
                    <a
                      href="#"
                      className="text-gray-900 text-hover-primary fs-lg-2 fw-bolder me-1 fs-7"
                    >
                      {homeTeam.name}
                    </a>
                    <div>
                      <p className="text-gray-500 mb-0">میزبان</p>
                    </div>
                    <div className="d-flex flex-row align-items-center dir text-gray-700">
                      <span
                        style={{ fontFamily: "peyda-bold" }}
                        className="fs-7 fs-lg-5"
                      >
                        سرمربی:
                      </span>
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-medium" }}
                      >
                        {" "}
                        {homeCoach}
                      </span>
                    </div>
                    <div className="d-flex flex-row align-items-center dir text-gray-700 mt-2">
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-bold" }}
                      >
                        ترکیب:
                      </span>
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-medium" }}
                      >
                        {homeFormation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="align-items-center d-flex justify-content-center">
              <div className="d-flex flex-wrap flex-stack">
                <div className="d-flex flex-column flex-grow-1">
                  <div className="d-flex flex-wrap justify-content-center">
                    {isMatchPlayed ? (
                      <>
                        <div className="py-3 px-4 align-content-center">
                          <div className="d-flex align-content-center justify-content-center">
                            <div className="fs-lg-2 fw-bolder fs-5">
                              {awayScore}
                            </div>
                          </div>
                        </div>
                        <div className="py-3 px-4 fw-bolder fs-5 fs-lg-2">
                          <span>:</span>
                        </div>
                        <div className="py-3 px-4 align-content-center">
                          <div className="d-flex align-content-center justify-content-center">
                            <div className="fs-lg-2 fw-bolder fs-5">
                              {homeScore}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="d-flex flex-column align-content-center justify-content-center">
                        <div className="fs-lg-2 fw-bolder fs-5 text-center">
                          {matchDateString}
                        </div>
                        <div className="fs-lg-2 fw-bolder fs-5">
                          {/* نمایش پیام در صورت عدم وجود اطلاعات لاین آپ */}
                          {!homeLineup && !awayLineup && !isMatchPlayed && (
                            <div className="text-center text-danger mt-4">
                              هنوز اطلاعات بازی در دسترس نیست
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="mb-4">
                  <div className="symbol symbol-50px symbol-lg-100px symbol-fixed">
                    <img
                      src={awayTeam.logo || "/media/avatars/300-23.jpg"}
                      alt={awayTeam.name}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column align-items-center mb-2 justify-content-center">
                    <a
                      href="#"
                      className="text-gray-900 text-hover-primary fs-lg-2 fw-bolder me-1 fs-7"
                    >
                      {awayTeam.name}
                    </a>
                    <div>
                      <p className="text-gray-500 mb-0">میهمان</p>
                    </div>
                    <div className="d-flex flex-row align-items-center dir text-gray-700">
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-bold" }}
                      >
                        سرمربی:
                      </span>
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-medium" }}
                      >
                        {awayCoach}
                      </span>
                    </div>
                    <div className="d-flex flex-row align-items-center dir text-gray-700 mt-2">
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-bold" }}
                      >
                        ترکیب:
                      </span>
                      <span
                        className="fs-7 fs-lg-5"
                        style={{ fontFamily: "peyda-medium" }}
                      >
                        {awayFormation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex overflow-auto h-55px justify-content-center mt-5  dir  ">
            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap  gap-5  pe-0 ">
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary  ` +
                    (location.pathname === `/profile/${fixtureId}/overview` &&
                      "active")
                  }
                  to={`/profile/${fixtureId}/overview`}
                >
                  اطلاعات و آمار
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary ` +
                    (location.pathname === `/profile/${fixtureId}/projects` &&
                      "active")
                  }
                  to={`/profile/${fixtureId}/projects`}
                >
                  ترکیب
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary  ` +
                    (location.pathname === `/profile/${fixtureId}/campaigns` &&
                      "active")
                  }
                  to={`/profile/${fixtureId}/campaigns`}
                >
                  جدول
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfileHeader };
