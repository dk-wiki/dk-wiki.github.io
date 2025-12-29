import PageWrapper from "@/components/elements/page";
import { useParams } from "react-router-dom";
import AjaxPage from "@/pages/articles/ajax";
import NotFoundPage from "@/pages/main/notfound";
import { useEffect, useState } from "react";
import type { ReactElement, ComponentType } from "react";
import BakarrPage from "@/pages/articles/bakarr";
import { useTitle } from "@/lib";
import KujinPage from "@/pages/articles/kujin";
import ExecutionerPage from "@/pages/articles/executioner";
import AtlasPage from "@/pages/articles/atlas";
import GoliathPage from "@/pages/articles/goliath";
import KamuPage from "@/pages/articles/kamu";
import GluttonitePage from "@/pages/articles/gluttonite";
import AegisPage from "../articles/aegis";

type ArticleRouterObject = {
    id: number,
    title: string,
    route: string,
    node: ComponentType,
    style?: string,
};

const ARTICLE_DIRECTORY: ArticleRouterObject[] = [
    {
        id: 0,
        title: "Ajax",
        route: "ajax",
        node: AjaxPage,
        style: "ancient-greek",
    },
    {
        id: 1,
        title: "Fenris Bakarr",
        route: "fenris-bakarr",
        node: BakarrPage,
        style: "cyber-terminal",
    },
    {
        id: 2,
        title: "Kujin",
        route: "kujin",
        node: KujinPage,
        style: "ancient-japanese",
    },
    {
        id: 3,
        title: "The Executioner",
        route: "the-executioner",
        node: ExecutionerPage,
        style: "medieval-dungeon",
    },
    {
        id: 4,
        title: "Atlas",
        route: "atlas",
        node: AtlasPage,
        style: "silver-roman-gladiator"
    },
    {
        id: 5,
        title: "Goliath",
        route: "goliath",
        node: GoliathPage,
        style: "golden-roman-gladiator"
    },
    {
        id: 6,
        title: "Kamu",
        route: "kamu",
        node: KamuPage,
        style: "tiki-island"
    },
    {
        id: 7,
        title: "Gluttonite",
        route: "gluttonite",
        node: GluttonitePage
    },
    {
        id: 8,
        title: "Aegis",
        route: "aegis",
        node: AegisPage,
    },
];

const ArticlePage = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState<ReactElement | null>(null);
    const [styleHref, setStyleHref] = useState<string | null>(null);
    const [pageTitle, setPageTitle] = useState<string>("Loading...");

    useTitle(pageTitle);

    useEffect(() => {
        const articleObj = ARTICLE_DIRECTORY.find(a => a.route === slug);

        if (slug && articleObj) {
            const Component = articleObj.node;
            setPageTitle(articleObj.title);
            setArticle(<Component />);

            if (articleObj.style) {
                setStyleHref(`/styles/${articleObj.style}-styles.css`);
            } else {
                setStyleHref(null);
            }
        } else {
            setPageTitle("Not Found");
            setArticle(<NotFoundPage />);
            setStyleHref(null);
        }
    }, [slug]);

    useEffect(() => {
        if (!styleHref) return;

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = styleHref;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [styleHref]);

    return <PageWrapper>{article}</PageWrapper>;
};

export default ArticlePage;
