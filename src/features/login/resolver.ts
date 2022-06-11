import { ApolloError } from "apollo-server";
import jwt from "jsonwebtoken";
import md5 from "md5";

import login from "../../database/queries/login";

interface User {
  password: string;
  email: string,
  type: string
}

const APP_SECRET = 'multilinguee_my_first_jwt_experience';

const resolvers = {
  Mutation: {
    login: async (_parent: any, { email: emailInput, password: passwordInput }: any) => {
      try {
        const result = await login({email: emailInput, password: passwordInput});

        const user: User[] = Object.values(JSON.parse(JSON.stringify(result)));
        const {type, email, password} = user[0]
        
        if (!user) {
          throw new Error('No user found')
        }

        if(md5(passwordInput) !== password){
          throw new Error('Invalid password')
        }
    
        const token = jwt.sign({ email, type }, APP_SECRET)
        return { token, type };
      } catch (err) {
        throw new ApolloError("Email/Password is not right");
      }
    },
  },
};

export default resolvers;
