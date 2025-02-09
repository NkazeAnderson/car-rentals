import React, { useContext } from "react";
import headerImage from "../../assets/services-banner.jpg";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import { backendUrl } from "../../constants";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  AppContext,
  appContextT,
} from "../../components/contextProviders/AppContextProvider";
import { AppEntities } from "common/src";

function LogInPage() {
  const {
    register,
    getValues,
    setError,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>();
  const navigate = useNavigate();
  const { updateFunc } = useContext(AppContext) as appContextT;
  async function login() {
    const { email, password } = getValues();
    console.log(email, password);

    if (!email) {
      setError("email", { message: "Required" });
      return;
    }
    if (!password) {
      setError("password", { message: "Required" });
      return;
    }
    const res = await axios.post(
      `${backendUrl}/login`,
      { email, password },
      { withCredentials: true }
    );
    if (res.status === 200) {
      localStorage.setItem("userId", res.data.id);

      updateFunc(AppEntities.User);
      navigate("/admin");
    } else {
      alert("An error occured");
    }
  }
  return (
    <div className="bg-gray-200">
      <PageHeader backgroundImg={headerImage} text="Log In" />
      <Container>
        <div className=" py-10 flex items-center justify-center">
          <div>
            <Input
              lableText="Email"
              registory={register("email")}
              options={{ __type: "text" }}
              error={errors.email?.message}
            />
            <Input
              lableText="Password"
              registory={register("password")}
              options={{ __type: "text" }}
              error={errors.password?.message}
            />
            <div className="py-5">
              <Button text="Log In" action={login} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LogInPage;
