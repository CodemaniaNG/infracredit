import React, { useState } from "react";
import styles from "./styles.module.css";
// import { sidenav } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logout from "@/component/Svgs/logout";
import LogoutPopup from "@/component/SmallComponents/logoutPopup";
import SidenavData from "@/utils/sidenavData";
import { useDispatch } from "react-redux";
import { clearRole } from "@/reduxtoolkit/slice/role";

const Sidenav = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const [overlay, setOverlay] = useState(false);
  return (
    <div className={styles.sideBar}>
      <div className={styles.sidebarLink}>
        <p>Menu</p>
        {SidenavData({
          color: pathName === "/admin/dashboard" ? "#3F7ABA" : "#545764",
          color2: pathName === "/admin/draft" ? "#3F7ABA" : "#545764",
          color3: pathName === "/admin/deleted" ? "#3F7ABA" : "#545764",
          color4: pathName === "admin/tasks" ? true : false,
          color5: pathName === "/admin" ? true : false,
        })?.map((item, index) => {
          return item !== null ? (
            <div className={pathName === item.link ? `${styles.sideIcon} ${styles.active}` : styles.sideIcon} key={index}>
              <span className={styles.icon}>{item.svg}</span>
              <Link href={item.link}>{item.title}</Link>
            </div>
          ) : null;
        })}
      </div>
      <div className={styles.sidebarOther}>
        {/* <p>Other</p> */}
        <div className={styles.sideIcon}>
          <span>
            <Logout />
          </span>
          <p
            onClick={() => {
              setOverlay(true);
            }}>
            Log Out
          </p>
        </div>
      </div>
      {overlay ? (
        <LogoutPopup
          action1={() => {
            setOverlay(false);
          }}
          action2={() => {
            router.push("/");
            dispatch(clearRole());
          }}
        />
      ) : null}
    </div>
  );
};

export default Sidenav;
