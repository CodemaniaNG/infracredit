import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styled from "styled-components"

const PageEight = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  return (
    <div>
      {!edit ? (
        <Title>{management.pageEight.title}</Title>
      ) : (
        <Input
          value={management.pageEight.title}
          onChange={e => {
            const updatedData = {...management}
            // Update the title1 property
            updatedData.pageEight.title = e.target.value
            // Set the updated state
            setManagement(updatedData)
          }}
        />
      )}
      {!edit ? (
        <SubTitle>{management.pageEight.subTitle}</SubTitle>
      ) : (
        <Input
          value={management.pageEight.subTitle}
          onChange={e => {
            const updatedData = {...management}
            // Update the title1 property
            updatedData.pageEight.subTitle = e.target.value
            // Set the updated state
            setManagement(updatedData)
          }}
        />
      )}
      <div>
        {!edit ? (
          <ColorTitle>{management.pageEight.body.firstItem.title}</ColorTitle>
        ) : (
          <Input
            value={management.pageEight.body.firstItem.title}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.firstItem.title = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
        {!edit ? (
          <SubTitle>{management.pageEight.body.firstItem.content}</SubTitle>
        ) : (
          <Input
            value={management.pageEight.body.firstItem.content}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.firstItem.content = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
      </div>
      <div>
        {!edit ? (
          <ColorTitle>{management.pageEight.body.secondItem.title}</ColorTitle>
        ) : (
          <Input
            value={management.pageEight.body.secondItem.title}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.secondItem.title = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
        {!edit ? (
          <SubTitle>{management.pageEight.body.secondItem.content}</SubTitle>
        ) : (
          <Input
            value={management.pageEight.body.secondItem.content}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.secondItem.content = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
      </div>
      <div>
        {!edit ? (
          <ColorTitle>{management.pageEight.body.thirdItem.title}</ColorTitle>
        ) : (
          <Input
            value={management.pageEight.body.thirdItem.title}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.thirdItem.title = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
        {!edit ? (
          <SubTitle>{management.pageEight.body.thirdItem.content}</SubTitle>
        ) : (
          <Input
            value={management.pageEight.body.thirdItem.content}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.thirdItem.content = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
      </div>
      <div>
        {!edit ? (
          <ColorTitle>{management.pageEight.body.fourthItem.title}</ColorTitle>
        ) : (
          <Input
            value={management.pageEight.body.fourthItem.title}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.fourthItem.title = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
        {!edit ? (
          <SubTitle>{management.pageEight.body.fourthItem.content}</SubTitle>
        ) : (
          <Input
            value={management.pageEight.body.fourthItem.content}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.fourthItem.content = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
      </div>
      <div style={{marginBottom: 300}}>
        {!edit ? (
          <ColorTitle>{management.pageEight.body.fifthItem.title}</ColorTitle>
        ) : (
          <Input
            value={management.pageEight.body.fifthItem.title}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.fifthItem.title = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
        {!edit ? (
          <SubTitle>{management.pageEight.body.fifthItem.content}</SubTitle>
        ) : (
          <Input
            value={management.pageEight.body.fifthItem.content}
            onChange={e => {
              const updatedData = {...management}
              // Update the title1 property
              updatedData.pageEight.body.fifthItem.content = e.target.value
              // Set the updated state
              setManagement(updatedData)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default PageEight

const Title = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const Input = styled.input`
  width: 100%;
  height: 24px;
  font-weight: 600;
  margin-top: 16px;
`
const SubTitle = styled.p`
  color: #272727;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 165.5%; /* 23.17px */
  margin-top: 24px;
  margin-bottom: 24px;
`
const ColorTitle = styled.p`
  color: #227cbf;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
