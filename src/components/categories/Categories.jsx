import './Categories.scss';
import CategoryItem from '../category-item/CategoryItem';

const Categories = ({ categories }) => {
  const renderCategories = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return <div className="categories-container">{renderCategories}</div>;
};

export default Categories;
