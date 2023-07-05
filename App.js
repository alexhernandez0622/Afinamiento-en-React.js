};

//Inicializar el componente que contiene el estado compartido
const ParentComponent = () => {
   const [product] = useState([
       {id: 1, name: 'Huevos Criollos', price: 15000},
       {id: 2, name: 'Sancocho de Gallina', price: 4000},
       {id: 3, name: 'Arroz Zulia', price: 20000},
   ]);
   const [cartItem, setCartItems] = useState([]);

   //Inicializar una función para agregar un producto al carrito
   const addProductToCart = (product) => {
       setCartItems([...cartItem, product]);
   };
   return(
       <div>
           <h1>MINIMERCADO DON ALEX</h1>
           <p>Donde comprar es mas barato y sin virus</p>
           <ProductList product={product} addProductToCart={addProductToCart}/>
           <ShoppingCar cartItem={cartItem}/>
       </div>
   );
};

//Inicializar el componente principal que renderiza el componente padre
const App = () => {
   return(
       <div>
           <h1>Demostración de la Aplicación</h1>
           <ParentComponent/>
       </div>
   );
};


export default App;
