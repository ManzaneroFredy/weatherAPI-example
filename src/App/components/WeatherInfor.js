import React from 'react';

const weatherInfo = (props) =>{
    return(
        <div>
            <div>
                {
                    props.error &&
                    <div className="aler alert-danger">
                        <p>{props.error}</p>
                    </div>
                }
            </div>

            {
             props.temperature?
                <div className="card card=body">
                    <p>
                        Location: {props.city}, {props.country}
                    </p>
                    <p>
                        Temperature: {props.temperature} C
                    </p>
                    <p>
                        humidity: {props.himidity}
                    </p>
                    <p>
                        Wind speed: {props.wind_speed}
                    </p>
                </div>
                :
                <div className= "card card-body">
                    <p> No request yet</p>
                </div>
            }
            
    
        </div>


        
    )
}
    

export default weatherInfo;