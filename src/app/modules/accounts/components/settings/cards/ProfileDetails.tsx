import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const fetchPlayerData = async (id: string) => {
  const response = await fetch(
    `https://v3.football.api-sports.io/players?id=${id}&season=2024`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8c62bbad82bf14e61d07baaa6574b378", 
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.response[0];
};

const ProfileDetails: React.FC = () => {
  // دریافت پارامتر ID از URL
  const { id } = useParams<{ id: string }>();

  // استفاده از useQuery برای بارگذاری داده‌ها
  const { data, error, isLoading } = useQuery(
    ["playerData", id],
    () => fetchPlayerData(id),
    {
      enabled: !!id,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      staleTime: 3600000,
    }
  );

  if (isLoading ) {
    return (
      <div className="loading-container">
        <img src="/media/logos/img2.png" alt="logo" className="loading-logo" />
        <p className="loading-text dir">در حال بارگزاری...</p>
      </div>
    );
  }

  if (error ) {
    return (
      <div className="dir text-center">
        خطایی در بارگزاری اطلاعات رخ داده است ...
      </div>
    );
  }
  const player = data?.player;
  const statistics = data?.statistics[0];

  const formatRating = (rating: string) => {
    const numRating = parseFloat(rating);
    return numRating.toFixed(2);
  };

  return (
    <div className="card mb-5 mb-xl-10 dir ">
      <div className=" ">
        {/* Header */}
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="card-header border-0 pt-2">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-3 mb-1 me-0">
                {player?.name}
              </span>
              <span className="text-muted mt-1 fw-semibold fs-7">
                {player?.nationality}
              </span>
            </h3>
          </div>
          <div className="symbol symbol-40px symbol-sm-70px symbol-fixed m-2 p-2 ms-5 ">
            <img src={player?.photo} alt="player photo" />
          </div>
        </div>

        <div id="kt_account_profile_details" className="collapse show">
          <form noValidate className="form">
            <div className="card-body border-top p-9">
              <div className="row mb-2 justify-content-around bg-secondary rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6">نام </div>
                <div className="col-5 col-form-label fw-bold fs-md-6 fs-7 text-center">
                  {player?.firstname} {player?.lastname}
                </div>
              </div>
              <div className="row mb-2 justify-content-around rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6"> سن </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {player?.age}
                </div>
              </div>

              <div className="row mb-2 justify-content-around bg-secondary rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6">ملیت </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {player?.nationality || "نامعلوم"}
                </div>
              </div>

              <div className="row mb-2 justify-content-around rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6">قد </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {player?.height || "نامعلوم"}
                </div>
              </div>

              <div className="row mb-2 justify-content-around bg-secondary rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6">وزن </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {player?.weight || "نامعلوم"}
                </div>
              </div>

              <div className="row mb-2 justify-content-around rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6">
                  پست اصلی{" "}
                </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {statistics?.games.position}
                </div>
              </div>

              <div className="row mb-2 justify-content-around bg-secondary rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6 d-flex align-items-center  ">
                  تیم باشگاهی{" "}
                </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center ">
                  <Link  to={`/account/${statistics?.team.id}`}
                      className="text-gray-900 text-hover-primary">
                  {statistics?.team.name}
                  
                  <div className="symbol symbol-30px  symbol-fixed mx-2 px-2">
                    <img src={statistics?.team.logo} alt="player photo" />
                  </div>
                  </Link>
                </div>
              </div>
              <div className="row mb-2 justify-content-around rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6"> سن </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {player?.age}
                </div>
              </div>
              <div className="row mb-2 justify-content-around bg-secondary rounded-2 ">
                <div className="col-5 col-form-label fw-bold fs-6">امتیاز </div>
                <div className="col-5 col-form-label fw-bold fs-6 text-center">
                  {formatRating(statistics?.games.rating)}{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ProfileDetails };
