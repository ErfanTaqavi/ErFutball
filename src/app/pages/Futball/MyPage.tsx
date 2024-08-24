import { Calendar } from "react-modern-calendar-datepicker";
import { utils } from 'react-modern-calendar-datepicker';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { TablesWidget11 } from "../../../_metronic/partials/widgets";
import { useState, useEffect } from "react";
import "./Main.css";
import { useQuery } from "react-query";
import jalaali from "jalaali-js";
import { LeaguesShow } from '../../../_metronic/layout/components/aside/LeaguesShow';

const leagues = [
  { id: 4, name: "Euro Championship" },
  { id: 2, name: "UEFA Champions League" },
  {id: 17, name: "AFC Champions League"},
  { id: 39, name: "Premier League" },
  { id: 140, name: "La Liga" },
  { id: 78, name: "Bundesliga" },
  { id: 135, name: "Serie A" },
  { id: 61, name: "Ligue 1" },
  {id: 143, name: "Copa del Rey"},
  {id: 529, name: "Super Cup"},
  {id: 45, name: "FA Cup"},
  {id: 94, name: "Primeira Liga"},
  { id: 290, name: "Persian Gulf Pro League" },
  {id: 495, name: "Hazfi Cup"},
  {id: 291, name: "Azadegan League"},
];

const fetchFixtures = async (date) => {
  const formattedDate = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;
  const response = await fetch(`https://v3.football.api-sports.io/fixtures/?season=${date.year}&&date=${formattedDate}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "8c62bbad82bf14e61d07baaa6574b378"
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const MyPage = () => {
  const gregorianToday = utils('en').getToday(); // { year: 2024, month: 8, day: 17 }
  const persianToday = utils('fa').getToday(); // { year: 1403, month: 5, day: 27 }

  const [selectedDay, setSelectedDay] = useState(persianToday);
  const [gregorianDate, setGregorianDate] = useState(gregorianToday);

  useEffect(() => {
    const jj = jalaali.toGregorian(selectedDay.year, selectedDay.month, selectedDay.day);
    setGregorianDate({
      year: jj.gy,
      month: jj.gm,
      day: jj.gd,
    });
  }, [selectedDay]);

  const query = useQuery(['fixturesData', gregorianDate], () => fetchFixtures(gregorianDate), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,  // غیرفعال کردن ریفچ خودکار هنگام فوکوس مجدد بر روی پنجره
    refetchInterval: false,       // غیرفعال کردن ریفچ خودکار بر اساس زمان
    staleTime: 3600000,           // تنظیم زمان انقضای کش به یک ساعت (3600000 میلی‌ثانیه)
  });

  const { data, error, isLoading } = query;

  // Grouping data by league
  const groupByLeague = (fixtures) => {
    const filteredLeagues = new Set(leagues.map(league => league.id)); // ایجاد Set از ID‌های لیگ‌های مورد نظر

    const grouped = fixtures.reduce((acc, fixture) => {
      const leagueId = fixture.league.id;
      if (filteredLeagues.has(leagueId)) { // بررسی اینکه آیا لیگ در لیست فیلتر شده است
        if (!acc[leagueId]) {
          acc[leagueId] = {
            league: fixture.league,
            matches: []
          };
        }
        acc[leagueId].matches.push(fixture);
      }
      return acc;
    }, {});

    return Object.values(grouped).sort((a, b) => a.league.name.localeCompare(b.league.name));
  };

  const groupedFixtures = data ? groupByLeague(data.response) : [];
  const noMatchesFound = !data || groupedFixtures.length === 0;

  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-around ">
        <div className="col-md-3 order-2 order-md-0"><LeaguesShow /></div>

        <div className="col-md-5 me-lg-8 order-1 ">
          {isLoading ? (
            <div className="loading-container">
              <img src="/media/logos/img2.png" alt="logo" className="loading-logo" />
              <p className="loading-text dir">در حال بارگزاری...</p>
            </div>
          ) : error ? (
            <div className="dir text-center">خطایی در بارگزاری اطلاعات رخ داده است ...</div>
          ) : noMatchesFound ? (
            <div className="dir text-center">مسابقه‌ای در این تاریخ یافت نشد</div>
          ) : (
            groupedFixtures.map((group, index) => (
              <div key={index}>
                <TablesWidget11 className="mb-10" data={{ response: group.matches }} />
              </div>
            ))
          )}
        </div>
        <div className="col-md-3 order-0 order-md-3 ">
          <div className="d-flex flex-column align-items-center ">
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              calendarClassName="responsive-calendar"
              shouldHighlightWeekends
              locale={"fa"}
            />
          </div>
          <div>
            <div>
              {/* <TablesWidget1 className="mt-8" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
