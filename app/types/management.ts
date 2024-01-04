export type ManagementData = {
  pageFive: {
    heading: {
      title: string
      text1: string
      text2: string
      text3: string
      text4: string
    }
    body: Array<{
      title: string
      first: string
      second: string
      growth: string
    }>
  }
  pageFour: {
    heading: {
      title1: string
      title2: string
      text1: string
      text2: string
      text3: string
      text4: string
      text5: string
      text6: string
    }
    body: Array<{
      title: string
      actual: string
      budget: string
      budgetAchieved: string
      secondActual: string
      growth: string
    }>
  }
  pageOne: {
    title: string
    subtitle: string
    dataPackOne: {
      id: number
      content: string
    }[]
    subTitleTwo: string
    dataPackTwo: {
      id: number
      content: string
    }[]
  }
  pageThree: {
    intro: string
    graphSection: {
      figure: string
      content: string
    }
  }
  pageTwo: {
    title: string
    content: string
    graphSectionTwo: {
      figure: string
      prices: {
        id: number
        amount: string
      }[]
      explanation: string
      graphOne: {
        gross: {
          title: string
          background: string
        }
        profitLoss: {
          title: string
          background: string
        }
        yearTag: string
        dataValue: {
          background: string
          title: string
          id: number
        }[]
      }
      graphTwo: {
        gross: {
          title: string
          background: string
        }
        profitLoss: {
          title: string
          background: string
        }
        yearTag: string
        dataValue: {
          background: string
          title: string
          id: number
        }[]
      }
    }
    figure: string
    prices: {
      id: number
      amount: string
    }[]
    explanation: string
    graphOne: {
      gross: {
        title: string
        background: string
      }
      profitLoss: {
        title: string
        background: string
      }
      yearTag: string
      dataValue: {
        background: string
        title: string
        id: number
      }[]
    }
    graphTwo: {
      gross: {
        title: string
        background: string
      }
      profitLoss: {
        title: string
        background: string
      }
      yearTag: string
      dataValue: {
        background: string
        title: string
        id: number
      }[]
    }
  }
}
