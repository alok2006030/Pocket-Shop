import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "75vh" }}>
                <Toaster />

                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    tilte: "Market-Shop In Covid",
    description: "Mern stack project",
    keywords: "React, NodeJs, MongoDB, Express, HTML,CSS, JS",
    author: "Amar Technology"
}
export default Layout