import React from "react";
import headerImage from "../../assets/contact-us-banner-1.jpg";

import PageHeader from "../../components/PageHeader";
import ShadowCard from "../../components/ui/ShadowCard";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { contactInfo } from "../../constants";
import Container from "../../components/ui/Container";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";

type branchesT = {
  location: string;
  phone: string;
  email: string;
  address: string;
};
const branches: branchesT[] = [
  {
    location: "Lanham Maryland.",
    phone: "202 696 6487",
    email: "Bonvoyagecarrental22@gmail.com",
    address: "9500 Annapolis Road Suite B5 Lanham MD 20706",
  },
  {
    location: "Lanham Maryland.",
    phone: "202 696 6487",
    email: "Bonvoyagecarrental22@gmail.com",
    address: "9937 Good Luck Road Lanham MD 20706",
  },
  {
    location: "Bloomington Minnesota",
    phone: "+1 (612) 685-2055",
    email: "Bonvoyagecarservices18@gmail.com",
    address: "7900 International Drive Suite 300 Bloomington MN 55425",
  },
  {
    location: "Clarksville Tennessee",
    phone: "+16412442374 , +19319809124",
    email: "Bonvoyagecarrentaltn@gmail.com",
    address: "1959 Fort Campbell Blvd, #1 CLarksville Tennessee 37042",
  },
  {
    location: "Woodbridge Virginia ",
    phone: "804-220-5405",
    email: "Bonvoyageva@gmail.com",
    address: "1346 Old Bridge Rd, Suite 101 Woodbridge, VA 22192",
  },
];

function ContactUsPage() {
  const { register } = useForm<{
    name: string;
    email: string;
    phone: string;
  }>();
  return (
    <div className="pb-4">
      <PageHeader backgroundImg={headerImage} text="Services" />
      <Container>
        <div className="space-y-11">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <ShadowCard>
              <div className="flex flex-col items-center space-y-3 text-center">
                <HiLocationMarker className="text-[50px] text-orange-600" />
                <p>{contactInfo.address}</p>
              </div>
            </ShadowCard>
            <ShadowCard>
              <div className="flex flex-col items-center space-y-3 text-center">
                <HiMail className="text-[50px] text-orange-600" />
                <p className="text-orange-600">
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </ShadowCard>
            <ShadowCard>
              <div className="flex flex-col items-center space-y-3 text-center">
                <HiPhone className="text-[50px] text-orange-600" />
                <p className="text-orange-600">
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
            </ShadowCard>
          </div>
          <div className="my-16 flex flex-col lg:flex-row pt-10 space-x-10">
            <div className="lg:flex-[2] space-y-3">
              <Logo />
              <h2>Bone Voyage Car-rentals</h2>
              <h5 className=" italic text-gray-500">
                Feel free to contact us anytime, anywhere!
              </h5>
              <p>
                We believe in a customer-centric approach, under which our
                customers' satisfaction is one of our top priorities. Our team
                of professionals works closely with our clients and ensures that
                they receive the best service as per their wants for a smooth
                and hassle-free rental experience. Our dedicated team of
                customer support is available 24/7 to address all your queries
                and concerns as quickly as possible. Your perfect rental is just
                a call or click away—let us make your journey effortless!
              </p>
            </div>
            <div className="flex-[1]">
              <ShadowCard>
                <div className="pb-8">
                  <Input
                    registory={register("name")}
                    lableText="Full name"
                    options={{ __type: "text" }}
                  />
                  <Input
                    registory={register("email")}
                    lableText="Email"
                    options={{ __type: "text" }}
                  />
                  <Input
                    registory={register("phone")}
                    lableText="Phone"
                    options={{ __type: "text" }}
                  />
                  <Button text="Submit" />
                </div>
              </ShadowCard>
            </div>
          </div>
          <div className="pt-[100px]">
            <h2 className="text-center pb-10">
              Our branches across the United States
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {branches.map((branch, i) => (
                <ShadowCard key={i}>
                  <div className="space-y-3 capitalize">
                    <div>
                      <p>
                        <b>Bon Voyage Car Rental Corporation</b>
                      </p>
                      <p className="text-gray-400 italic">{branch.location}</p>
                    </div>
                    <div className="text-gray-600  ">
                      <p className="text-[14px] leading-8">{branch.phone}</p>
                      <p className="text-[14px] leading-8">{branch.email}</p>
                      <p className="text-[14px] leading-8">{branch.address}</p>
                    </div>
                  </div>
                </ShadowCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUsPage;
