import React, { useEffect, useState } from 'react';
import InfoGrid from './infogrid';

interface NetworkInfo {
    ip: string;
    city: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    org: string;
    asn: string;
    downlink: number | null;
    rtt: number | null;
}

export const NetworkInfoComponent: React.FC = () => {
    const [info, setInfo] = useState<NetworkInfo | null>(null);

    const testDownloadSpeed = async (): Promise<number | null> => {
        try {
            const start = performance.now();
            const response = await fetch('/testfile.bin', { cache: 'no-store' });
            const blob = await response.blob();
            const end = performance.now();
            if (!blob || blob.size === 0) return null;
            const sizeInBits = blob.size * 8;
            const durationInSeconds = (end - start) / 1000;
            return parseFloat(((sizeInBits / durationInSeconds) / (1024 * 1024)).toFixed(2));
        } catch (e) {
            console.error('Download speed test failed:', e);
            return null;
        }
    };

    const testRTT = async (): Promise<number | null> => {
        try {
            const start = performance.now();
            await fetch('/ping.txt', { cache: 'no-store' });
            const end = performance.now();
            return Math.round(end - start);
        } catch {
            return null;
        }
    };

    useEffect(() => {
        const fetchNetworkInfo = async () => {
            try {
                const res = await fetch('https://ipwho.is/');
                const data = await res.json();
                const downlink = await testDownloadSpeed();
                const rtt = await testRTT();

                setInfo({
                    ip: data.ip,
                    city: data.city,
                    region: data.region,
                    country: data.country,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    org: data.connection?.isp || 'Unknown',
                    asn: data.connection?.asn || 'Unknown',
                    downlink,
                    rtt
                });
            } catch (error) {
                console.error('Error fetching network info:', error);
            }
        };

        fetchNetworkInfo();
    }, []);

    if (!info) return <pre className="text-center text-sm">Loading network info...</pre>;

    const infoItems = [
        { label: 'IP', value: info.ip },
        { label: 'ISP', value: info.org },
        { label: 'Location', value: `${info.city}, ${info.region}, ${info.country}` },
        { label: 'ASN', value: info.asn },
        { label: '~Coords', value: `${info.latitude}, ${info.longitude}` },
        { label: 'Downlink', value: info.downlink ? `${info.downlink} Mbps` : 'N/A' },
        { label: 'RTT', value: info.rtt ? `${info.rtt} ms` : 'N/A' },
    ];

    return <InfoGrid title="Network information:" items={infoItems} />;
};

export default NetworkInfoComponent;