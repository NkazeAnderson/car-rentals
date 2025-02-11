import { useContext } from "react";
import CategoryCard from "../../components/ui/CategoryCard";
import Container from "../../components/ui/Container";
import headerImage from "../../assets/vehicle-catgeory-banner.jpg";
import { AppContext } from "../../components/contextProviders/AppContextProvider";
import PageHeader from "../../components/PageHeader";

function CategoriesPage() {
  const context = useContext(AppContext);
  if (!context) {
    return null;
  }
  const { categories } = context;
  return (
    <div>
      <PageHeader
        backgroundImg={headerImage}
        text="From Economy To Luxury, We Have A Wide Range Of Vehicles For You.
            Explore Now."
      />
      <Container>
        {categories.map((item) => (
          <CategoryCard key={String(item._id)} category={item} lgHorizontal />
        ))}
      </Container>
    </div>
  );
}

export default CategoriesPage;
