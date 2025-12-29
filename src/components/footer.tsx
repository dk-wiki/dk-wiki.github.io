import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-zinc-400 text-sm">
        <div className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} DK Wiki. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-white">Home Page</Link>
          <Link to="https://dk-wiki.github.io/server-rules/" className="hover:text-white">Server Rules</Link>
        </div>
      </div>
    </footer>
  );
}
