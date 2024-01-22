import React from "react"
import styles from "./styles.module.css"
import Linkedin from "@/component/Svgs/linkedin"
import Twitter from "@/component/Svgs/twitter"
import Vimeo from "@/component/Svgs/vimeo"
import IconLogo from "@/component/IconComponent/IconLogo"

const ManageReportLastPage = () => {
  return (
    <div className={styles.lastPage}>
      <div className={styles.lastPageDiv}>
        <div className={styles.lastPageBody}>
          <div className={styles.lastPageSingle}>
            <p>www.infracredit.ng</p>
          </div>
          <div className={styles.lastPageSingle}>
            <Linkedin />
            <p>InfraCredit</p>
          </div>
          <div className={styles.lastPageSingle}>
            <Twitter />
            <p>@InfraCredit</p>
          </div>
          <div className={styles.lastPageSingle}>
            <Vimeo />
            <p>vimeo.com/infracredit</p>
          </div>
        </div>
        <div className={styles.lastPageLogo}>
          <IconLogo />
        </div>
      </div>
    </div>
  )
}

export default ManageReportLastPage
