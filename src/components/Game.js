import React, { useState, useEffect, useCallback } from 'react';
import Soal from './Soal';
import { loadSoals } from '../Soal/soalAPI';
import HUD from './HUD';
import SimpanSkorForm from './SimpanSkorForm';

export default function Game({ history }) {
    const [soals, setSoals] = useState([]);
    const [currentSoal, setCurrentSoal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [skor, setSkor] = useState(0);
    const [soalNomor, setSoalNomor] = useState(0);
    const [selesai, setSelesai] = useState(false);

    useEffect(() => {
        loadSoals()
            .then(setSoals)
            .catch(console.error);
    }, []);

    const skorSimpan = () => {
        history.push('/');
    };

    const gantiSoal = useCallback(
        (bonus = 0) => {
            if (soals.length === 0) {
                setSelesai(true);
                return setSkor(skor + bonus);
            }

            const randomSoalIndex = Math.floor(
                Math.random() * soals.length
            );
            const currentSoal = soals[randomSoalIndex];
            const remainingSoals = [...soals];
            remainingSoals.splice(randomSoalIndex, 1);

            setSoals(remainingSoals);
            setCurrentSoal(currentSoal);
            setLoading(false);
            setSkor(skor + bonus);
            setSoalNomor(soalNomor + 1);
        },
        [
            skor,
            soalNomor,
            soals,
            setSoals,
            setLoading,
            setCurrentSoal,
            setSoalNomor
        ]
    );

    useEffect(() => {
        if (!currentSoal && soals.length) {
            gantiSoal();
        }
    }, [currentSoal, soals, gantiSoal]);

    return (
        <>
            {loading && !selesai && <div id="loader" />}

            {!loading && !selesai && currentSoal && (
                <div>
                    <HUD skor={skor} soalNomor={soalNomor} />
                    <Soal
                        soal={currentSoal}
                        gantiSoal={gantiSoal}
                    />
                </div>
            )}

            {selesai && <SimpanSkorForm skor={skor} skorSimpan={skorSimpan} />}
        </>
    );
}
