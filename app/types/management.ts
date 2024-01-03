export type ManagementData = {
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
