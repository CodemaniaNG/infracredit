"use client"
import React, {useState} from "react"
import styles from "./styles.module.css"
import Topnav from "@/component/Layout/TopNav"
import Undo from "@/component/Svgs/undo"
import CeoLayout from "@/component/layouts/ceo-layout"
import EditPages from "@/component/edit-pages"
import TableContent from "@/component/ceo-report/table-content"
import CeoPageOne from "@/component/ceo-report/page-one"
import CeoPageTwo from "@/component/ceo-report/page-two"
import CeoPageThree from "@/component/ceo-report/page-three"
import CeoPageFour from "@/component/ceo-report/page-four"
import CeoPageFive from "@/component/ceo-report/page-five"
import CeoPageSix from "@/component/ceo-report/page-six"
import CeoPageSeven from "@/component/ceo-report/page-seven"
import CeoPageEight from "@/component/ceo-report/page-eight"
import CeoPageNine from "@/component/ceo-report/page-nine"
import CeoPageTen from "@/component/ceo-report/page-ten"
import CeoPageEleven from "@/component/ceo-report/page-eleven"
import CeoPageTwelve from "@/component/ceo-report/page-twelve"
import CeoLastPage from "@/component/ceo-report/last-page"
import CeoPageThirteen from "@/component/ceo-report/page-thirteen"
import CeoPageFourteen from "@/component/ceo-report/page-fourteen"
import CeoPageSixteen from "@/component/ceo-report/page-sixteen"
import {useRouter} from "next/navigation"
import ReportDescription from "@/component/report-description"
import Comments from "@/component/comments"
import UserPopup from "@/component/SmallComponents/userPopup"
import {toast} from "react-toastify"
import CeoReport from "@/component/ceo-report"
import Renumeration from "@/component/renumeration-com"
import {credit, finance, managementData, renumeration, risk} from "@/utils/data"
import CreateTable from "@/component/layouts/credit-table"
import ManagementReport from "@/component/management-report"
import {ceoReportData} from "@/component/ceo-report/Data"

const EditReport = ({params}: {params: {slug: string}}) => {
  const router = useRouter()
  const [edit, setEdit] = useState(false)
  const [management, setManagement] = useState(managementData)
  const [ceoreportdata, setCeoreportdata] = useState(ceoReportData)
  const [title, setTitle] = useState(
    params.slug === "CEOReport"
      ? "CEO Report"
      : params.slug === "MANAGEMENTREPORT"
      ? "MANAGEMENT REPORT"
      : params.slug === "FINANCEANDAUDITCOMMITTEE"
      ? "FINANCE AND AUDIT COMMITTEE"
      : params.slug === "NEWBUSINESSANDCREDITCOMMITTEE"
      ? "NEW BUSINESS AND CREDIT COMMITTEE"
      : params.slug === "REMUNERATIONANDNOMINATIONCOMMITTEE"
      ? "REMUNERATION AND NOMINATION COMMITTEE"
      : params.slug === "RISKANDCAPITALCOMMITTEE"
      ? "RISK AND CAPITAL COMMITTEE"
      : ""
  )
  const [popup, setPopup] = useState(false)
  const [overlay, setOverlay] = useState(false)
  return (
    <div className={styles.editReport}>
      <Topnav
        action={() => {
          setOverlay(true)
          setPopup(true)
        }}
      />
      <div
        className={
          popup === true ? styles.editReportBodys : styles.editReportBody
        }
      >
        {overlay && popup ? (
          <UserPopup
            action={() => {
              setOverlay(false)
              setPopup(false)
            }}
          />
        ) : null}
        <div className={styles.editReportHead}>
          <div className={styles.editReportText}>
            <div>
              <Undo
                action={() => {
                  router.push("/admin/dashboard")
                }}
              />
            </div>
            {edit ? (
              <input
                type="text"
                value={title}
                onChange={e => {
                  setTitle(e.target.value)
                }}
              />
            ) : (
              <h2>{title}</h2>
            )}
          </div>
          <div className={styles.editReportAction}>
            {edit ? (
              <button
                onClick={() => {
                  window?.location?.reload()
                }}
              >
                Cancel Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  setEdit(true)
                  toast.warning("Edit Mode")
                }}
              >
                Edit
              </button>
            )}

            <button
              onClick={() => {
                setEdit(false)
                toast.success("Saved Successfully")
              }}
            >
              Save
            </button>
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.editReportContainer}>
          <EditPages />
          <div className={styles.editReportContent}>
            {params.slug === "CEOReport" ? (
              <CeoReport
                edit={edit}
                ceoreportdata={ceoreportdata}
                setCeoreportdata={setCeoreportdata}
              />
            ) : params.slug === "REMUNERATIONANDNOMINATIONCOMMITTEE" ? (
              <Renumeration
                edit={edit}
                data={renumeration}
                title="REMUNERATION AND NOMINATION COMMITTEE"
              />
            ) : params.slug === "FINANCEANDAUDITCOMMITTEE" ? (
              <Renumeration
                edit={edit}
                data={finance}
                title="FINANCE AND AUDIT COMMITTEE"
              />
            ) : params.slug === "RISKANDCAPITALCOMMITTEE" ? (
              <Renumeration
                edit={edit}
                data={risk}
                title="RISK AND CAPITAL COMMITTEE"
              />
            ) : params.slug === "NEWBUSINESSANDCREDITCOMMITTEE" ? (
              <CreateTable
                edit={edit}
                title="NEW BUSINESS/CREDIT COMMITTEE MEETINGS HELD BY CIRCULATION AND VIA TELECONFERENCE"
              />
            ) : params.slug === "MANAGEMENTREPORT" ? (
              <ManagementReport
                edit={edit}
                management={management}
                setManagement={setManagement}
              />
            ) : (
              <h2>Template cannot be found</h2>
            )}
          </div>
          <div className={styles.editReportDiscuss}>
            <ReportDescription />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditReport
