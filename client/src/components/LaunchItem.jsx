import React from 'react'
import { Link } from 'react-router-dom';

const LaunchItem = ({data}) => {

    return (
        <>
            {
                data.launches.map((launch,i)=>(
                    <div className="card card-body mb-3" key={i}>
                        <div className="row">
                            <div className="col-md-9">
                                <h4>Mission: <span className={`${launch.launch_success ? 'text-success' : 'text-danger'}`} >{launch.mission_name}</span></h4>
                                <p>Date: {new Date(launch.launch_date_local).toDateString() }</p>
                            </div>
                            <div className="col-md-3">
                                <Link 
                                    className="btn btn-secondary"
                                    to={`/launch/${Number(launch.flight_number)}`}
                                >
                                    Launch Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default LaunchItem
