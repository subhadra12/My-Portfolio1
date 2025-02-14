import React from 'react'
import mywork_data from '../assets/mywork_data'

function MyWork() {
  return (
    <>
      <div className="container" >
        <div className="mywork" id="mywork">
          <div className="title text-center">
            <h1>My Work</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
                        {mywork_data.map((work, index) => {
                            return <div key={index} className="col">
                                <div className="work">
                                        <img key={index} src={work.w_img} alt="" className='w-100' />
                                    </div>
                            </div>
                        })}
                    </div>
        </div>
      </div>
    </>
  )
}

export default MyWork