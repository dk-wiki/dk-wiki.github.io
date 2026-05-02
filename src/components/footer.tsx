import { FaDiscord, FaGlobe } from "react-icons/fa";
import { SiBluesky, SiKofi } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-zinc-400 text-sm gap-4">
        <div>
          &copy; {new Date().getFullYear()} DK Wiki. All rights reserved.
        </div>
        <div className="flex gap-4 text-xl">
          <a
            href="https://discord.gg/wrwXDJWbDy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-white transition-colors"
          >
            <FaDiscord />
          </a>
          <a
            href="https://bsky.app/profile/dk2.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky"
            className="hover:text-white transition-colors"
          >
            <SiBluesky />
          </a>
          <a
            href="https://ko-fi.com/321dk123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ko-fi"
            className="hover:text-white transition-colors"
          >
            <SiKofi />
          </a>
          <a
            href="https://321dk123.straw.page/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="hover:text-white transition-colors"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </footer>
  );
}