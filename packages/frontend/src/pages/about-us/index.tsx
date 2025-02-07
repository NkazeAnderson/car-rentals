import React from "react";
import headerImage from "../../assets/about-us-banner-1.jpg";

import PageHeader from "../../components/PageHeader";
import ShadowCard from "../../components/ui/ShadowCard";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { contactInfo } from "../../constants";
import Container from "../../components/ui/Container";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";

type reasonsT = {
  title: string;
  description: string;
};
const reasons: reasonsT[] = [
  {
    title: "High-end quality Vehicles",
    description:
      "Quality is our top priority. That's why we take pride in offering our customers the highest quality vehicles for rent as we adhere to stringent quality standards.",
  },
  {
    title: "Customer Centered Approach",
    description:
      "We believe in a customer-centric approach, under which our customers' satisfaction is one of our top priorities.",
  },
  {
    title: "Transparent Pricing",
    description:
      "We strongly believe in offering transparent pricing to our customers that fits their budget and aligns with their wants and needs.",
  },
  {
    title: "Flexible Rental Options",
    description:
      "We provide easy online booking, flexible rental terms, and prompt delivery/pickup options to make your car rental experience as convenient as possible.",
  },
  {
    title: "Diverse range of vehicles",
    description:
      "We have an exclusive range of vehicles in our Fleet. Whether you want to rent a car or a truck, we have it all for you.",
  },
  {
    title: "Dedicated Team",
    description:
      "We have a dedicated team of professionals who ensure the smooth and hassle-free process of renting a vehicle. We are available around the clock to assist you.",
  },
];

function AboutUsPage() {
  const { register } = useForm<{
    name: string;
    email: string;
    phone: string;
  }>();
  return (
    <div className="pb-4">
      <PageHeader backgroundImg={headerImage} text="About us" />
      <Container>
        <div className="space-y-11">
          <div className="my-16 flex flex-col lg:flex-row items-stretch">
            <div className="lg:flex-[2] space-y-3">
              <h2>Bone Voyage Car-rentals</h2>
              <h5 className=" italic text-gray-500">
                Your Adventure, Our Commitment!
              </h5>
              <p>
                We at Bon Voyages Car Rental are committed to offering you the
                best, most reliable, and most convenient vehicle rentals that
                align with all your wants and needs. Quality is our top
                priority. That's why we take pride in offering the best and
                perfect vehicles for renting that are of the highest quality.
              </p>
              <p>
                We believe in a customer-centric approach, under which our
                customers' satisfaction is one of our top priorities. Our team
                of professionals works closely with our clients and ensures that
                they receive the best service as per their wants for a smooth
                and hassle-free rental experience.
              </p>
            </div>
            <div className="flex-[1] flex justify-center items-center flex-col">
              <Logo />
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-center">Why Choose Our Car Rental Services?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {reasons.map((reason, i) => (
                <ShadowCard key={i}>
                  <div className="space-y-3 capitalize">
                    <div>
                      <p>
                        <b>{reason.title}</b>
                      </p>
                    </div>
                    <div className="text-gray-600 text-[10px] leading-4">
                      <p>{reason.description}</p>
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

export default AboutUsPage;
