import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { HeaderWrapper } from './components/header/HeaderWrapper'
import { Content } from './components/Content'
import { PageDataProvider } from './core'
import { MenuComponent } from '../assets/ts/components'
import '../../app/pages/Futball/Main.css';
const MasterLayout = () => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        {/* begin::Page */}
        
          {/* begin::Wrapper */}
          <div className='wrapper d-flex flex-column flex-row-fluid ' id='kt_wrapper'>
            <HeaderWrapper />

            {/* begin::Content */}
            <div id='kt_content' className='content d-flex flex-column flex-column-fluid custom-laptop-width'>
              <Content>
                <Outlet />
              </Content>
            </div>
            {/* end::Content */}
            <Footer />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Page */}
     

    </PageDataProvider>
  )
}

export { MasterLayout }
