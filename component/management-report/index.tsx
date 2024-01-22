import React, {Dispatch, SetStateAction, useState} from "react"
import CoverPage from "./cover-page"
import ManagementLayout from "../layouts/management-layout"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import PageThree from "./PageThree"
import PageFour from "./PageFour"
import PageFive from "./PageFive"
import PageSix from "./PageSix"
import PageSeven from "./PagexSeven"
import PageEight from "./PageEight"
import PageNine from "./PageNine"
import PageTen from "./PageTen"
import PageEleven from "./PageEleven"
import PageTwelve from "./PageTwelve"
import PageThirtheen from "./ThirtheenPage"
import PageFourteen from "./PageFourteen"
import PageFifteen from "./PageFifteen"
import PageSixteen from "./PageSixteen"
import ManageReportLastPage from "./ManageLastPage"

const ManagementReport = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: any
  setManagement: Dispatch<SetStateAction<any>>
}) => {
  const [popup, setPopup] = useState(false)
  return (
    <>
      <CoverPage />
      <ManagementLayout edit={edit} pageNumber={1}>
        <PageOne
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={2}>
        <PageTwo
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={3}>
        <PageThree
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={4}>
        <PageFour
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={5}>
        <PageFive
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={6}>
        <PageSix
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={7}>
        <PageSeven
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={8}>
        <PageEight
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={9}>
        <PageNine
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={10}>
        <PageTen
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={11}>
        <PageEleven
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={12}>
        <PageTwelve
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={13}>
        <PageThirtheen
          edit={edit}
          management={management}
          setManagement={setManagement}
          popup={popup}
          popupAction={() => {
            setPopup(true)
            // setChart5(true)
          }}
          popupClose={() => {
            setPopup(false)
            // setChart5(false)
          }}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={14}>
        <PageFourteen
          edit={edit}
          management={management}
          setManagement={setManagement}
          popup={popup}
          popupAction={() => {
            setPopup(true)
            // setChart5(true)
          }}
          popupClose={() => {
            setPopup(false)
            // setChart5(false)
          }}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={15}>
        <PageFifteen
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit} pageNumber={16}>
        <PageSixteen
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <div style={{width: "873px"}}>
        <ManageReportLastPage />
      </div>
    </>
  )
}

export default ManagementReport
