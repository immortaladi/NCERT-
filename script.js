const chapters = {
    Math: [
        { name: 'Chapter 1: Real Numbers', pdf: 'mathch1.pdf' },
        { name: 'Chapter 2: Polynomials', pdf: 'mathch2.pdf' },
        { name: 'Chapter 3: Linear Equation in two Variables', pdf: 'mathch3.pdf' },
        { name: 'Chapter 4: Quadratic Equation', pdf: 'mathch4.pdf' },
        { name: 'Chapter 5: Arithmetic Progression', pdf: 'mathch5.pdf' },
        { name: 'Chapter 6: Triangles', pdf: 'mathch6.pdf' },
        { name: 'Chapter 7: Coordinate Geometry', pdf: 'mathch7.pdf' },
        { name: 'Chapter 8: Trigonometry', pdf: 'mathch8.pdf' },
        { name: 'Chapter 9: Application of Trigonometry', pdf: 'mathch9.pdf' },
        { name: 'Chapter 10: Circles', pdf: 'mathch10.pdf' },
        { name: 'Chapter 11: Area Related to Circles', pdf: 'mathch11.pdf' },
        { name: 'Chapter 12: Volume & Surface Area', pdf: 'mathch12.pdf' },
        { name: 'Chapter 13: Statistics', pdf: 'mathch13.pdf' },
        { name: 'Chapter 14: Probability', pdf: 'mathch14.pdf' },
    ],
    Science: [
        { name: 'Chapter 1: Chemical Reactions', pdf: 'sci1.pdf' },
        { name: 'Chapter 2: Acids, Bases, and Salts', pdf: 'sci2.pdf' },
        { name: 'Chapter 3: Metals & Non-Metals', pdf: 'sci3.pdf' },
        { name: 'Chapter 4: Carbon & Its Compounds', pdf: 'sci4.pdf' },
        { name: 'Chapter 5: Life Process', pdf: 'sci5.pdf' },
        { name: 'Chapter 6: Control & Coordination', pdf: 'sci6.pdf' },
        { name: 'Chapter 7: How Do Organisms Reproduce', pdf: 'sci7.pdf' },
        { name: 'Chapter 8: Heredity', pdf: 'sci8.pdf' },
        { name: 'Chapter 9: Light', pdf: 'sci9.pdf' },
        { name: 'Chapter 10: Human Eye & Colourful World', pdf: 'sci10.pdf' },
        { name: 'Chapter 11: Electricity', pdf: 'sci11.pdf' },
        { name: 'Chapter 12: Magnetic Effects of Current', pdf: 'sci12.pdf' },
        { name: 'Chapter 13: Our Environment', pdf: 'sci13.pdf' },
    ],
    English: [
        { name: 'Chapter 1: A Letter To God', pdf: 'eng1.pdf' },
        { name: 'Chapter 2: Nelson Mandela', pdf: 'eng2.pdf' },
        { name: 'Chapter 3: Two Stories About Flying', pdf: 'eng3.pdf' },
        { name: 'Chapter 4: Diary of Anne Frank', pdf: 'eng4.pdf' },
        { name: 'Chapter 5: Glimpses Of India', pdf: 'eng5.pdf' },
        { name: 'Chapter 6: Mijbil the Otter', pdf: 'eng6.pdf' },
        { name: 'Chapter 7: Madam Rides The Bus', pdf: 'eng7.pdf' },
        { name: 'Chapter 8: The Sermon at Benares', pdf: 'eng8.pdf' },
        { name: 'Chapter 9: The Proposal', pdf: 'eng9.pdf' },
    ],
    Geography: [
                { name: 'Chapter 1: Resources & Devlopment', pdf: 'geo1.pdf' },
                { name: 'Chapter 2: Forest & Wildlife Resources', pdf: 'geo2.pdf' },
                { name: 'Chapter 3: Water Resources', pdf: 'geo3.pdf' },
                { name: 'Chapter 4: Agriculture', pdf: 'geo4.pdf' },
                { name: 'Chapter 5: Mineral & Energy Resources', pdf: 'geo5.pdf' },
                { name: 'Chapter 6: Manufacturing Industries', pdf: 'geo6.pdf' },
                { name: 'Chapter 7: Lifeline of Nationak Economy', pdf: 'geo7.pdf' },
             ],

     Economic: [
                { name: 'Chapter 1: Devlopment', pdf: 'eco1.pdf' },
                { name: 'Chapter 2: Sectors of Indian Economy', pdf: 'eco2.pdf' },
                { name: 'Chapter 3: Money & Credit', pdf: 'eco3.pdf' },
                { name: 'Chapter 4: Globalisation & The Indian Economy', pdf: 'eco4.pdf' },
                { name: 'Chapter 5: Consumer Rights', pdf: 'eco5.pdf' },
                
             ],

            History: [
                { name: 'Chapter 1: The Rise of Nationalism in Europe', pdf: 'his1.pdf' },
                { name: 'Chapter 2: Nationalism In India', pdf: 'his2.pdf' },
                { name: 'Chapter 3: The Making of a Global World', pdf: 'his3.pdf' },
                { name: 'Chapter 4: The Age of Industrialisation', pdf:'his4.pdf' },
                { name: 'Chapter 5: Print Culture & The Modern World', pdf:'his5.pdf' },
                
             ],


            Civics: [
                { name: 'Chapter 1: Power Sharing', pdf: 'cs1.pdf' },
                { name: 'Chapter 2: Federalism', pdf: 'cs2.pdf' },
                { name: 'Chapter 3: Gender, Religion & Caste', pdf: 'cs3.pdf' },
                { name: 'Chapter 4: Political Parties', pdf:'cs4.pdf' },
                { name: 'Chapter 5: Outcomes of Democracy', pdf:'cs5.pdf' },
                
             ],

    // Add other subjects similarly
};

function openChapters(subject) {
    const chapterContainer = document.getElementById('chapter-container');
    chapterContainer.innerHTML = '';

    if (chapters[subject]) {
        chapters[subject].forEach(chapter => {
            const chapterDiv = document.createElement('div');
            chapterDiv.className = 'chapter';
            chapterDiv.textContent = chapter.name;
            chapterDiv.onclick = () => window.open(chapter.pdf, '_blank');
            chapterContainer.appendChild(chapterDiv);
        });
    }
}
