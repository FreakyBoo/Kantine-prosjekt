// Menydata for hver dag
const ukesmeny = {
    mandag: "Havregrøt med frukt og nøtter",
    tirsdag: "Yoghurt med granola og frukt, og Wraps med grønnsaker og hummus.",
    onsdag: "Grove rundstykker med pålegg", 
    torsdag: "Vegetarlasagne.",
    fredag: "Kyllingsalat."
};

// Funksjon for å vise menyen for valgt dag
function visMeny(dag) {
    const menyElement = document.getElementById('meny');
    const menyInnhold = document.getElementById('meny-innhold');
    
    // Oppdater innholdet i meny-seksjonen
    menyInnhold.innerHTML = ukesmeny[dag];
    
    // Vis menyen
    menyElement.style.display = 'block';
}

// Ta knappen og bruk en addEventListener kode for å få click funksjon
document.getElementById('darkModeToggle').addEventListener('click', function() {
    // Toggle mørke modus på nettside
    document.body.classList.toggle('dark-mode');
});
