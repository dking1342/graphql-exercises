import { useQuery } from '@apollo/client';
import React from 'react'
import { LAUNCH_QUERY } from '../queries/query';
import LaunchSingleDetails from './LaunchSingleDetails';

const Launch = (props) => {
    let { flight_number } = props.match.params;
    flight_number = Number(flight_number);
    const { loading, error, data } = useQuery(LAUNCH_QUERY,{
        variables:{flight_number}
    })

    if(loading) return <p>loading...</p>
    if(error) console.log(error)
    return (
        <>
            <LaunchSingleDetails data={data} />
        </>
    )
}

export default Launch
