import * as React from 'react'
import { Link } from 'gatsby'

const Headline = ({placeholder}) => {
    return (
        <div className="flex items-center">
            <h1 className="text-2xl mr-4 whitespace-nowrap">{placeholder}</h1>
            <div className="w-52 h-0.5 bg-gray-400"></div>
        </div>
    )
}

export default Headline