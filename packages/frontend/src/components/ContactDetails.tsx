import React from "react";
import { contactInfo } from "../constants";

function ContactDetails() {
  return (
    <div className=" text-white">
      <p className="text-[14px] leading-6">
        Call now:{" "}
        <a className="text-[14px]" href={`tel:${contactInfo.phone}`}>
          {contactInfo.phone}
        </a>
      </p>
      <p className="text-[14px] leading-6">
        Email:{" "}
        <a className="text-[14px]" href={`mailto:${contactInfo.email}`}>
          {contactInfo.email}
        </a>
      </p>
      <p className="text-[14px] leading-6">Address: {contactInfo.address}</p>
    </div>
  );
}

export default ContactDetails;
