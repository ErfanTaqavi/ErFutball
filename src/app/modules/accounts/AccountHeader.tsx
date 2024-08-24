
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

const AccountHeader: React.FC = () => {
  const location = useLocation()

  return (
    <>
      <div className='card mb-5 mb-xl-10 dir ' >
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className=' mb-4'>
              <div className='symbol symbol-70px symbol-lg-160px symbol-fixed position-relative'>
                <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='team logo' />
              </div>
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2 ' style={{fontFamily: 'peyda-bold '}}>
                    <span  className='text-gray-800 text-hover-primary fs-2 fw-bolder '>
                      بارسلونا 
                    </span>
                  </div>

                  <div className='d-flex flex-wrap fw-bold fs-6 mb-2  gap-5'>
                    <div className='d-flex align-items-center text-gray-500 text-hover-primary  '>
                    <span
                     
                    >
                      اسپانیا
                    </span>
                    </div>
                  <div                      className='d-flex gap-1 align-items-center  text-hover-primary  '
                  >
                  <span 
                      className='text-gray-500'
                    >
                      تاریخ تاسیس : 
                      
                    </span>
                    <span  className='text-gray-800'>{1899}</span>
                  </div>
                
                  </div>
                </div>

              
              </div>

              <div className='d-flex flex-column '>
                <div className='d-flex flex-column flex-grow-1'>
                  <div className='d-flex flex-wrap ' style={{fontFamily: 'peyda-bold '}}>
                  <div  className='d-flex  gap-1 align-items-center text-gray-500 text-hover-primary mb-2'> <span> سرمربی :</span>
                  <span  className='text-gray-700'> یوهان کرایوف</span></div>
                  </div>
                </div>

                <div className='d-flex gap-sm-5 gap-2   flex-column flex-md-row mt-3'  style={{fontFamily: 'peyda-bold '}}>
                 
                <div          className='d-flex  gap-1 align-items-center text-gray-500 text-hover-primary mb-2'
                  >
                    <span  className='text-gray-500'>
                     استادیوم : 
                    </span>
                    <span  className='text-gray-700'>
                    {'spotify camp new'}
                    </span>
                    </div>
                    <div          className='d-flex  gap-1 align-items-center text-gray-500 text-hover-primary mb-2'
                  >
                    <span  className='text-gray-500'>
                     شهر  : 
                    </span>
                    <span  className='text-gray-700'>
                    {'بارسلون'}
                    </span>
                    </div>
                    <div          className='d-flex  gap-1 align-items-center text-gray-500 text-hover-primary mb-2'
                  >
                    <span  className='text-gray-500'>
                     ظرفیت استادیوم : 
                    </span>
                    <span  className='text-gray-700'>
                    {90000}
                    </span>
                    </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  )
}

export {AccountHeader}
