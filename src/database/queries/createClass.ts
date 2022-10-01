import db from "../mysql";

interface Prop {
  tutorId: string;
  studentId: string;
  date: string,
  init: string,
  end: string
  topic: string
}

const createClass = async ({ tutorId, studentId, date, init, end, topic }: Prop) => {
  const connection = await db();
  
  await connection.execute(
    `INSERT INTO classes(tutorId, studentId, date, init, end, topic)
      VALUES('${tutorId}', '${studentId}', '${date}', '${init}', '${end}', '${topic}');
    `
  );

  return await connection.query(`SELECT LAST_INSERT_ID();`)
};

export default createClass;