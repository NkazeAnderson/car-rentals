import { countryList, userT } from "common/src/zodSchemas";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import Input from "../../components/ui/Input";

function UserInfoForm({ form }: { form: UseFormReturn<userT> }) {
  const { register } = form;
  return (
    <div>
      <h3 className="py-4">Billing Information</h3>
      <div className="flex space-x-3">
        <div className="flex-1">
          <Input
            lableText="First name"
            registory={register("firstName")}
            options={{ __type: "text" }}
          />
        </div>
        <div className="flex-1">
          <Input
            lableText="Last name"
            registory={register("lastName")}
            options={{ __type: "text" }}
          />
        </div>
      </div>
      <div>
        <Input
          registory={register("country")}
          lableText="Country"
          options={{ __type: "select", options: countryList }}
        />
      </div>
      <div>
        <Input
          registory={register("street")}
          lableText="Street address"
          options={{ __type: "text" }}
        />
      </div>
      <div>
        <Input
          registory={register("city")}
          lableText="City"
          options={{ __type: "text" }}
        />
      </div>
      <div>
        <Input
          registory={register("state")}
          lableText="State"
          options={{ __type: "text" }}
        />
      </div>
      <div>
        <Input
          registory={register("zipCode")}
          lableText="Zip Code"
          options={{ __type: "text" }}
        />
      </div>
      <div>
        <Input
          registory={register("phone")}
          lableText="Phone"
          options={{ __type: "text" }}
        />
      </div>
      <div>
        <Input
          registory={register("email")}
          lableText="Email address"
          options={{ __type: "text" }}
        />
      </div>
    </div>
  );
}

export default UserInfoForm;
