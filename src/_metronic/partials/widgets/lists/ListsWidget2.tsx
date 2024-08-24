
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import shirt from "../../../../../public/media/logos/t-shirt.svg";
type Props = {
  className: string
}

const ListsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className} px-0 mx-0` }>
      {/* begin::Header */}
      <div className='card-header border-0 dir bg-secondary '>
        <h3 className='card-title fw-bold text-gray-900 ' style={{fontFamily: 'peyda-bold '}}>{"دروازه بان "}</h3>
        <div className='card-toolbar'>
       
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2 dir px-2 ' style={{fontFamily: 'peyda-medium  '}}>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7 gap-3 border-bottom pb-1   '>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px '>
            <img src={toAbsoluteUrl('media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
              مارک ترشتیگن 
            </a>
            <div className='d-flex flex-row gap-5 '>
              <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'>سن:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 29 </span>
            </div>
            <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'> امتیاز:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 8.7 </span>
            </div>
            </div>

          </div>
          <div className="position-relative  	">
           
                <img src={shirt} className=' w-md-55px w-45px  ' alt="shirt" />
                <span className='position-absolute top-50 start-50 translate-middle text-center fs-2 mt-1  '>9</span>
              </div>
        
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7 gap-3 border-bottom pb-1 '>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px '>
            <img src={toAbsoluteUrl('media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
لیونل مسی            </a>
            <div className='d-flex flex-row gap-5 '>
              <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'>سن:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 29 </span>
            </div>
            <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'> امتیاز:   </span>
            <span className='text-gray-700d-block fw-semibold'> 8.7 </span>
            </div>
            </div>

          </div>
         
          <div className="position-relative  	">
           
           <img src={shirt} className=' w-md-55px w-45px  ' alt="shirt" />
           <span className='position-absolute top-50 start-50 translate-middle text-center fs-2 mt-1  '>9</span>
         </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7 gap-3 border-bottom pb-1 '>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px '>
            <img src={toAbsoluteUrl('media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
              مارک ترشتیگن 
            </a>
            <div className='d-flex flex-row gap-5 '>
              <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'>سن:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 29 </span>
            </div>
            <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'> امتیاز:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 8.7 </span>
            </div>
            </div>

          </div>
         
          <div className="position-relative  	">
           
                <img src={shirt} className=' w-md-55px w-45px  ' alt="shirt" />
                <span className='position-absolute top-50 start-50 translate-middle text-center fs-2 mt-1  '>9</span>
              </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7 gap-3 border-bottom pb-1 '>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px '>
            <img src={toAbsoluteUrl('media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
              مارک ترشتیگن 
            </a>
            <div className='d-flex flex-row gap-5 '>
              <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'>سن:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 29 </span>
            </div>
            <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'> امتیاز:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 8.7 </span>
            </div>
            </div>

          </div>
          <div className="position-relative  	">
           
           <img src={shirt} className=' w-md-55px w-45px  ' alt="shirt" />
           <span className='position-absolute top-50 start-50 translate-middle text-center fs-2 mt-1  '>9</span>
         </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7 gap-3 border-bottom pb-1 '>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px '>
            <img src={toAbsoluteUrl('media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
              مارک ترشتیگن 
            </a>
            <div className='d-flex flex-row gap-5 '>
              <div className='d-flex flex-row gap-1 '>
            <span className='text-muted d-block fw-semibold'>سن:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 29 </span>
            </div>
            <div className='d-flex flex-row gap-1'>
            <span className='text-muted d-block fw-semibold'> امتیاز:   </span>
            <span className='text-gray-700 d-block fw-semibold'> 8.7 </span>
            </div>
            </div>

          </div>
          <div className="position-relative  	">
           
           <img src={shirt} className=' w-md-55px w-45px  ' alt="shirt" />
           <span className='position-absolute top-50 start-50 translate-middle text-center fs-2 mt-1  '>9</span>
         </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget2}
