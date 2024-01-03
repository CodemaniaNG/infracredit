import React, {Dispatch, ReactNode, SetStateAction} from "react"
import CoverPage from "./cover-page"
import ManagementLayout from "../layouts/management-layout"
import {ManagementData} from "@/app/types/management"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import PageThree from "./PageThree"

const ManagementReport = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  return (
    <>
      <CoverPage />
      <ManagementLayout>
        <PageOne
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout>
        <PageTwo
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
      <ManagementLayout>
        <PageThree
          edit={edit}
          management={management}
          setManagement={setManagement}
        />
      </ManagementLayout>
    </>
  )
}

export default ManagementReport
