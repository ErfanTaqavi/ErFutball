import { Link } from 'react-router-dom'
import { KTIcon, toAbsoluteUrl } from '../../../../helpers'
import { Dropdown1, Search } from '../../../../partials'
import { dir } from 'console';

const projects: ReadonlyArray<{ image: string; title: string; link: string }> = [
  {
    image: 'media/svg/brand-logos/bebo.svg',
    title: 'لیگ برتر ',
    link: 'ایران',
  },
  {
    image: 'media/svg/brand-logos/vimeo.svg',
    title: 'لالیگا اسپانیا',
    link: 'اسپانیا',
  },
  {
    image: 'media/svg/brand-logos/kickstarter.svg',
    title: 'لیگ برتر انگلیس',
    link: 'انگلیس',
  },
  {
    image: 'media/svg/brand-logos/balloon.svg',
    title: 'بوندسلیگا آلمان',
    link: 'آلمان',
  },
  {
    image: 'media/svg/brand-logos/infography.svg',
    title: 'لیگ قهرمانان اروپا',
    link: 'اروپا',
  },
  {
    image: 'media/svg/brand-logos/disqus.svg',
    title: 'سری آ ایتالیا',
    link: 'ایتالیا',
  },
  {
    image: 'media/svg/brand-logos/plurk.svg',
    title: 'لیگ قهرمانان آسیا',
    link: 'آسیا',
  },
]

const ProjectsTab = () => {
  return (
    <div className='m-0 ' >
      {/* begin::Toolbar */}

      {/* end::Toolbar */}

      {/*begin::Projects*/}
      <div className='m-0 '>
        {/*begin::Heading*/}
        <h1 className='text-gray-800 fw-bold mb-6 mx-5 text-end '>لیگ ها</h1>
        {/*end::Heading*/}

        {/*begin::Items*/}
        <div className='mb-10'>
          {projects.map((p) => (
            <Link
              key={p.link}
              to='/crafted/pages/profile/projects'
              className='custom-list d-flex align-items-center px-5 py-4'
            >

              {/*begin::Description*/}
              <div className='d-flex flex-column flex-grow-1'>
                {/*begin::Title*/}
                <h5 className='custom-list-title fw-bold text-gray-800 mb-1'>{p.title}</h5>
                {/*end::Title*/}

                {/*begin::Link*/}
                <span className='text-gray-500 fw-bold'>{p.link}</span>
                {/*end::Link*/}
              </div>
              {/*begin::Description*/}
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-5'>
                <span className='symbol-label'>
                  <img
                    src={toAbsoluteUrl(p.image)}
                    alt={p.title}
                    className='h-50 align-self-center'
                  />
                </span>
              </div>
              {/*end::Symbol*/}


            </Link>
          ))}
        </div>
        {/*end::Items*/}
      </div>
      {/*end::Projects*/}
    </div>
  )
}

export { ProjectsTab }
