import PageWrapper from "@/components/elements/page";
import { useTitle } from "@/lib";
import config from "@/global.config.json"
import { PlusIcon } from "@radix-ui/react-icons";

import type { Article } from "@/types/fontsource";
import { useEffect, useState } from "react";
import { TitleMain } from "@/components/elements/title";
import { Link } from "react-router-dom";
import Paragraph from "@/components/elements/text";

const HomePage = () => {
    useTitle("Home");

    return (
        <PageWrapper>
            <TitleMain>The DK Wiki</TitleMain>
            <Paragraph>
                The DK Wiki is an online encyclopedia aiming to document all current knowledge surrounding Gluttonites. Formally known as Homo Vorax,
                Gluttonites are a predatory human or humanoid subspecies with the ability to swallow large quantities whole, including living creatures. They are characterised
                by their insatiable hunger, enormous size, extraordinary digestive capabilities and a universal tendency to conceal their faces behind helmets, hoods or masks.
            </Paragraph>
            <Paragraph>
                This website is current under construction and will be updated with new articles when they are made available. If you have any information regarding Gluttonites,
                reach out to DK immediately. 
            </Paragraph>
            <br />
            <ArticleSearch />
        </PageWrapper>
    );
}

export default HomePage;

const ArticleSearch = () => {
    const allArticles: Article[] = config.articles.filter((e) => e.shown);
    const ARTICLES_PER_PAGE = 10;

    const [articles, setArticles] = useState<Article[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(ARTICLES_PER_PAGE);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        let filtered = allArticles;
        if (searchText) {
            filtered = allArticles.filter((e) =>
                e.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        filtered.sort((a, b) => a.title.localeCompare(b.title));
        setArticles(filtered);
        setVisibleCount(ARTICLES_PER_PAGE);
    }, [searchText]);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + ARTICLES_PER_PAGE, articles.length));
    };

    const visibleArticles = articles.slice(0, visibleCount);

    return (
        <div className="w-full">
            <div className="mb-4 flex items-center">
                <div className="relative w-full">
                    <input
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-lg h-11 pl-12 pr-4 text-base text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Search articles..."
                        type="text"
                        onChange={e => setSearchText(e.target.value)}
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>
                    </span>
                </div>
            </div>

            {articles.length ? (
                <div className="w-full">
                    <ul className="flex flex-col gap-2">
                        {visibleArticles.map((e, idx) => (
                            <Link key={e.route ?? idx} to={`article/${e.route}`}>
                                <li className="flex items-center gap-4 w-full rounded px-1 bg-neutral-800 hover:bg-neutral-600 transition">
                                    {e.icon && <img src={e.icon} alt={e.title} className="w-10 h-10 object-contain rounded" />}
                                    <div>
                                        <h1 className="text-lg font-semibold">{e.title}</h1>
                                        <p className="text-sm text-zinc-400">{e.description}</p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    {
                        visibleCount < articles.length && (
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handleLoadMore}
                                    className="flex flex-row items-center gap-2 px-4 py-2 text-white rounded bg-zinc-900 hover:bg-zinc-700 transition cursor-pointer"
                                >
                                    <PlusIcon />
                                    <span>Load More</span>
                                </button>
                            </div>
                        )
                    }
                </div>
            ) : (
                <div className="w-full text-center italic text-zinc-500">No articles found...</div>
            )}
        </div>
    );
};
