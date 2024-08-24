import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const ProfileDetails: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10 dir '>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0' style={{fontFamily: 'peyda-bold '}}>لیونل مسی </h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
          
              <div className='col-12 d-flex justify-content-center align-items-center '>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>
                </div>
              </div>
            </div>

            <div className='row mb-6 justify-content-around bg-secondary rounded-2 '>
              <div className='col-5 col-form-label  fw-bold fs-6'>نام </div>

              <div className='col-5 col-form-label  fw-bold fs-md-6 fs-7 text-center text-nowrap '>{"Lionel Andrés Messi Cuccittini"} </div>


            </div>

            <div className='row mb-6 justify-content-around  rounded-2 '>
              <div className='col-5 col-form-label  fw-bold fs-6'>شماره پیراهن  </div>

              <div className='col-5 col-form-label  fw-bold fs-6 text-center'>{"10"} </div>


            </div>

            <div className='row mb-6 justify-content-around bg-secondary rounded-2 '>
              <div className='col-5 col-form-label  fw-bold fs-6'>پست اصلی  </div>

              <div className='col-5 col-form-label  fw-bold fs-6 text-center'>{"مهاجم"} </div>


            </div>

            <div className='row mb-6 justify-content-around  rounded-2 '>
              <div className='col-5 col-form-label  fw-bold fs-6'> سن  </div>

              <div className='col-5 col-form-label  fw-bold fs-6 text-center'>{"37"} </div>


            </div>

            <div className='row mb-6 justify-content-around bg-secondary rounded-2 '>
              <div className='col-5 col-form-label  fw-bold fs-6'>تیم باشگاهی  </div>

              <div className='col-5 col-form-label  fw-bold fs-6 text-center'>{"Inter Miami"} </div>


            </div>

            <div className='row mb-6 justify-content-around  rounded-2 '>
              <div className='col-5 col-form-label  fw-bold fs-6'> امتیاز   </div>

              <div className='col-5 col-form-label  fw-bold fs-6 text-center'>{"9.76 "} </div>


            </div>

          </div>

         
        </form>
      </div>
    </div>
  )
}

export {ProfileDetails}
