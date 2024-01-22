import React, {ReactNode} from "react"
import styles from "./styles.module.css"
import IconLogo from "@/component/IconComponent/IconLogo"
import styled from "styled-components"
const ManagementLayout = ({
  children,
  edit,
  pageNumber,
}: {
  children: ReactNode
  edit: boolean
  pageNumber?: number
}) => {
  return (
    <div
      className={edit ? styles.managementLayoutEdit : styles.managementLayout}
    >
      {children}
      <div className={styles.footer}>
        <div className={styles.rulers}>
          <PageNumber>{pageNumber}</PageNumber>
        </div>
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
const PageNumber = styled.p`
  background-color: #003f6e;
  padding: 7px 13px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  clip-path: polygon(0 0, 100% 0, 87.3% 100%, 12.7% 100%);
`