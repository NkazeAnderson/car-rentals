import React from "react";
import Underliner from "../../components/ui/Underliner";
import Container from "../../components/ui/Container";
import IconCard from "../../components/IconCard";
import commitmentIcon1 from "../../assets/High-end-quality-vehicles.png";
import commitmentIcon2 from "../../assets/Customer-Centered-Approach.png";
import commitmentIcon3 from "../../assets/Transparent-Pricing.png";
import commitmentIcon4 from "../../assets/Flexible-Rental-Options.png";
import commitmentCarImage from "../../assets/car-e1735984065531.png";
import bannerIcon1 from "../../assets/Flexible-Rental-Terms.png";
import bannerIcon2 from "../../assets/Professional-Team.png";
import bannerIcon3 from "../../assets/Diverse-range-of-vehicles.png";
import aboutUsImage from "../../assets/about-us.jpg";
import Button from "../../components/ui/Button";
import NumberCount from "../../components/ui/NumberCount";
import ImageGallery from "../../components/ui/ImageGallery";

function FurtherReadingsSection() {
  return (
    <>
      {/* Commitments */}
      <div>
        <h2 className="text-center text-black">
          Our Commitment to our Customers
        </h2>
        <Underliner />
        <div className="py-10"></div>
        <Container>
          <div className="colSmColLg items-stretch">
            <div className="flex-1 space-y-3 ">
              <IconCard
                image={commitmentIcon1}
                title="High-end quality vehicles"
                body="Quality is our top priority. That's why we take pride in offering our customers the highest quality vehicles for rent as we adhere to stringent quality standards."
                justify="right"
              />
              <IconCard
                image={commitmentIcon2}
                title="Customer Centered Approach"
                body="We believe in a customer-centric approach, under which our customers' satisfaction is one of our top priorities."
                justify="right"
              />
            </div>
            <div className="flex-1 p-4 flex items-center">
              <img src={commitmentCarImage} alt="" />
            </div>
            <div className="flex-1 space-y-3">
              <IconCard
                image={commitmentIcon3}
                title="Transparent Pricing"
                body="We strongly believe in offering transparent pricing to our customers that fits their budget and aligns with their wants and needs."
              />
              <IconCard
                image={commitmentIcon4}
                title="Flexible Rental Options"
                body="We provide easy online booking, flexible rental terms, and prompt delivery/pickup options to make your car rental experience as convenient as possible."
              />
            </div>
          </div>
        </Container>
      </div>
      {/* About us */}
      <div className="colSmColLg mt-8">
        <div className="flex-1">
          <img
            className="w-full h-full rounded-lg object-cover border border-black shadow-lg"
            src={aboutUsImage}
            alt=""
          />
        </div>
        <div className="flex-1 p-5 lg:p-10">
          <div className="p-2 lg:p-10 lg:space-y-5 bg-white shadow-xl relative lg:right-[10%] text-justify">
            <h2>About Us</h2>
            <p className="pb-4">
              We at Bon Voyages Car Rental are committed to offering you the
              best, most reliable, and most convenient vehicle rentals that
              align with all your wants and needs. Quality is our top priority.
              That's why we take pride in offering the best and perfect vehicles
              for renting that are of the highest quality. We believe in a
              customer-centric approach, under which our customers' satisfaction
              is one of our top priorities. Our team of professionals works
              closely with our clients and ensures that they receive the best
              service as per their wants for a smooth and hassle-free rental
              experience.
            </p>
            <Button text="Read More" />
          </div>
        </div>
      </div>
      {/* Some Numbers */}
      <div className="bg-violet-900 py-10">
        <Container>
          <h4 className=" uppercase text-white py-4">
            The numbers you need to know
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 ">
            <NumberCount
              value={5}
              valueSize={48}
              description="Branches around the USA"
            />
            <NumberCount
              value={10}
              valueSize={48}
              description="Years of experience"
            />
            <NumberCount
              value={10}
              valueSize={48}
              description="Satisfied Clients"
            />
            <NumberCount
              value={50}
              valueSize={48}
              description="Exclusive vehicles in our Fleet"
            />
          </div>
        </Container>
      </div>
      {/* Banner */}
      <div className="w-full lg:h-[40vh]  h-[100vh]">
        <ImageGallery images={["/banner.jpg"]}>
          <div className="w-full h-full bg-black/70">
            <Container fullHeight>
              <div className="colSmColLg justify-between h-full items-center py-5">
                <IconCard
                  image={bannerIcon1}
                  title="Flexible Rental Terms"
                  body="We take pride in offering reliable and flexible rental options that are customizable as per your needs & requirements."
                  justify="center"
                  white
                />
                <IconCard
                  image={bannerIcon2}
                  title="Professional Team"
                  body="We have a professional team that ensures the smooth and hassle-free process of renting a vehicle. We are available around the clock to assist you."
                  justify="center"
                  white
                />
                <IconCard
                  image={bannerIcon3}
                  title="Diverse range of vehicles"
                  body="We have an exclusive range of vehicles in our Fleet. Whether you want to rent a car or a truck, we have it all for you."
                  justify="center"
                  white
                />
              </div>
            </Container>
          </div>
        </ImageGallery>
      </div>
      {/* Simple Steps */}
      <div className="pb-6">
        <div className="py-12">
          <h2 className="text-center">
            Follow these 4 Simple Steps for a Thriving Travel Experience!
          </h2>
          <Underliner />
        </div>
        <Container>
          <SimpleStep
            title="Complete Your Reservation"
            text="The first step is to complete your reservation by visiting our website. Afterward, enter your preferred pickup & drop-off locations. Along with that, you must fill in all the necessary details."
          />
          <SimpleStep
            title="Select your Ideal Vehicle"
            text="The next step is to select your ideal vehicle. To do this, you need to browse our diverse range of vehicle categories and choose the vehicle that suits your needs. From SUVs to Trucks, we have it all for you."
          />
          <SimpleStep
            title="Confirm Your Booking"
            text="Moving on to the next step, after selecting your ideal vehicle. The next step is to confirm your booking. To do this, you need to proceed to the payment page and make the necessary payment to book your vehicle. "
          />
          <SimpleStep
            title="Share Your Feedback"
            text="The last but not the least step is to share your valuable feedback. Our customers’ feedback matters to us the most. We would love to hear from you."
          />
        </Container>
      </div>
    </>
  );
}

function SimpleStep({ title, text }: { title: string; text: string }) {
  return (
    <div className="colSmColLg">
      <div className=" flex-1">
        <div className="mb-5">
          <h3>{title}</h3>
          <Underliner fullLength thick />
        </div>
      </div>
      <div className=" flex-[2] pl-[10%]">
        <p className=" text-slate-700 pb-2">{text}</p>
      </div>
    </div>
  );
}

export default FurtherReadingsSection;
