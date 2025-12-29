import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomePage from "@/pages/main/home";
import AboutPage from "@/pages/main/about";
import NotFoundPage from "@/pages/main/notfound";
import ArticlePage from "./pages/main/article";

import "@/default-styles.css";

const ROUTES = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/about",
    page: AboutPage,
  },
  {
    path: "/article/:slug",
    page: ArticlePage,
  },
];

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full flex flex-col">
          <Routes>
            {ROUTES.map((route, i) => (
              <Route key={i} path={route.path} element={<route.page />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}


export default App;
