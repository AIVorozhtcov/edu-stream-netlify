import gql from 'graphql-tag';

export const infoPageQuery = gql`
query {
    infopage {
      data {
          attributes {
              infoText
          }
      }
  }
  }
`

export const coursesQuery = gql`
query {
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