import { gql } from "apollo-server";

const type = gql`

  input Hours {
    init: String, finish: String
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

  input Languages {
    english: Boolean
    spanish: Boolean
    french: Boolean
    german: Boolean
    italian: Boolean
  }

  input TutorInput {
    about: String
    languages: [Languages]!
    classDays: [ClassDays!]!
  }

  type TutorResponse {
    id: ID!
    type: String
  }

  type Mutation {
    createTutor(tutorInput: TutorInput!): TutorResponse!
  }
`;

export default type;
