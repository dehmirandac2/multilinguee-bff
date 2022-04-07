import db from "../mysql";

const listTutors = async () => {
  const connection = await db();
  const [rows, fields] = await connection.execute("SELECT * FROM tutors");
};

export default listTutors;
