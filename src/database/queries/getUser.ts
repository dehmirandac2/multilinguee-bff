import db from "../mysql";

const getUser = async (studentId: string) => {
  const connection = await db();
  const [user] = await connection.execute(`
  SELECT 
    id,
    name,
    surname,
    email
  FROM users 
  WHERE id = ${studentId}
  `);

      
  return user
};

export default getUser;
