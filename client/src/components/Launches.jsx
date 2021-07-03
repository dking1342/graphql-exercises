import React from 'react';
import { LAUNCHES_QUERY } from '../queries/query';
import Query from './Query';
import MissionKey from './MissionKey';



const Launches = () => {
    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            <Query query={LAUNCHES_QUERY}/>
        </div>
    )
}

export default Launches
