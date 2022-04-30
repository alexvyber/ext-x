import React from 'react';
import { NewItem } from './NewItem';
import { getStorageData } from '../../utils';
import { P } from './P'
import { StupidButton } from './StupidButton';

const { phrases } = await getStorageData('phrases')

const Options = () => {

    return (  <main className='bg-gray-50 h-screen'>
        { phrases ? phrases.map( item => <P id={item.id} title={item.title} text={item.text} />  ) : <StupidButton /> }
        <NewItem />
        </main>
    
    )
};

export default Options;

