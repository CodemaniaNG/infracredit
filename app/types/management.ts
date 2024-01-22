export type ManagementData = {
  pageSixteen: {
    title: string
    body: {
      serialNo: number
      transaction: string
      infrastructure: string
      amount: string
    }[]
    text1: string
    text2: string
  }
  pageThirtheen: {
    title: string
    content: string
    graphInfo: {
      figure: string
    }
  }
  pageFifteen: {
    title: string
    contentOne: {
      greenText: string
      listTitle: string
      lists: string[]
      conclusion: string
    }
    contentTwo: {
      greenText: string
      listTitle: string
      lists: string[]
      conclusion: string
    }
  }
  pageFourteen: {
    title: string
    content: string
    title2: string
    greenText: string
    listTitle: string
    lists: string[]
    conclusion: string
  }
  pageNine: {
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
    body: {
      title: string
      actual: string
      budget: string
      budgetAchieved: string
      secondActual: string
      growth: string
    }[]
  }
  pageEleven: {
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
    body: {
      title: string
      actual: string
      budget: string
      budgetAchieved: string
      secondActual: string
      growth: string
    }[]
  }
  pageEight: {
    title: string
    subTitle: string
    body: {
      firstItem: {
        title: string
        content: string
      }
      secondItem: {
        title: string
        content: string
      }
      thirdItem: {
        title: string
        content: string
      }
      fourthItem: {
        title: string
        content: string
      }
      fifthItem: {
        title: string
        content: string
      }
    }
  }
  pageSeven: {
    title: string
    titleTwo: string
    text1: string
    text2: string
    text3: string
    text4: string
    body: {ratio: string; actual: string; budget: string; actual2: string}[]
  }
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
  pageTen: {
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
  pageSix: {
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
    body: {
      title: string
      actual: string
      budget: string
      budgetAchieved: string
      secondActual: string
      growth: string
    }[]
  }
  pageTwelve: {
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
    body: {
      title: string
      actual: string
      budget: string
      budgetAchieved: string
      secondActual: string
      growth: string
    }[]
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
