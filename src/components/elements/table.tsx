type TableProps = {
    columns: string[];
    entries: (string | number)[][];
};

export default function CustomTable({ columns, entries }: TableProps) {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="custom-th">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {entries.map((row, rowIndex) => (
                        <tr key={rowIndex} className="custom-tr">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="custom-td">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}