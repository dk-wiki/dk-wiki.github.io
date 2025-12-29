import React from 'react';

type InfoItem = {
  label: string;
  value: string | number | null | undefined;
};

type InfoGridProps = {
  title?: string;
  items: InfoItem[];
  loading?: boolean;
  loadingMessage?: string;
};

const InfoGrid: React.FC<InfoGridProps> = ({ title, items, loading, loadingMessage = 'Loading...' }) => {
  if (loading) {
    return <pre className="text-center text-sm">{loadingMessage}</pre>;
  }

  return (
    <div className="text-xs mt-1 w-full">
      {title && <p className="info-label">{title}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-0">

        {items.map(({ label, value }) => (
          <div key={label} className="w-full flex gap-2 min-w-0 items-center">
            <span className="font-bold shrink-0 truncate max-w-[40%] info-label">{label}</span>
            <span className="ml-auto text-right truncate overflow-hidden whitespace-nowrap text-ellipsis w-full info-value">
              {value ?? 'N/A'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};




export default InfoGrid;
