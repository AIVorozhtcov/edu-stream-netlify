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

export const examsListQuery = gql`
query ($locale: I18NLocaleCode)  {
  examPages(locale: $locale) {
    data {
      id
        attributes {
          Title   
          LinkName
          
        }
    }
}
}
`

export const coursesListQuery = gql`

query ($locale: I18NLocaleCode)  {
    coursePages(locale: $locale) {
      data {
        id
          attributes {
            Title   
            LinkName
            
          }
      }
  }
}
`

export const coursePageQuery = gql`
query ($locale: I18NLocaleCode, $title: String)  {
  coursePages(locale: $locale,  filters: {LinkName: { eq: $title}}) {
    data {
      id
        attributes {
          Title          
          WelcomeText
          LinkName
          Courses{
            Title
            Price1
            Period1
            PriceComment1
            Price2
            Period2
            PriceComment2
            Features{
              Feature
            }
          }
          WelcomeImage{
            data{
              attributes{
                name
                alternativeText
                url
                formats
                
              }
            }
          }
          MobileWelcomeImage{
            data{
              attributes{
                name
                alternativeText
                url
                formats
                
              }
            }
          }
          
        }
    }
}
}
`
export const examPageQuery = gql`
query ($locale: I18NLocaleCode, $title: String)  {
  examPages(locale: $locale, filters: {LinkName: { eq: $title}}) {
    data {
      id
        attributes {
          Title          
          WelcomeText
          LinkName
          ExamListTitle
          ExamDescription
          Exams{
            Title
            Price
            PaymentLink
            Dates{
              Date
              Time
            }
          }
          FAQ{
            id
            Question
            Answer
          }
          WelcomeImage{
            data{
              attributes{
                name
                alternativeText
                url
                formats
                
              }
            }
          }
          MobileWelcomeImage{
            data{
              attributes{
                name
                alternativeText
                url
                formats
                
              }
            }
          }
          
        }
    }
}
}`

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

export const italianCoursesQuery = gql`
query ($locale: I18NLocaleCode) {
    italianCourses  (locale: $locale) {
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
export const germanCoursesQuery =gql`
query ($locale: I18NLocaleCode) {
    germanCourses (locale: $locale) {
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
            german_courses_category {
                data {
                attributes  {
                  Name 
                }
              }
          }
            
          }
      }
  }
  }
`

export const germanCourseCategoriesQuery =gql`
query ($locale: I18NLocaleCode) {
    germanCoursesCategories (locale: $locale) {
      data {
          attributes {
            Name
            
            
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