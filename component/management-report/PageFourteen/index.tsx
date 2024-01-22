import {ManagementData} from "@/app/types/management"
import {ChartData, ChartOptions} from "chart.js"
import React, {Dispatch, SetStateAction, useState} from "react"
import {Doughnut} from "react-chartjs-2"
import "chart.js/auto"
import styled from "styled-components"
import ChartPopup from "@/component/chart-popup"
import {managementData} from "@/utils/data"

const PageFourteen = ({
  edit,
  management,
  setManagement,
  popupAction,
  popupClose,
  popup,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
  popupAction: any
  popupClose: any
  popup: boolean
}) => {
  interface LineProps {
    options: ChartOptions<"doughnut">
    data: ChartData<"doughnut">
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          data: [4.4, 6.9, 93.5],
          backgroundColor: ["#93C953", "#FEBE10", "#D2232A"],
          weight: 1,
        },
      ],
      labels: ["Green (>=80%)", "Amber(51-79%)", "Red (<=50%)"],
    },
    options: {
      responsive: true,
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        legend: {
          position: "bottom",
          display: true,
          labels: {boxWidth: 10},
        },
        title: {
          display: true,
          text: management.pageFourteen.title2,
          color: "#5E5E5E",
          font: {size: 16, weight: "bold", family: "Inter"},
          fullSize: true,
        },
      },
    },
  })
  return (
    <>
      <div>
        {!edit ? (
          <Title>{management.pageFourteen.title}</Title>
        ) : (
          <>
            <input
              type="text"
              value={management.pageFourteen.title}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the pageFourteen property
                updatedData.pageFourteen.title = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>
      <div>
        {!edit ? (
          <Content
            dangerouslySetInnerHTML={{
              __html: management.pageFourteen.content,
            }}
          ></Content>
        ) : (
          <>
            <textarea
              value={management.pageFourteen.content}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageFourteen.content = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>

      <DoughnutContainer>
        <Doughnut
          data={chartData.data}
          options={chartData.options}
          onClick={edit ? popupAction : null}
        />
      </DoughnutContainer>
      {false ? (
        <ChartPopup
          chartDatas={chartData}
          setChartDatas={setChartData}
          popupClose={popupClose}
        />
      ) : null}
      <div>
        {!edit ? (
          <TitleTwo
            dangerouslySetInnerHTML={{
              __html: managementData.pageFourteen.greenText,
            }}
          ></TitleTwo>
        ) : (
          <>
            <textarea
              value={management.pageFourteen.greenText}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageFourteen.greenText = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>
      <div>
        {!edit ? (
          <Content
            dangerouslySetInnerHTML={{
              __html: managementData.pageFourteen.listTitle,
            }}
          ></Content>
        ) : (
          <>
            <textarea
              value={management.pageFourteen.listTitle}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageFourteen.listTitle = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>
      <div>
        {!edit ? (
          <ContentBg>
            {management.pageFourteen.lists.map((value, index) => {
              return (
                <ul key={index}>
                  <li>{value}</li>
                </ul>
              )
            })}
          </ContentBg>
        ) : (
          <>
            {management.pageFourteen.lists.map((value, index) => {
              return (
                <input
                  key={index}
                  value={value}
                  style={{width: "100%"}}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFourteen.lists[index] = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
              )
            })}
            <textarea
              value={management.pageFourteen.listTitle}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageFourteen.listTitle = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>
      <div>
        {!edit ? (
          <Content
            style={{marginBottom: "82px"}}
            dangerouslySetInnerHTML={{
              __html: managementData.pageFourteen.conclusion,
            }}
          ></Content>
        ) : (
          <>
            <textarea
              value={management.pageFourteen.conclusion}
              style={{width: "100%", marginBottom: "82px"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageFourteen.conclusion = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>
    </>
  )
}

export default PageFourteen

const DoughnutContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`
export const Title = styled.section`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 34px;
`
export const Content = styled.section`
  color: #272727;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 165.5%; /* 23.17px */
  margin-bottom: 22px;
`
const TitleTwo = styled.section`
  color: #93c953;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const ContentBg = styled.section`
  background: #f5f5f5;
  padding: 8px 12px;
`
