import React from 'react';
import '../index.css';

const App = () => {
    const [products, setProducts] = React.useState([]);

    // const getUsers = () => {
    //     setProducts([{ id: 1, name: 'первый' }]);
    //     fetch('https://61464fc88f2f4e001730402e.mockapi.io/items').then(res => res.json()).then(data => setProducts(data))
    // };

    const getProducts = async () => {
        try {
            const response = await fetch('https://61464fc88f2f4e001730402e.mockapi.io/items');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            alert('Ошибка при запросе данных');
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={getProducts} style={{ marginBottom: '20px', cursor: 'pointer' }}>
                Получить список продуктов
            </button>
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>{product.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default App;
