import React from 'react';
import { useParams } from 'react-router-dom';
import TheExecutioner from './TheExecutioner';
import Ajax from './Ajax';

const Entry = () => {
    let { id } = useParams();

    return (
        <div className="flex justify-center pb-10">
            <div className="max-w-6xl w-full">
                {
                    id === "The_Executioner" ? <TheExecutioner /> :
                    id === "Ajax" ? <Ajax /> :
                    <>
                      <h1 className="flex justify-center items-center text-4xl mt-5 mb-7">Entry not found</h1>
                      <a className="text-1xl" href="#/entries">Return to entry list</a>
                    </>
                }
            </div>
        </div>
    );
}

export default Entry;
