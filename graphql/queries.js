import gql from 'graphql-tag';

export const infoPageQuery = gql`
query ($locale: I18NLocaleCode) {
    infoPage (locale: $locale) {
      data {
          attributes {
              InfoText
          }
      }
  }
  }
`

export const englishCoursesQuery = gql`
query ($locale: I18NLocaleCode) {
    englishCourses  (locale: $locale) {
      data {
          attributes  {
            Title
            Price1
            Period1
            PriceComment1
            Price2
            Period2
            PriceComment2
            FeaturesList
            
            
          }
      }
  }
  }
`

/*export const coursesQuery = gql`
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
*/