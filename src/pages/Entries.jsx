import React, { useState, useEffect } from "react";
import { CHARACTERS } from "../Data";

const Entries = () => {
    return (
        <div className="py-5 flex flex-col items-center">
            <h1 className="my-4 text-4xl">Encyclopedia Entries</h1>
            <p className="text-center max-w-2xl mb-4">
                Search for Encyclopedia entries, or use the given filters to find what you're looking for.
            </p>
            <Search />
        </div>
    );
}

const Search = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPreparingToShow, setIsPreparingToShow] = useState(false);
    const [charList, setCharList] = useState(CHARACTERS);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = [];
    CHARACTERS.forEach(char => {
        if (!categories.includes(char.category)) {
            categories.push(char.category);
        }
    });

    categories.sort();

    const toggleCategories = () => {
        setIsTransitioning(true);

        if (!showCategories) {
            setIsPreparingToShow(true);
        } else {
            setShowCategories(false);
        }
    };

    useEffect(() => {
        if (isPreparingToShow) {
            const timeout = setTimeout(() => {
                setShowCategories(true);
                setIsPreparingToShow(false);
            }, 150); // half the duration of the CSS transition
            return () => clearTimeout(timeout);
        }
    }, [isPreparingToShow]);

    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
            }, 300); // match the duration of the CSS transition
            return () => clearTimeout(timeout);
        }
    }, [showCategories, isTransitioning]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (event.target.checked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        }
    };

    useEffect(() => {
        const filteredChars = CHARACTERS.filter(char => {
            const matchesSearchTerm = char.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategories = selectedCategories.length === 0 || selectedCategories.includes(char.category);
            return matchesSearchTerm && matchesCategories;
        });

        filteredChars.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        setCharList(filteredChars);
    }, [searchTerm, selectedCategories]);

    return (
        <div className="py-5 max-w-2xl w-full">
            <input
                type="text"
                placeholder="Search for articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                value={searchTerm}
                onChange={handleSearch}
            />
            <button
                onClick={toggleCategories}
                className={`w-full px-4 py-2 border border-gray-300 bg-slate-300 flex items-center justify-between transition-all duration-300 ${showCategories || isPreparingToShow ? "rounded-t-lg" : isTransitioning ? "rounded-t-lg" : "rounded-lg"}`}
            >
                <span className="font-semibold">Filter by Category</span>
                <span className={`transform transition-transform ${showCategories ? 'rotate-180' : 'rotate-0'}`}>
                    &#x25BC;
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${showCategories ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-200 p-3 border-t border-gray-300" + (showCategories ? ' rounded-b-lg' : '')}>
                    {categories.map((category, index) => (
                        <label key={index} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={handleCategoryChange}
                            />
                            <span className="ml-2">{category}</span>
                        </label>
                    ))}
                </div>
            </div>
            <ul className="mt-10">
                {charList.map(char => (
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
            </ul>
        </div>
    );
}

export default Entries;
