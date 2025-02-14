import React from 'react'
import Services_Data from '../assets/services_data.js'
import arrow_icon from '../assets/arrow_icon.svg'

function Services() {
    return (
        <>
        { /* <div className="container" >
                <div className="services" id="services">
                    <div className="title text-center">
                        <h1>My Services</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {Services_Data.map((service, index) => {
                            return <div key={index} className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>{service.s_no}</h3>
                                        <h2>{service.s_name}</h2>
                                        <p>{service.s_desc}</p>
                                        <div className="services-readmore">
                                            <p>Read More</p>
                                            <img src={arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>*/}
        </>
    )
}

export default Services