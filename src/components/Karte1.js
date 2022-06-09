const Karte1 = (props) => {
    return (
        <section>
            <img src={props.bild} alt="" />
            <h1>{props.produkt}</h1>
            <h2>{props.preis}</h2>
        </section>
    );
}

export default Karte1;