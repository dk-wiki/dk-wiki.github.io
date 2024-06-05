import React from "react";
import PropTypes from 'prop-types';

export const EntryObjects = () => {
    return (
        <div>
            <h1>EntryObjects</h1>
        </div>
    );
}

export const TableOfContents = ({ items }) => {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav aria-label="Table of Contents" className="toc-container text-left p-4 border rounded-lg bg-gray-50">
            <h1 className="text-2xl font-semibold mb-4">Table of Contents</h1>
            <ul className="list-none pl-0">
                {items.map((item, index) => (
                    <li key={index} className="mb-2 flex items-start">
                        <span className="mr-2 text-blue-600 arrow">➤</span>
                        <a
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

TableOfContents.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export const EntryTitle = ({ children }) => {
    return (
        <>
            <h1 className="flex justify-left items-center text-4xl mt-7 mb-5">{children}</h1>
            <hr className="border-gray-400" />
        </>
    );
}

export const EntryNTBC = ({ children, href}) => {
    return (
        <div className="flex justify-left m-2">
            <h3 className="italic">Not to be confused with <a href={href} className="text-blue-500 hover:underline">{children}</a>.</h3>
        </div>
    );
}

export const EntrySubTitle = ({ children, jid }) => {
    return (
        <h2 className="flex justify-left items-center text-2xl mt-7 mb-5" id={jid}>{children}</h2>
    );
}

export const EntryIntroduction = ({ children, imgSrc, imgDesc, infoTableData }) => {
    return (
        <div className="flex flex-col md:flex-row items-start m-4 p-4 border rounded-lg shadow-lg">
            <div className={`text-left ${imgSrc ? 'md:w-3/4' : 'w-full'}`}>
                <p className="mb-4 text-lg leading-relaxed">{children}</p>
                {infoTableData && (
                    <EntryInfoTable data={infoTableData} />
                )}
            </div>
            {imgSrc && (
                <div className="md:w-1/4 md:ml-4 mt-4 md:mt-0 flex flex-col items-center">
                    <img src={imgSrc} alt="Introduction" className="rounded-lg shadow-md w-full object-cover" />
                    <p className="mt-2 text-sm text-gray-600">{imgDesc}</p>
                </div>
            )}
        </div>
    );
};

EntryIntroduction.propTypes = {
    children: PropTypes.node.isRequired,
    imgSrc: PropTypes.string,
    imgDesc: PropTypes.string,
    infoTableData: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
};

export const EntryInfoTable = ({ data }) => {
    return (
        <table className="min-w-full bg-white">
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="border-b">
                        <td className="px-4 py-1 font-medium text-gray-800">{item.label}</td>
                        <td className="px-4 py-1 text-gray-600">{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

EntryInfoTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export const EntryParagraph = ({ children }) => {
    return (
        <p className="text-left m-2 mb-6">{children}</p>
    );
}

export const EA = ({ children, href }) => {
    return (
        <a href={href} className="text-blue-500 hover:underline">{children}</a>
    );
}

export const EBr = () => {
    return (
        <>
            <br />
            <br />
        </>
    );
}

export const EntryTableOfContents = ({ children }) => {
    return (
        <div className="flex justify-left m-2">
            <h3 className="italic">Table of Contents</h3>
            <ul>
                {children.map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ul>
        </div>
    );
}

export const EntryQuote = ({ children, attr }) => {
    return (
        <div className="text-left m-2 p-4 border-l-4 border-gray-400 bg-gray-100">
            <p className="italic">{children}</p>
            {attr ? <p className="text-right text-sm text-gray-600">- {attr}</p> : null}
        </div>
    );
}

export const EHr = () => {
    return (
        <hr className="border-gray-400 mt-3" />
    );
}

export const Eul = ({ children }) => {
    return (
        <ul className="list-disc pl-5 my-4">
            {children}
        </ul>
    );
};

export const ETable = ({ data }) => {
    const headers = Object.keys(data[0]).filter(key => key !== 'Link');

    return (
        <div className="overflow-x-auto text-left">
            <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((key) => (
                            <th
                                key={key}
                                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {key}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={index}>
                            {headers.map((key, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-3 py-2 text-sm text-gray-700 break-words"
                                >
                                    {key === "Name" && row.Link ? (
                                        <a href={row.Link} className="text-blue-500 hover:underline">
                                            {row.Name}
                                        </a>
                                    ) : (
                                        row[key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


ETable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
            Discovered: PropTypes.string.isRequired,
            Link: PropTypes.string,
        })
    ).isRequired,
};