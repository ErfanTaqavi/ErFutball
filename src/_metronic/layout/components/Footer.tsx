

import {FC} from 'react'
import clsx from 'clsx'
import {useLayout} from '../core'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div  >
      {/*begin::Container*/}
      <div className='d-flex flex-column flex-md-row flex-stack justify-content-center '>
        {/*begin::Copyright*/}
        <div className='text-gray-900 order-2 order-md-1'>
          <span className='text-gray-500 fw-bold me-1'>Created by</span>
          <a
            href='#'
            target='_blank'
            className='text-muted text-hover-primary fw-bold me-2 fs-6'
          >
            Erfan ❤️
          </a>
        </div>
        {/*end::Copyright*/}
      </div>
      {/*end::Container*/}
    </div>
  )
}

export {Footer}
