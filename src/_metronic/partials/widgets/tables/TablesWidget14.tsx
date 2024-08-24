
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import { Link } from 'react-router-dom'
type Props = {
  className: string
}

const TablesWidget14: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className} `}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5  d-flex justify-content-end pe-2'>
        <h3 className='card-title align-items-start flex-column justify-content-end '>
          <span className='card-label fw-bold fs-3 mb-1'>آمار</span>
        </h3>
       
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3 px-5 px-lg-7'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold  '>
                <th className='ps-4 w-2/5 '>بارسلونا</th>
                <th className='w-1/5 text-center	'>وضعیت بازی</th>
                <th className='pe-4 w-2/5  d-flex justify-content-end '>رئال مادرید</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr >
                <td  className='px-4  '>
                  <span className='d-flex align-items-center hover:bg-sky-700'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
65                      </span>
                     
                    </div>
                  </span>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  مالکیت ٪

                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
35                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
15                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  شوت                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
12                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
8                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  شوت در چارچوب
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
9                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
5                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  شوت خارج چارچوب
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
8                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
4                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  شوت بلاک شده
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
3                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
5                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  مهار دروازه بان
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
9                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
            
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
500                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  تعداد پاس
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
354                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
450                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  پاس صحیح
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
298                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
            
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
5                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  کرنر                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
7                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
6                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  خطا                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
3                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
              <tr>
                <td className='px-4 '>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7 '>
2                      </span>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span  className='text-gray-900 text-center fw-bold text-hover-primary d-block mb-1 fs-6 px-1 '>
                  کارت زرد
                  </span>
                </td>
              
                <td className='px-4 '>
                  <div className='d-flex justify-content-end align-items-center  '>
                    <div className='d-flex justify-content- flex-column '>
                      <span  className='text-gray-900 fw-bold text-hover-primary mb-1 fs-7'>
4                      </span>
                    
                    </div>
                    
                  </div>
                </td>
                
              
              </tr>
            
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget14}
