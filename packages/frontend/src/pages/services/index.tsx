import headerImage from "../../assets/services-banner.jpg";
import img1 from "../../assets/Short-Term-Rentals.jpg";
import img2 from "../../assets/Long-Term-Rentals.jpg";
import img3 from "../../assets/Driver-Services.jpg";
import img4 from "../../assets/Lease-Purchase.jpg";
import img5 from "../../assets/Cleaning-Maintenance.jpg";
import img6 from "../../assets/Special-Orders.jpg";
import PageHeader from "../../components/PageHeader";

type serviceT = { img: any; title: string; description: string };

const services: serviceT[] = [
  {
    img: img1,
    title: "Short-Term Rentals",
    description:
      "Do you need a car for just a few days to enjoy your trip? Don’t worry. We are here to offer you the best short-term car rental experience. Whether you want short-term rentals for your business needs or family vacation needs, we have a wide range of fleets to help address your unique needs. ",
  },
  {
    img: img2,
    title: "Long-Term Rentals",
    description:
      "Are you looking to rent a vehicle for an extended period of time? If yes, then don’t worry. We are here to help you. Whether you want to attend business meetings or want to go on a vacation, we offer exclusive long-term rental options that are reliable and of great value just for you.",
  },
  {
    img: img3,
    title: "Driver Services",
    description:
      "Are you tired of self-driving and want to enjoy the breathtaking window views stress-free? Then we have the perfect solution for you. Our exclusive driver services ensure that you travel with convenience and peace of mind while enjoying the journey.",
  },
  {
    img: img4,
    title: "Lease & Purchase",
    description:
      "Do you want to go beyond just renting a vehicle and looking for lease and purchase options? If yes, then we are here to assist you. We offer flexible and convenient lease and purchase options that meet your needs in the best possible way.",
  },
  {
    img: img5,
    title: "Cleaning & Maintenance",
    description:
      "When it comes to maintaining a sustainable environment while traveling, we assure you of the best and highest quality standards. Our exceptional cleaning & maintenance services help ensure that your rented vehicle looks well-maintained and ready for your journey.",
  },
  {
    img: img6,
    title: "Special Orders",
    description:
      "We understand that every customer has unique needs. Our Special Orders service allows you to request specific vehicles or custom requirements, from luxury models to unique features. Let us know your preferences, and we’ll work to fulfill your request for a personalized rental experience",
  },
];

function ServicesPage() {
  return (
    <div className="bg-gray-700">
      <PageHeader backgroundImg={headerImage} text="Services" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-700 text-white">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col ${
              index === 2 || index == 3 ? "lg:flex-row-reverse" : "lg:flex-row"
            } space-x-3`}
          >
            <div className="flex-1">
              <img className="object-cover" src={service.img} alt="" />
            </div>
            <div className="flex-1 text-center">
              <h3 className="py-3 hover:text-orange-600">{service.title}</h3>
              <p className="px-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
