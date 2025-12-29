import { TocProvider } from "./toccontext";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex min-h-full" id="global">
      <div className="page w-full max-w-5xl mx-auto p-4" id="page">
        <TocProvider>
          {children}
        </TocProvider>
      </div>
    </div>
  );
}
