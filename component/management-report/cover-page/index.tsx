import React from "react"
import styles from "./styles.module.css"
import IconGradient from "@/component/IconComponent/IconGradient"
import IconGradientTwo from "@/component/IconComponent/IconGradientTwo"
import IconLogo from "@/component/IconComponent/IconLogo"
import IconTextManagement from "@/component/IconComponent/IconTextManagement"

const CoverPage = () => {
  return (
    <div className={styles.coveContainerbg}>
      <div className={styles.iconTextManagement}>
        <IconTextManagement />
      </div>
      <div className={styles.logoContainer}>
        <IconLogo />
      </div>
      <div className={styles.parentSvg}>
        <IconGradient />
      </div>
      <div className={styles.parentSvgTwo}>
        <IconGradientTwo />
      </div>
    </div>
  )
}

export default CoverPage
