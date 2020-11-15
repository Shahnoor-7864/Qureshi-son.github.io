import React from 'react';
import SData from './SData'
import Card from './Card'

const Services = () => {
    return (
        <>
    <div className = "my-5" >
        <h1 className = "text-center">Our Services</h1>
        <div className = "container-fluid mb-5">
            <div className = "row">
              <div className = "col-10 mx-auto">
              <div className ="row gy-4" > 
                  {SData.map((val, ind) => {
                      return <Card key = {ind} imgsrc = {val.imgsrc} title = {val.title} />
                  })}
               </div> 
              </div>
            </div>
        </div>
    </div>
      </>
    )
}
export default Services;
