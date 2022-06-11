import db from "../mysql";

interface Prop {
  email: string;
  password: string;
}

const login = async ({ email, password }: Prop) => {
    const connection = await db();

    const [result] = await connection.execute(`
    SELECT 
    email,
    password,
    type
    FROM users WHERE email = '${email}'
    `);
    
    return result
};

export default login;
