import React, { useState } from 'react';
import { CHARACTERS } from '../Data';

const HomePage = () => {
    const [charList, setCharList] = useState(CHARACTERS.sort((a, b) => a.name.localeCompare(b.name)));

    return (
        <div className="flex flex-col bg-gray-100">
            <main className="flex-grow container mx-auto py-8">
                <div className="mt-10 mb-20">
                    <h2 className="text-left text-2xl">Welcome to</h2>
                    <h1 className="text-5xl mb-10">The Encyclopedia of Hunger</h1>
                    <p>
                        The largest collection of information on Gluttonites and their abilities. Here, you can find detailed information on the various Gluttonites discovered, their abilities, and their history.
                    </p>
                </div>
                

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search for articles..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            onChange={(e) => {
                                const filteredChars = CHARACTERS.filter(char =>
                                    char.name.toLowerCase().includes(e.target.value.toLowerCase())
                                );
                                setCharList(filteredChars);
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Encyclopedia Entries Section */}
                        <div className="md:order-2 order-1 md:col-span-3 bg-gray-50 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Encyclopedia Entries</h2>
                            <ul className="space-y-4">
                                {charList.slice(0, 3).map(char => (
                                    <a href={char.link} key={char.id}>
                                        <li className="p-4 flex items-center space-x-4 text-left rounded-md hover:bg-slate-200">
                                            {char.image && (
                                                <img
                                                    src={char.image}
                                                    alt={char.name}
                                                    className="rounded-full w-12 h-12 flex-shrink-0"
                                                />
                                            )}
                                            <div>
                                                <h3 className="text-lg font-bold">{char.name}</h3>
                                                <p className="text-gray-600">{char.description}</p>
                                                <span className="text-sm text-gray-500">Discovered {char.posted}</span>
                                            </div>
                                        </li>
                                        <hr className="border-gray-300" />
                                    </a>
                                ))}
                                <li>
                                    <a href="#/entries" className="text-blue-500 hover:underline">View all entries</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
