import db from "../mysql";

const listTutors = async () => {
  const connection = await db();

  await connection.execute(
      `INSERT INTO tutors(userId, about)
    VALUES('2', 'testing about text');`   
  )
        
  const [rows] = await connection.execute("SELECT * FROM users INNER JOIN tutors ON users.id = tutors.userId");
  return rows
};

export default listTutors;
