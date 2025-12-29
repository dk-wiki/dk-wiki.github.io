import { HomeIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div className="flex flex-col w-full items-center text-center gap-5 py-10">
            <h1 className="text-4xl">
                <b>404</b> | Not Found
            </h1>
            <p>
                The page you&apos;re looking for is not available here.
            </p>
            <Link to="/">
                <button className="w-fit mt-6 inline-flex items-center gap-4 px-4 py-2 rounded">
                    <HomeIcon width={20} height={20} />
                    <span>Return Home</span>
                </button>
            </Link>
        </div>
    )
}