import React from 'react'

const Language = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Programming Languages</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>C/C++</h3>
              <span className='skills__level'>Expert</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>SQL</h3>
              <span className='skills__level'>Intermediates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Language
