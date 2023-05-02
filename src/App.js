import CategoryItem from './components/category-item/category-item.component';

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
        categories.map((category)=>{
          return (
            <div className='categories-container'>
              <CategoryItem key={category.id} category={category}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
