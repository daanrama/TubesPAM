import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from './Firebase/FirebaseContext';
export default function SimpanSkorForm({ skor, skorSimpan }) {
    const [username, setUsername] = useState('');
    const firebase = useFirebase();

    const onUsernameChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    };

    const simpanSkorTinggi = (e) => {
        e.preventDefault();
        const record = {
            name: username,
            skor
        };

        firebase.skors().push(record, () => {
            skorSimpan();
        });
    };

    return (
        <div className="container">
            <h1>Skor: {skor}</h1>
            <form onSubmit={simpanSkorTinggi}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Masukkan Nama"
                    value={username}
                    onChange={onUsernameChange}
                />
                <button type="submit" className="btn" disabled={!username}>
                    Simpan
                </button>
            </form>
            <Link to="/" className="btn">
                Kembali
            </Link>
        </div>
    );
}
