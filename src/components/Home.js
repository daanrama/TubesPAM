import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <h1>Quiz Khas Lampung</h1>
            <Link to="/game" className="btn">
                Mulai Game
            </Link>
            <Link to="/skortinggi" className="btn">
                Skor Tertinggi
            </Link>
        </>
    );
}
