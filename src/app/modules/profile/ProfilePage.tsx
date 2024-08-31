import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Overview } from "./components/Overview";
import { Projects } from "./components/Projects";
import { Campaigns } from "./components/Campaigns";
import { ProfileHeader } from "./ProfileHeader";
import { useQuery } from "react-query";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Profile",
    path: "/profile/overview",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const fetchFixtureData = async (id: string) => {
  const response = await fetch(
    `https://v3.football.api-sports.io/fixtures?id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8c62bbad82bf14e61d07baaa6574b378", // کلید API خود را وارد کنید
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const fetchLeagueData = async (leagueId: number, season: number) => {
  const response = await fetch(
    `https://v3.football.api-sports.io/standings?league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8c62bbad82bf14e61d07baaa6574b378", // کلید API خود را وارد کنید
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: fixtureData,
    error: fixtureError,
    isLoading: fixtureLoading,
  } = useQuery(["fixtureData", id], () => fetchFixtureData(id!), {
    enabled: !!id,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: 3600000,
  });
  console.log(fixtureData);
  const fixtureId = fixtureData?.response[0]?.fixture?.id;
  const leagueId = fixtureData?.response[0]?.league?.id;
  const season = fixtureData?.response[0]?.league?.season;

  const {
    data: leagueData,
    error: leagueError,
    isLoading: leagueLoading,
  } = useQuery(
    ["leagueData", leagueId, season],
    () => fetchLeagueData(leagueId!, season!),
    {
      enabled: !!leagueId && !!season,
      keepPreviousData: true,
      staleTime: 86400 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  if (fixtureLoading || leagueLoading) {
    return (
      <div className="loading-container">
        <img src="/media/logos/img2.png" alt="logo" className="loading-logo" />
        <p className="loading-text dir">در حال بارگزاری...</p>
      </div>
    );
  }

  if (fixtureError || leagueError) {
    return (
      <div className="dir text-center">
        خطایی در بارگزاری اطلاعات رخ داده است ...
      </div>
    );
  }

  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader fixtureData={fixtureData} />
            <Outlet context={{ fixtureData, leagueData }} />
          </>
        }
      >
        <Route
          path="overview"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              <Overview fixtureData={fixtureData} />
            </>
          }
        />
        <Route
          path="projects"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
              <Projects fixtureData={fixtureData} />
            </>
          }
        />
        <Route
          path="campaigns"
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
              <Campaigns fixtureData={fixtureData} leagueData={leagueData} />
            </>
          }
        />
        <Route index element={<Navigate to={`/profile/${id}/overview`} />} />
      </Route>
    </Routes>
  );
};

export default ProfilePage;
