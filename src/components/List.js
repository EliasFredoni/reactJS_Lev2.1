import Karte1 from './Karte1';

let product = [
    {
        bild: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
        produkt: "Cocooil",
        preis: "30$",
    },
    {
        bild: "img/Sofortbildkamera.jpeg",
        produkt: "Polaroid",
        preis: "60$",
    },
    {
        bild: "https://cdn.pixabay.com/photo/2017/09/04/13/30/travel-2713982_1280.jpg",
        produkt: "Maui M.",
        preis: "20$",
    },
]

const List = () => {
    return (
        <div>
            <Karte1
                bild={product[0].bild}
                produkt={product[0].produkt}
                preis={product[0].preis}
            />
            <Karte1
                bild={product[1].bild}
                produkt={product[1].produkt}
                preis={product[1].preis}
            />
            <Karte1
                bild={product[2].bild}
                produkt={product[2].produkt}
                preis={product[2].preis}
            />
        </div>
    );
}

export default List;