import {ManagementData} from "@/app/types/management"
import {ChartData, ChartOptions} from "chart.js"
import React, {Dispatch, SetStateAction, useState} from "react"
import {Doughnut} from "react-chartjs-2"
import "chart.js/auto"
import styled from "styled-components"
import ChartPopup from "@/component/chart-popup"
import {managementData} from "@/utils/data"
const PageThirtheen = ({
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
          backgroundColor: ["#1C4E7A", "#93C953", "#29ADE4"],
          weight: 1,
        },
      ],
      labels: ["Commercial paper", "FGN bonds", "Eurobonds"],
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
          text: "Figure 4: Investment Portfolio",
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
          <Title>{managementData.pageThirtheen.title}</Title>
        ) : (
          <>
            <input
              type="text"
              value={management.pageThirtheen.title}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageThirtheen.title = e.target.value
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
              __html: managementData.pageThirtheen.content,
            }}
          ></Content>
        ) : (
          <>
            <textarea
              value={management.pageThirtheen.content}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageThirtheen.content = e.target.value
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
      {popup ? (
        <ChartPopup
          chartDatas={chartData}
          setChartDatas={setChartData}
          popupClose={popupClose}
        />
      ) : null}
    </>
  )
}

export default PageThirtheen

const DoughnutContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 270px;
`
const Title = styled.section`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 34px;
`
const Content = styled.section`
  color: #272727;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 165.5%; /* 23.17px */
  margin-bottom: 62px;
`
