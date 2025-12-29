import { useEffect, useCallback } from "react";
import { useToc } from "@/components/elements/toccontext";
import { useNavigate, useLocation } from "react-router-dom";

export function TitleMain({ children }: { children: string }) {
    const id = children.toLowerCase().replace(/\s+/g, "-");
    const { register } = useToc();

    useEffect(() => {
        register({ id, text: children, level: 1 });
    }, [id, children, register]);

    return <h1 id={id} className="title-main title">
        <span className="title__stroke" aria-hidden="true">{children}</span>
        <span className="title__fill">{children}</span>
    </h1>;
}


export function TitleSection({ children }: { children: string }) {
    const id = children.toLowerCase().replace(/\s+/g, "-");
    const { register } = useToc();

    useEffect(() => {
        register({ id, text: children, level: 2 });
    }, [id, children, register]);

    return (
        <div>
            <h2 id={id} className="title-section title">
                <span className="title__body">
                    <span className="title__stroke" aria-hidden="true">{children}</span>
                    <span className="title__fill">{children}</span>
                </span>
            </h2>
        </div>
    );
}


export function TitleSubsection({ children }: { children: string }) {
    const id = children.toLowerCase().replace(/\s+/g, "-");
    const { register } = useToc();

    useEffect(() => {
        register({ id, text: children, level: 3 });
    }, [id, children, register]);

    return <h3 id={id} className="title-subsection title">
        <span className="title__stroke" aria-hidden="true">{children}</span>
        <span className="title__fill">{children}</span>
    </h3>;
}


export default function TableOfContents() {
    const { entries } = useToc();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = useCallback(
        (id: string) => {
            const scrollTo = () => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            };

            const currentPath = location.pathname;

            if (!location.hash.includes(id)) {
                navigate(`${currentPath}#${id}`);
                setTimeout(scrollTo, 50);
            } else {
                scrollTo();
            }
        },
        [navigate, location]
    );

    return (
        <div>
            <nav className="table-of-contents">
                <h2 className="toc-title">Contents</h2>
                <ul className="list-none">
                    {entries.map(entry => (
                        <li key={entry.id} className="block">
                            <div className={`toc-indent-${entry.level}`}>
                                <button className="toc-link article-link" onClick={() => handleClick(entry.id)}>
                                    {entry.text}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
