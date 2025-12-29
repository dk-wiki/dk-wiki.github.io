import React, { useEffect, useState } from 'react';
import InfoGrid from './infogrid';

interface ComputerInfo {
    os: string;
    language: string;
    timezone: string;
    resolution: string;
    cpuCores: number | null;
    memoryGB: number | null;
    charging: boolean | null;
    batteryLevel: number | null;
}

const getOS = (ua: string): string => {
    if (/Windows NT/.test(ua)) return 'Windows';
    if (/Mac OS X/.test(ua)) return 'macOS';
    if (/Linux/.test(ua)) return 'Linux';
    if (/Android/.test(ua)) return 'Android';
    if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
    return 'Unknown';
};

export const ComputerInfoComponent: React.FC = () => {
    const [info, setInfo] = useState<ComputerInfo | null>(null);
    const [localTime, setLocalTime] = useState<string>(() =>
        new Date().toLocaleTimeString()
    );

    useEffect(() => {
        const fetchComputerInfo = async () => {
            try {
                const ua = navigator.userAgent;
                const battery = await (navigator as any).getBattery?.();
                const batteryLevel = battery ? Math.round(battery.level * 100) : null;
                const charging = battery ? battery.charging : null;

                setInfo({
                    os: getOS(ua),
                    language: navigator.language,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    resolution: `${window.screen.width}x${window.screen.height}`,
                    cpuCores: navigator.hardwareConcurrency ?? null,
                    memoryGB: (navigator as any).deviceMemory ?? null,
                    charging,
                    batteryLevel,
                });
            } catch (error) {
                console.error('Error fetching computer info:', error);
            }
        };

        fetchComputerInfo();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(
                new Date().toLocaleString('en-GB', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).replace(/(\d{2})\/(\d{2})\/(\d{4}),? (.*)/, '$3/$2/$1 $4')
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!info) return <pre className="text-center text-sm">Loading computer info...</pre>;

    const computerInfoItems = [
        { label: 'Operating System', value: info.os },
        { label: 'Language', value: info.language },
        { label: 'Timezone', value: info.timezone },
        { label: 'Local Time', value: localTime },
        { label: 'Resolution', value: info.resolution },
        { label: 'CPU Cores', value: info.cpuCores ?? 'N/A' },
        { label: 'Memory (GB)', value: info.memoryGB ?? 'N/A' },
        { label: 'Battery Level', value: info.batteryLevel !== null ? `${info.batteryLevel}%` : 'N/A' },
        { label: 'Charging', value: info.charging === null ? 'N/A' : info.charging ? 'Yes' : 'No' },
    ];

    return <InfoGrid title="Computer information:" items={computerInfoItems} />;
};

export default ComputerInfoComponent;

