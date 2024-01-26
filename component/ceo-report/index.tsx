import React, {Dispatch, SetStateAction, useState} from "react"
import TableContent from "./table-content"
import CeoPageOne from "./page-one"
import CeoPageTwo from "./page-two"
import CeoPageThree from "./page-three"
import CeoPageFour from "./page-four"
import CeoPageFive from "./page-five"
import CeoPageSix from "./page-six"
import CeoPageSeven from "./page-seven"
import CeoPageEight from "./page-eight"
import CeoPageNine from "./page-nine"
import CeoPageTen from "./page-ten"
import CeoPageEleven from "./page-eleven"
import CeoPageTwelve from "./page-twelve"
import CeoLastPage from "./last-page"
import CeoPageThirteen from "./page-thirteen"
import CeoPageFourteen from "./page-fourteen"
import CeoPageSixteen from "./page-sixteen"
import CeoLayout from "../layouts/ceo-layout"

const CeoReport = ({
  edit,
  ceoreportdata,
  setCeoreportdata,
}: {
  edit: boolean
  ceoreportdata: CEOTYPE
  setCeoreportdata: Dispatch<SetStateAction<CEOTYPE>>
}) => {
  const [popup, setPopup] = useState(false)
  const [chart, setChart] = useState(false)
  const [chart1, setChart1] = useState(false)
  const [chart2, setChart2] = useState(false)
  const [chart3, setChart3] = useState(false)
  const [chart4, setChart4] = useState(false)
  const [chart5, setChart5] = useState(false)
  return (
    <>
      <CeoLayout edit={edit} number={1}>
        <TableContent
          edit={edit}
          ceoreportdata={ceoreportdata}
          setCeoreportdata={setCeoreportdata}
        />
      </CeoLayout>
      <CeoLayout edit={edit} number={2}>
        <CeoPageOne
          edit={edit}
          ceoreportdata={ceoreportdata}
          setCeoreportdata={setCeoreportdata}
        />
      </CeoLayout>
      <CeoLayout edit={edit} number={3}>
        <CeoPageTwo
          edit={edit}
          ceoreportdata={ceoreportdata}
          setCeoreportdata={setCeoreportdata}
          popupAction={() => {
            setPopup(true)
            setChart(true)
          }}
          popupClose={() => {
            setPopup(false)
            setChart(false)
          }}
          popup={chart}
        />
      </CeoLayout>
      <CeoLayout edit={edit} number={4}>
        <CeoPageThree
          edit={edit}
          ceoreportdata={ceoreportdata}
          setCeoreportdata={setCeoreportdata}
          popupAction1={() => {
            setPopup(true)
            setChart1(true)
          }}
          popupClose1={() => {
            setPopup(false)
            setChart1(false)
          }}
          popupAction2={() => {
            setPopup(true)
            setChart2(true)
          }}
          popupClose2={() => {
            setPopup(false)
            setChart2(false)
          }}
          popupAction3={() => {
            setPopup(true)
            setChart3(true)
          }}
          popupClose3={() => {
            setPopup(false)
            setChart3(false)
          }}
          popup={popup}
          popup1={chart1}
          popup2={chart2}
          popup3={chart3}
        />
      </CeoLayout>
      <CeoLayout edit={edit} number={5}>
        <CeoPageFour edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={6}>
        <CeoPageFive edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={7}>
        <CeoPageSix edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={8}>
        <CeoPageSeven edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={9}>
        <CeoPageEight
          edit={edit}
          popup={popup}
          popup1={chart4}
          popupAction={() => {
            setPopup(true)
            setChart4(true)
          }}
          popupClose={() => {
            setPopup(false)
            setChart4(false)
          }}
        />
      </CeoLayout>
      <CeoLayout edit={edit} number={10}>
        <CeoPageNine edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={11}>
        <CeoPageTen edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={12}>
        <CeoPageEleven
          edit={edit}
          popup={popup}
          popup1={chart5}
          popupAction={() => {
            setPopup(true)
            setChart5(true)
          }}
          popupClose={() => {
            setPopup(false)
            setChart5(false)
          }}
        />
      </CeoLayout>
      <CeoLayout edit={edit} number={13}>
        <CeoPageTwelve edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={14}>
        <CeoPageThirteen edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={15}>
        <CeoPageFourteen edit={edit} />
      </CeoLayout>
      <CeoLayout edit={edit} number={17}>
        <CeoPageSixteen edit={edit} />
      </CeoLayout>
      <CeoLastPage />
    </>
  )
}

export default CeoReport
