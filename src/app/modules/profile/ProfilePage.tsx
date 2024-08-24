import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../_metronic/layout/core';
import { Overview } from './components/Overview';
import { Projects } from './components/Projects';
import { Campaigns } from './components/Campaigns';
import { ProfileHeader } from './ProfileHeader';
import { useQuery } from 'react-query';

// مسیر نان‌خرده‌ای‌ها (Breadcrumbs) برای صفحه پروفایل
const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
];

// تابعی برای دریافت داده‌های بازی از API
const fetchFixtureData = async (id: string) => {
  const response = await fetch(`https://v3.football.api-sports.io/fixtures?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "8c62bbad82bf14e61d07baaa6574b378" // اینجا باید کلید API خود را وارد کنید
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

// تابعی برای دریافت داده‌های ترکیب تیم‌ها از API
const fetchLineups = async (fixtureId: number) => {
  const response = await fetch(
    `https://v3.football.api-sports.io/fixtures/lineups?fixture=${fixtureId}`,
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
  return response.json();
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: fixtureData, error: fixtureError, isLoading: fixtureLoading } = useQuery(['fixtureData', id], () => fetchFixtureData(id!), {
    enabled: !!id,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: 3600000,
  });

  const fixtureId = fixtureData?.response[0]?.fixture?.id;

  const { data: lineupsData, error: lineupsError, isLoading: lineupsLoading } = useQuery(
    ['lineups', fixtureId],
    () => fetchLineups(fixtureId!),
    {
      enabled: !!fixtureId,
      keepPreviousData: true,
      staleTime: 86400 * 1000, // داده‌ها تا یک روز تازه می‌مانند
      refetchOnWindowFocus: false,
    }
  );

  if (fixtureLoading || lineupsLoading) {
    return (
      <div className="loading-container">
        <p className="loading-text dir">در حال بارگزاری...</p>
      </div>
    );
  }

  if (fixtureError || lineupsError) {
    return <div className="dir text-center">خطایی در بارگزاری اطلاعات رخ داده است ...</div>;
  }

  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader fixtureData={fixtureData} lineupsData={lineupsData} />
            <Outlet context={{ fixtureData, lineupsData }} />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              <Overview fixtureData={fixtureData} lineupsData={lineupsData} />
            </>
          }
        />
        <Route
          path='projects'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
              <Projects fixtureData={fixtureData} lineupsData={lineupsData} />
            </>
          }
        />
        <Route
          path='campaigns'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
              <Campaigns fixtureData={fixtureData} lineupsData={lineupsData} />
            </>
          }
        />
        <Route index element={<Navigate to={`/profile/${id}/overview`} />} />
      </Route>
    </Routes>
  );
};

export default ProfilePage;
