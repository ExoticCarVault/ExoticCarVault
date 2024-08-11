import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 0,
                        img: `https://s2-autoesporte.glbimg.com/Sz7ebFKAVyRMsjFGEtHJutP90x4=/79x23:1554x946/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/4/c/EVrdJ0QjGHW3jseTY2kg/sf90-leosposito-1-.jpg`,
                        category: `Sport`,
                        name: `Ferrari`,
                        model: `Fs90 Stradale`,
                        power: `1000cv`,
                        price: `R$ 4.690.000,00`,
                        engine: `V8`,
                        acceleration: `2.5s`,
                        stock: 6,
                    },
                    {
                        id: 1,
                        img: `https://www.razaoautomovel.com/wp-content/uploads/2022/08/McLaren_Artura_0038_925x520_acf_cropped-925x520.jpg.webp`,
                        category: `Sport`,
                        name: `McLaren`,
                        model: `Artura`,
                        power: `680cv`,
                        price: `R$ 2.307.811,00`,
                        engine: `V-6 twin-turbo `,
                        acceleration: `3.0s`,
                        stock: 4,
                    },
                    {
                        id: 2,
                        img: `https://i0.statig.com.br/bancodeimagens/8b/gi/1y/8bgi1yrgyz2ylq2s1ikryudt4.jpg`,
                        category: `Sport`,
                        name: `Bugatti`,
                        model: `Chiron`,
                        power: `1521cv`,
                        price: `R$ 50.000.000,00`,
                        engine: `W16`,
                        acceleration: `2.5s`,
                        stock: 1,
                    }
                ]);
            }, 2000); // Emula um adiamento de 2 segundos
        });

        fetchProducts.then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="p-6">
            {loading ? (
                <p className="text-center text-lg">Carregando produtos...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;