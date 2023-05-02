import CategoryItem from "../category-item/category-item.component"

import "./directory.style.scss"

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                return (
                    <div className='categories-container'>
                        <CategoryItem key={category.id} category={category} />
                    </div>
                );
            })}
        </div>
    )
}

export default Directory;