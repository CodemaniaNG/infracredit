"use client";

import React from "react";
import styles from "./styles.module.css";
import Notification from "@/component/Svgs/notification";
import Image from "next/image";
import SidebarLogo from "@/component/Svgs/sidebarLogo";
import Searchbox from "@/component/Svgs/searchbox";
import { useAppSelector } from "@/reduxtoolkit/store/store";
const Topnav = ({ action }: any) => {
  // let role;
  // if (typeof window !== "undefined") {
  const role = useAppSelector((store) => store.role);
  // }
  return (
    <div className={styles.topNamMain}>
     <div className={styles.logoInfra}>
        <SidebarLogo />
      </div>
      <div className={styles.topbar}>
        <div className={styles.logoSearch}>
          <Searchbox />
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.notif}>
          <div className={styles.notfBox}>
            <Notification />
          </div>
          <div className={styles.userDetail} onClick={action}>
            <div className={styles.user}>
              <h2>Olusanya Ezekiel</h2>
              {/* <p>{role}</p> */}
            </div>
            <Image src="/Image/Ellipse2.png" width="48" height="48" alt="username" />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Topnav;
