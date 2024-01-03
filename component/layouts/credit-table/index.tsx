import React from "react"
import CreditTableComponent from "../credit"
import OtherLayout from "../other-layout"
import SecondPage from "../credit/secondPage"

const CreateTable = ({edit, title}: {edit: boolean; title: string}) => {
  return (
    <>
      <OtherLayout>
        <CreditTableComponent edit={edit} titles={title} />
      </OtherLayout>
      <OtherLayout>
        <SecondPage edit={edit} titles={title} />
      </OtherLayout>
    </>
  )
}

export default CreateTable
