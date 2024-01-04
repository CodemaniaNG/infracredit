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
    </>
  )
}

export default ManagementReport
