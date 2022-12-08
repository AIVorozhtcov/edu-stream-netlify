import gql from 'graphql-tag';

export const infoPageQuery = gql`
query ($locale: I18NLocaleCode) {
    infopage (locale: $locale) {
      data {
          attributes {
              infoText
          }
      }
  }
  }
`

export const coursesQuery = gql`
query   {
    coursescollections {
      data {
        id
          attributes {
              CourseText
          }
      }
  }
  }
`