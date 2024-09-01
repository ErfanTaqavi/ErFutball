import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Overview } from "./components/Overview";
import { AccountHeader } from "./AccountHeader";

const fetchTeamData = async (teamId: string) => {
  const response = await fetch(
    `https://v3.football.api-sports.io/players/squads?team=${teamId}`,
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
const fetchTeamInfo = async (teamId: string) => {
  const response = await fetch(
    `https://v3.football.api-sports.io/teams?id=${teamId}`,
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

const AccountPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: teamData,
    error: teamDataError,
    isLoading: teamDataIsLoading,
  } = useQuery(["teamData", id], () => fetchTeamData(id!), {
    enabled: !!id,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: 3600000,
  });
  const {
    data: InfoData,
    error: infoError,
    isLoading: infoIsLoading,
  } = useQuery(["teamInfo", id], () => fetchTeamInfo(id!), {
    enabled: !!id,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: 3600000,
  });
  if (teamDataIsLoading || infoIsLoading) {
    return (
      <div className="loading-container">
        <img src="/media/logos/img2.png" alt="logo" className="loading-logo" />
        <p className="loading-text dir">در حال بارگزاری...</p>
      </div>
    );
  }

  if (teamDataError || infoError) {
    return (
      <div className="dir text-center">
        خطایی در بارگزاری اطلاعات رخ داده است ...
      </div>
    );
  }
  const team = teamData?.response[0]?.team;
  if (!team) return <div>No team data available</div>;
  const teamInfo = InfoData?.response[0]?.team;
  const teamInfoVenue = InfoData?.response[0]?.venue;

  return (
    <>
      <AccountHeader
        teamName={teamInfo.name}
        teamLogo={teamInfo.logo}
        foundingYear={teamInfo.founded}
        country={teamInfo.country}
        stadium={teamInfoVenue.name}
        city={teamInfoVenue.city}
        stadiumCapacity={teamInfoVenue.capacity}
      />
      <Overview teamData={teamData} />
    </>
  );
};

export default AccountPage;
