import React from 'react';
import ProgressBar from './ProgressBar';

export default function HUD({ skor, soalNomor }) {
    return (
        <div id="hud">
            <div className="hud-item">
                <p className="hud-prefix">Soal {soalNomor}/10</p>
                <ProgressBar max={10} current={soalNomor} />
            </div>
            <div className="hud-item">
                <p className="hud-prefix">Skor</p>
                <h1 className="hud-main-text">{skor}</h1>
            </div>
        </div>
    );
}
