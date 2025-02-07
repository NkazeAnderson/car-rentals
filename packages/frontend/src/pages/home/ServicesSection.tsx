import Container from "../../components/ui/Container";
import CategoryCard from "../../components/ui/CategoryCard";
import { useContext } from "react";
import { AppContext } from "../../components/contextProviders/AppContextProvider";
import { trimArray } from "../../utils";

function ServicesSection() {
  const context = useContext(AppContext);
  if (!context || !context.categories.length) {
    return null;
  }
  return (
    <div>
      <div className="bg-gray-900 py-3">
        <Container>
          <h2 className="text-white font-bold text-[24px]">Our Services</h2>
        </Container>
      </div>
      <div className="py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {trimArray(context.categories, 3).map((item) => (
              <div className="">
                <CategoryCard category={item} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ServicesSection;
