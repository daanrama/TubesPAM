export const loadSoals = async () => {
    const url = `https://mocki.io/v1/7198eb9f-de26-44e0-ac92-ca1939ac4225`;

    try {
        const res = await fetch(url);
        const { results } = await res.json();
        return convertSoalsFromAPI(results);
    } catch (err) {
        console.error(err);
    }
};

const convertSoalsFromAPI = (rawSoals) => {
    return rawSoals.map((loadedSoal) => {
        const formattedSoal = {
            soal: loadedSoal.soal,
            answerChoices: [...loadedSoal.incorrect_answers]
        };

        formattedSoal.jawab = Math.floor(Math.random() * 4);

        formattedSoal.answerChoices.splice(
            formattedSoal.jawab,
            0,
            loadedSoal.correct_answer
        );

        return formattedSoal;
    });
};
