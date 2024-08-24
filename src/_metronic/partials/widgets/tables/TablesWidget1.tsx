
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const TablesWidget1: React.FC<Props> = ({className}) => {
  return (
    <div className={`card  ${className}` } style={{direction : 'rtl'}}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 px-4 '>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>تیم های منتخب</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          {/* <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button> */}
          {/* begin::Menu 1 */}
          {/* <Dropdown1 /> */}
          {/* end::Menu 1 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3 px-4 '>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-lg-3  gy-1'>
            {/* begin::Table head */}
            <thead>
              <tr>
                <th className='p-0 w-fit'></th>
                <th className='p-0 w-fit '></th>
              
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr className=''>
                <th className='w-25  '>
                  <div className='symbol symbol-50px me-2 px-none ms-4  '>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/plurk.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    استقلال
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>ایران</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/telegram.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    پرسپولیس
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>ایران</span>
                </td>
                
              </tr>
              <tr>
                <th className='  '>
                  <div className='symbol symbol-50px me-2  '>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/vimeo.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    بارسلونا
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>اسپانیا</span>
                </td>
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/bebo.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  رئال مادرید
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>اسپانیا</span>
                </td>
                
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  منچستر سیتی
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>انگلیس</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  منچستر یونایتد
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>انگلیس</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  لیورپول
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>انگلیس</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
               یوونتوس
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>ایتالیا</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                چلسی
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>انگلیس</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  اتلتیکو مادرید 
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>اسپانیا</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  سپاهان 
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>ایران</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  ناپولی 
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>ایتالیا</span>
                </td>
               
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                  لاتزیو 
                  </a>
                  <span className='text-muted fw-semibold d-block fs-7'>ایتالیا</span>
                </td>
               
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
    </div>
  )
}

export {TablesWidget1}
