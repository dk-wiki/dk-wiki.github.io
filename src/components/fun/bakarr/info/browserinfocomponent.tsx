import React, { useEffect, useState } from 'react';
import InfoGrid from './infogrid';

interface BrowserInfo {
    browser: string;
    vpnStatus: string;
    plugins: string[];
    doNotTrack: string | null;
    canvasFingerprint: string;
}

const getBrowser = (ua: string): string => {
    if (/Firefox/.test(ua)) return 'Firefox';
    if (/Edg/.test(ua)) return 'Edge';
    if (/Chrome/.test(ua) && !/Edg/.test(ua)) return 'Chrome';
    if (/Safari/.test(ua) && !/Chrome/.test(ua)) return 'Safari';
    return 'Unknown';
};

const getCanvasFingerprint = (): string => {
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return 'N/A';
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText('Hello, world!', 2, 15);
        ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
        ctx.fillText('Hello, world!', 4, 17);
        const dataUrl = canvas.toDataURL();
        let hash = 0;
        for (let i = 0; i < dataUrl.length; i++) {
            const char = dataUrl.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return hash.toString();
    } catch {
        return 'N/A';
    }
};

export const BrowserInfoComponent: React.FC = () => {
    const [info, setInfo] = useState<BrowserInfo | null>(null);

    useEffect(() => {
        const fetchBrowserInfo = async () => {
            try {
                const ua = navigator.userAgent;
                const plugins = Array.from(navigator.plugins || []).map(p => p.name);
                const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                const res = await fetch('https://ipwho.is/');
                const text = await res.text();

                let data: any;
                try {
                    data = JSON.parse(text);
                } catch (jsonError) {
                    console.error('Failed to parse JSON from ipwho.is. Response was:', text);
                    return;
                }

                const timezoneMatch = data.timezone?.id === browserTimezone;
                const vpnStatus =
                    data.vpn || data.proxy
                        ? 'VPN or Proxy Detected (confirmed by API)'
                        : !timezoneMatch
                            ? 'Possible VPN (timezone mismatch)'
                            : 'No VPN detected';

                setInfo({
                    browser: getBrowser(ua),
                    vpnStatus,
                    plugins,
                    doNotTrack: navigator.doNotTrack ?? null,
                    canvasFingerprint: getCanvasFingerprint(),
                });
            } catch (error) {
                console.error('Error fetching browser info:', error);
            }
        };

        fetchBrowserInfo();
    }, []);

    if (!info) return <p>Loading browser info...</p>;

    const browserInfoItems = [
        { label: 'Browser', value: info.browser },
        { label: 'Do Not Track', value: info.doNotTrack ?? 'Unknown' },
        { label: 'VPN Status', value: info.vpnStatus },
        { label: 'Plugins', value: info.plugins?.length ? info.plugins.join(', ') : 'None' },
        { label: 'Canvas Fingerprint Hash', value: info.canvasFingerprint },
    ];

    return <InfoGrid title="Browser information:" items={browserInfoItems} />;
};

export default BrowserInfoComponent;
