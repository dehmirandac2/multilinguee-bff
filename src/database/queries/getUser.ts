import { RowDataPacket } from "mysql2";
import db from "../mysql";

const getUser = async () => {
  const connection = await db();

  const [user] = await connection.execute(`
  SELECT 
    users.id,
    name,
    surname,
    email,
  FROM users 
  `);

      
  return user
};

export default getUser;
