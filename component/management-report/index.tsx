import React, {Dispatch, ReactNode, SetStateAction} from "react"
import CoverPage from "./cover-page"
import ManagementLayout from "../layouts/management-layout"
import {ManagementData} from "@/app/types/management"
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

const ManagementReport = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: any
  setManagement: Dispatch<SetStateAction<any>>
}) => {
  return (
    <>
      <CoverPage />
      <ManagementLayout edit={edit}>
        <PageOne
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageTwo
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageThree
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageFour
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageFive
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageSix
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageSeven
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageEight
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageNine
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageTen
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageEleven
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout edit={edit}>
        <PageTwelve
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
    </>
  )
}

export default ManagementReport
