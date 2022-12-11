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
export const examPageQuery = gql`
query  {
  examPage (id:2) {
    data {
      id
      attributes {
          Title          
          WelcomeText
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

export const oifExamsQuery = gql`
query ($locale: I18NLocaleCode) {
    oifExams (locale: $locale) {
      data {
          attributes {
              Title
            	Price
              PaymentLink
            	Dates{
                Date
                Time
              }
          }
      }
  }
  }`

  export const osdExamsQuery = gql`
  query ($locale: I18NLocaleCode) {
      osdExams (locale: $locale) {
        data {
            attributes {
                Title
                Price
                PaymentLink
                Dates{
                  Date
                  Time
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