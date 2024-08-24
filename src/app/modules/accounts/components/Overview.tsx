
import React from 'react'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../_metronic/helpers'
import {
  ListsWidget2,
} from '../../../../_metronic/partials/widgets'

export function Overview() {
  return (
    <>
      <div className='card mb-5 mb-xl-10 dir ' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer bg-secondary'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>بازیکنان </h3>
          </div>
          
        </div>
        <div className='container mt-5  '>
        <div className='row justify-content-around mt-5 '>
            <ListsWidget2 className='col-lg-5  '/>
            <ListsWidget2 className='col-lg-5 '/>
          </div>
          <div className='row justify-content-around  mt-5 '>
            <ListsWidget2 className='col-lg-5'/>
            <ListsWidget2 className='col-lg-5'/>
          </div>
          <div className='row justify-content-around  mt-5 '>
            <ListsWidget2 className='col-lg-5'/>
            
          </div>
          </div>
      </div>

     
  
    </>
  )
}
