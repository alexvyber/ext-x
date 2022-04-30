import React from 'react'

import { getStorageData, setStorageData } from '../../utils';


async function handleDelete(id) {
    const { phrases } = await getStorageData('phrases')
    const updatedPhrases = phrases.filter(item => item.id !== id);

    await setStorageData({ phrases: updatedPhrases })

}


export function P(props) {

    const { id, title, text } = props

    return (<span key={id} className="m-2 relative bg-white block p-4 border border-gray-100 shadow-sm rounded-xl max-w-3xl  mx-auto" >
        <div className="mt-2 text-gray-500">
            <h5 className="mt-2 text-lg text-gray-700">{title}</h5>
            <p className="hidden mt-2 text-sm sm:block">{text}</p>
            <button
                onClick={(e) => { e.preventDefault(); handleDelete(id) }}
                className="inline-flex mt-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-300 hover:bg-red-400 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reds-500">Remove</button>
        </div>
    </span>)



}