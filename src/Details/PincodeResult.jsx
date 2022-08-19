import React from 'react'

export default function PinodeResult(props) {
  return (
    <>
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>

        <ul className="list-group .list-group-flush">
          <li className="list-group-item text-center  text-danger">Pincode is :  {props.pincode}</li>
          <li className="list-group-item text-center">Post Office Name: {props.office}</li>
          <li className="list-group-item text-center">Delivery:  {props.delivery}</li>
          <li className="list-group-item text-center"> Division:  {props.division}</li>
          <li className="list-group-item text-center"> Circle:  {props.circle}</li>
          <li className="list-group-item text-center"> District:  {props.district}</li>
          <li className="list-group-item text-center"> Telephone No:  {props.phone}</li>
          <li className="list-group-item text-center"> Sub-office:  {props.suboffice}</li>
          <li className="list-group-item text-center"> Head-office : {props.headoffice}</li>


        </ul>
      </div>




    </>
  )
}
