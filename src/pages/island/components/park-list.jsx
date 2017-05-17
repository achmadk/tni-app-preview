import React from 'react'

export default function ParkList ({park}) {
  const {id, name} = park
  console.log(id, name)
  return (
    <div className='col-50 tablet-33'>
      <a href={`park-details.html?id=${id}`} className='link'>
        <div className='card bg-blue color-white'>
          <div className='card-content'>
            <div className='card-content-inner'>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
