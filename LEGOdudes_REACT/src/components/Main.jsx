 function Main() {
    return (
        <main>
            <h2 className="hoved">Velkommen til min side!</h2>
            
            <section className="hero">
                <div className="hero-text">
                    <h2>Bygg din LEGO-verden</h2>
                    <p>
                        Samle ekslusive LEGO-figurer fra Ninjago, City og mer.
                        Begrenset lager - sikre deg favorittene dine i dag!
                    </p>
                </div>
            </section>
            
            <section className="info">
                <div className="info-box">
                    <h3>Rask levering</h3>
                    <p>Alle varer sendes innen 1-2 virkedager.</p>
                </div>
                <div className="info-box">
                    <h3>Begrenset lager</h3>
                    <p>Flere figurer finnes kun i små omlag.</p>
                </div>
                <div className="info-box">
                    <h3>Trygg handel</h3>
                    <p>Enkel betaling og sikker utsjekk.</p>
                </div>
            </section>

            <section className="reviews">
                <h3>Hva kundene sier</h3>
    
                <blockquote>
                    ⭐⭐⭐⭐⭐ 
                    "Rask levering og kjempebra kvalitet!"
                    <span>- Tobias (13)</span>
                </blockquote>
    
                <blockquote>
                    ⭐⭐⭐⭐⭐ 
                    "Fant figurer jeg ikke får tak i andre steder."
                    <span>- Emil (16)</span>
                </blockquote>
            </section>
        </main>
    );
}

export default Main;    