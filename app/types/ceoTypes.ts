type TableOfContentItem = {
  title: string
  number: number
}

type PageContentItem = {
  title: string
  subTitle?: string[]
}

type PageOneItem = PageContentItem & {
  subTitle: string[]
}
type PageThreeSectionOne = {
  title1: string
  text1: string
  title2: string
  text2: string
}

type PageThree = {
  sectionOne: PageThreeSectionOne
}

type PageTwoItem = {
  title1: string
  text1: string
  title2: string
  text2: string
  title3: string
}

type SectionHeader = {
  header1: string
  header2: string
  header3: string
  header4: string
}

type SectionBodyItem = {
  title: string
  text1: string
  text2: string
  text3: string
}

type SectionBody = {
  header: SectionHeader
  body: SectionBodyItem[]
}

type PageTwoSectionOne = {
  title1: string
  text1: string
  title2: string
  text2: string
  title3: string
}

type PageTwoSectionTwo = {
  pageContent: SectionBody[]
}

type CEOTYPE = {
  tableOfContent: TableOfContentItem[]
  pageOne: PageOneItem[]
  pageTwo: {
    sectionOne: PageTwoSectionOne
    sectionTwo: PageTwoSectionTwo
  }
  pageThree: PageThree
}
