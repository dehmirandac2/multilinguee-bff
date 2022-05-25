import { gql } from "apollo-server";

const type = gql`

  input Hours {
    init: String, end: String
  }

  input ClassDays {
    sunday: Hours
    monday: Hours
    tuesday: Hours
    wednesday: Hours
    thursday: Hours
    friday: Hours
    saturday: Hours 
  }

  input TutorInput {
    id: ID!
    about: String
    languages: [String]!
    classDays: [ClassDays!]!
  }

  type TutorResponse {
    id: ID!
  }

  type Mutation {
    createTutor(tutorInput: TutorInput!): TutorResponse!
  }
`;

export default type;
