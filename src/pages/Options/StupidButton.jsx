import React from 'react'
import { setStorageData } from '../../utils';

export function StupidButton() {
    async function createFirst() {

        await setStorageData({
            phrases: [
                {
                    id: 1,
                    title: 'TUPAYA Prosba!',
                    text: 'У меня просьба!\n\nНапишите, пожалуйста, отзыв. Расскажите, что вы внесли предоплату, а я моментально отправил вам код и инструкцию по погашению.\n\nЧтобы люди понимали, как я работаю и тоже могли мне доверять🤝',
                }]
        })
    }

    return (<button className="inline-flex mt-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-300 hover:bg-red-400 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reds-500"
        onClick={(e) => { e.preventDefault(); createFirst() }}>Create First Stupid Phrase!</button>)
}