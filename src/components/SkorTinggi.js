import React, { useEffect, useState } from 'react';
import { useFirebase } from './Firebase/FirebaseContext';

export default function SkorTinggi() {
    const firebase = useFirebase();
    const [skors, setSkors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.skors().once('value', (snapshot) => {
            const data = snapshot.val();
            const sortedSkors = formatSkorData(data);
            setSkors(sortedSkors);
            setLoading(false);
        });
    }, [firebase]);

    const formatSkorData = (firebaseSkors) => {
        const skors = [];

        for (let key in firebaseSkors) {
            const val = firebaseSkors[key];
            val['key'] = key;
            skors.push(val);
        }

        return skors
            .sort((skor1, skor2) => skor2.skor - skor1.skor)
            .slice(0, 10);
    };

    return (
        <>
            {loading && <div id="loader"></div>}
            {!loading && (
                <>
                    <h1>Skor Tertinggi</h1>
                    <div id="skortertinggiList">
                        {skors.map((record) => (
                            <li key={record.key} className="skor-tertinggi">
                                {record.name} - {record.skor}
                            </li>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}
