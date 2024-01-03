"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/component/SmallComponents/Input";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";
import PrimaryButton from "@/component/SmallComponents/buttons/primarybutton";
import Image from "next/image";
import Macbook from "../../../public/images/macbook.png";
import Infrawhitelogo from "@/component/Svgs/infrawhitelogo";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Select from "@/component/SmallComponents/select";
import Loader from "@/component/SmallComponents/loader";
import { setRole } from "@/reduxtoolkit/slice/role";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRoles] = useState("");
  const roles = ["User", "Admin", "Manager", "Supervisor"];
  return (
    <div className={styles.pageCov}>
      <div className={styles.secionA}>
        <div>
          <Infrawhitelogo />
          <h2>We provide you with the best platform to Create and Edit Reports of your choice. </h2>
        </div>
        <Image src={Macbook} alt="macbook" />
      </div>
      <div className={styles.secionB}>
        <div className={styles.sectionBWrapper}>
          <div className={styles.secionLogo}>
            <Ifracoloredlogo />
          </div>
          <div className={styles.sectionBGroup}>
            <div className={styles.inputs}>
              <Select
                text="Select Role"
                selectText="Choose Role"
                options={roles}
                action={(e: any) => {
                  setRoles(e.target.value);
                }}
              />
              <Input
                text="Email Address"
                placeholder="Enter Email Address"
                types="email"
                action={(e: any) => {
                  setUsername(e?.target?.value);
                }}
                value={username}
              />
              <Input
                text="Password"
                placeholder="Enter Password"
                types="Password"
                action={(e: any) => {
                  setPassword(e?.target?.value);
                  if (e?.target?.value.length > 0) {
                    setActive(true);
                  } else {
                    setActive(false);
                  }
                }}
                value={password}
              />
            </div>
            <div className={styles.inputsBtn}>
              {loading ? (
                <Loader />
              ) : (
                <PrimaryButton
                  text="Log In"
                  active={active}
                  action={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      const split = username.split("@");
                      if (split[1] === "infracredit.ng") {
                        dispatch(setRole(role));
                        router.push("/admin/dashboard");
                      } else {
                        toast.error("Email must be an Infracredit email");
                      }
                    }, 2000);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
