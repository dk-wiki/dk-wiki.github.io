import { Link as RLink } from "react-router-dom";

export default function Paragraph({
  children,
  indent = false,
}: {
  children?: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <p className={`paragraph ${indent ? "indent" : ""}`}>
      {children}
    </p>
  );
}

export function Link({ children, to }: { children: React.ReactNode, to: string }) {
  return (
    <RLink className="article-link" to={to}>{children}</RLink>
  )
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-6 space-y-1 marker:opacity-70
                [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal list-outside pl-6 space-y-1 marker:opacity-70">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return <li className="pl-0">{children}</li>;
}