import { useQuery } from '@apollo/client'
import React from 'react'
import LaunchItem from './LaunchItem';

const Query = ({query}) => {
    const { loading, error, data } = useQuery(query);

    if(loading) return <p>loading...</p>
    if(error) return <p>{error}</p>
    return <LaunchItem data={data} />
}

export default Query
