import Container from "../../components/ui/Container";
import CategoryCard from "../../components/ui/CategoryCard";

function ServicesSection() {
  return (
    <div>
      <div className="bg-gray-900 py-3">
        <Container>
          <h2 className="text-white font-bold text-[24px]">Our Services</h2>
        </Container>
      </div>
      <div className="py-8">
        <Container>
          <div className="flex flex-col lg:flex-row lg:space-x-3 space-x-0 lg:space-y-0 space-y-6">
            <div className="flex-1">
              <CategoryCard />
            </div>
            <div className="flex-1 ">
              <CategoryCard />
            </div>
            <div className="flex-1 ">
              <CategoryCard />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ServicesSection;
