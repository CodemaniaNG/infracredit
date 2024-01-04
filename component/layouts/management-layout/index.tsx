import React, {ReactNode} from "react"
import styles from "./styles.module.css"
import IconLogo from "@/component/IconComponent/IconLogo"
const ManagementLayout = ({
  children,
  edit,
}: {
  children: ReactNode
  edit: boolean
}) => {
  return (
    <div
      className={edit ? styles.managementLayoutEdit : styles.managementLayout}
    >
      {children}
      <div className={styles.footer}>
        <div className={styles.rulers}></div>
        <div className={styles.flexContainer}>
          <IconLogo height={40} width={133} />
          <div>
            <div className={styles.managementReport}>MANAGEMENT REPORT</div>
            <div className={styles.date}>DECEMBER 2021</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagementLayout
