import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-gray-900 border border-gray-700 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg text-white'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-400'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-white'>{job?.title}</h1>
                <p className='text-sm text-gray-400'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-400 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards;
