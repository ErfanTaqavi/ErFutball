
import {FC} from 'react'
import {KTIcon} from '../../../../helpers'
import {AuthorsTab} from './AuthorsTab'
import {MenuTab} from './MenuTab'
import {NotificationsTab} from './NotificationsTab'
import {ProjectsTab} from './ProjectsTab'
import {SubscriptionsTab} from './SubscriptionsTab'
import {TasksTab} from './TasksTab'

type Props = {
  link: string
}

const SelectedTab: FC<Props> = ({link}) => {
  switch (link) {
    case 'projects':
      return <ProjectsTab />
    case 'menu':
      return <MenuTab />
    case 'subscription':
      return <SubscriptionsTab />
    case 'tasks':
      return <TasksTab />
    case 'notifications':
      return <NotificationsTab />
    case 'authors':
      return <AuthorsTab />
    default:
      return <ProjectsTab />
  }
}

const TabsBase: FC<Props> = ({link}) => {
  return (
    <div className='d-flex h-100 flex-column'>
      {/* begin::Wrapper */}
      <div
        className='flex-column-fluid hover-scroll-y'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-wrappers='#kt_aside_wordspace'
        data-kt-scroll-dependencies='#kt_aside_secondary_footer'
        data-kt-scroll-offset='0px'
      >
        {/* begin::Tab content */}
        <div className='tab-content'>
          <div
            className='tab-pane fade active show'
            id={`kt_aside_nav_tab_${link}`}
            role='tabpanel'
          >
            <SelectedTab link={link} />
          </div>
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Wrapper */}
      
    </div>
  )
}

export {TabsBase}
