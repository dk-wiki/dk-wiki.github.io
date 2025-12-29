import config from "@/global.config.json";
import { useEffect } from "react";

export function useTitle(title: string) {
    const { prefix, separator } = config.title;
    useEffect(() => {
        document.title = `${title}${separator}${prefix}`;
    }, [title]);
}

export function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        if (typeof window.fx !== "undefined") {
            return resolve();
        }

        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            existing.addEventListener("load", () => resolve());
            return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            if (typeof window.fx !== "undefined") {
                resolve();
            } else {
                reject(new Error("fx failed to load"));
            }
        };
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
    });
}

