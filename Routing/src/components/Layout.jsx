import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>
            <nav className="main-nav">
                <Link to="/">Hjem</Link>
                <Link to="categories">Kategorier</Link>
                <Link to="about">Om oss</Link>
            </nav>

            {children}

            <footer>
                <p>&copy; 2026 Utvikling av interaktive nettsteder - React Router</p>
            </footer>
        </>
    )
}