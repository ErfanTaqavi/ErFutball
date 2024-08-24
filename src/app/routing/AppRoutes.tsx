import { FC, Suspense } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { App } from '../App'
import MyPage from '../pages/Futball/MyPage'
import StandingPage  from '../pages/dashboard/StandingPage'
import Playerpage from '../pages/Futball/player'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import ProfilePage from '../modules/profile/ProfilePage'
const { BASE_URL } = import.meta.env
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import TopBarProgress from 'react-topbar-progress-indicator'
import AccountPage from '../modules/accounts/AccountPage'

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}
const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<MyPage />} />
          <Route path="/standing/:id" element={<StandingPage />} />
          <Route path="/player" element={<Playerpage />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route
            path="/profile/:id/*"
            element={
              <SuspensedView>
                <ProfilePage />
              </SuspensedView>
            }
          />
          <Route path="/error/404" element={<p>not found page</p>} />
          <Route path="*" element={<Navigate to="/error/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
