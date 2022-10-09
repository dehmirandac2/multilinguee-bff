import db from "../mysql";

interface Prop {
  email: string;
  password: string;
}

const login = async ({ email }: Prop) => {
    const connection = await db();

    const [result] = await connection.execute(`
    SELECT 
    id,
    email,
    password,
    type
    FROM users WHERE email = '${email}'
    `);
    
    return result
};

export default login;
