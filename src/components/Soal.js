import React, { useState } from 'react';

export default function Soal({ soal, gantiSoal }) {
    const [classToApply, setClassToApply] = useState('');
    const [pilihJawab, setPilihJawab] = useState(-1);
    const [jawaban, setJawaban] = useState(false);

    const cekJawab = (pilihJawab) => {
        if (jawaban) return;

        setJawaban(true);
        setPilihJawab(pilihJawab);

        const classToApply =
            pilihJawab === soal.jawab ? 'correct' : 'incorrect';
        setClassToApply(classToApply);
        const bonus = pilihJawab === soal.jawab ? 10 : 0;

        setTimeout(() => {
            setPilihJawab(-1);
            setJawaban(false);
            gantiSoal(bonus);
        }, 1000);
    };

    return (
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: soal.soal }}></h2>
            {soal.answerChoices.map((choice, index) => (
                <div
                    key={index}
                    className={`choice-container ${pilihJawab === index &&
                        classToApply}`}
                    onClick={() => cekJawab(index)}
                >
                    <p className="choice-prefix">{index + 1}</p>
                    <p
                        className="choice-text"
                        dangerouslySetInnerHTML={{ __html: choice }}
                    ></p>
                </div>
            ))}
        </div>
    );
}
