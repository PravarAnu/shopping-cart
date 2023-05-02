import './App.css';

const categories =[
  {
    id: 1, 
    title: "Hats" 
  },
  {
    id: 2,
    title: "Jackets"
  },
  {
    id: 3,
    title: "Sneakers"
  },
  {
    id: 4,
    title: "Womens"
  },
  {
    id: 5,
    title: "Mens"
  }
]

function App() {
  return (
    <div className="App">
      {
        categories.map(({title})=>{
          return (
            <div className='category-container'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
