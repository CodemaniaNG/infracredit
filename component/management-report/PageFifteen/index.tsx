import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import {Content, ContentBg, Title} from "../PageFourteen"
import {managementData} from "@/utils/data"
import styled from "styled-components"

const PageFifteen = ({
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
      <div>
        {" "}
        <div>
          {!edit ? (
            <Title>{management.pageFifteen.title}</Title>
          ) : (
            <>
              <input
                type="text"
                value={management.pageFifteen.title}
                style={{width: "100%"}}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the pageFourteen property
                  updatedData.pageFifteen.title = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          )}
        </div>
      </div>
      <div>
        {" "}
        <div>
          {!edit ? (
            <Amber>{management.pageFifteen.contentOne.greenText}</Amber>
          ) : (
            <>
              <input
                type="text"
                value={management.pageFifteen.contentOne.greenText}
                style={{width: "100%"}}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the pageFourteen property
                  updatedData.pageFifteen.contentOne.greenText = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          )}
        </div>
      </div>

      <div>
        {" "}
        <div>
          {!edit ? (
            <Content>{management.pageFifteen.contentOne.listTitle}</Content>
          ) : (
            <>
              <input
                type="text"
                value={management.pageFifteen.contentOne.listTitle}
                style={{width: "100%"}}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the pageFourteen property
                  updatedData.pageFifteen.contentOne.listTitle = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          )}
        </div>
      </div>
      <div>
        {" "}
        <div>
          {!edit ? (
            <>
              <ContentBg>
                {management.pageFifteen.contentOne.lists.map((value, index) => {
                  return (
                    <ul key={index}>
                      <li>{value}</li>
                    </ul>
                  )
                })}
              </ContentBg>
            </>
          ) : (
            <>
              {management.pageFifteen.contentOne.lists.map((value, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    value={value}
                    style={{width: "100%"}}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the pageFourteen property
                      updatedData.pageFifteen.contentOne.lists[index] =
                        e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
      <div>
        {!edit ? (
          <Content
            style={{marginBottom: "82px"}}
            dangerouslySetInnerHTML={{
              __html: managementData.pageFifteen.contentOne.conclusion,
            }}
          ></Content>
        ) : (
          <>
            <textarea
              value={management.pageFifteen.contentOne.conclusion}
              style={{width: "100%", marginBottom: "82px"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the title1 property
                updatedData.pageFifteen.contentOne.conclusion = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </div>
      <section>
        <div>
          {" "}
          <div>
            {!edit ? (
              <Amber style={{color: "#D2232A"}}>
                {management.pageFifteen.contentTwo.greenText}
              </Amber>
            ) : (
              <>
                <input
                  type="text"
                  value={management.pageFifteen.contentTwo.greenText}
                  style={{width: "100%"}}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the pageFourteen property
                    updatedData.pageFifteen.contentTwo.greenText =
                      e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
              </>
            )}
          </div>
        </div>

        <div>
          {" "}
          <div>
            {!edit ? (
              <Content>{management.pageFifteen.contentTwo.listTitle}</Content>
            ) : (
              <>
                <input
                  type="text"
                  value={management.pageFifteen.contentTwo.listTitle}
                  style={{width: "100%"}}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the pageFourteen property
                    updatedData.pageFifteen.contentTwo.listTitle =
                      e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div>
          {" "}
          <div>
            {!edit ? (
              <>
                <ContentBg>
                  {management.pageFifteen.contentTwo.lists.map(
                    (value, index) => {
                      return (
                        <ul key={index}>
                          <li>{value}</li>
                        </ul>
                      )
                    }
                  )}
                </ContentBg>
              </>
            ) : (
              <>
                {management.pageFifteen.contentTwo.lists.map((value, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      value={value}
                      style={{width: "100%"}}
                      onChange={e => {
                        const updatedData = {...management}
                        // Update the pageFourteen property
                        updatedData.pageFifteen.contentTwo.lists[index] =
                          e.target.value
                        // Set the updated state
                        setManagement(updatedData)
                      }}
                    />
                  )
                })}
              </>
            )}
          </div>
        </div>
        <div style={{marginBottom: 404}}>
          {!edit ? (
            <Content
              style={{marginBottom: "82px"}}
              dangerouslySetInnerHTML={{
                __html: managementData.pageFifteen.contentTwo.conclusion,
              }}
            ></Content>
          ) : (
            <>
              <textarea
                value={management.pageFifteen.contentTwo.conclusion}
                style={{width: "100%", marginBottom: "82px"}}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageFifteen.contentTwo.conclusion = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default PageFifteen

const Amber = styled.section`
  color: #febe10;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
