import db from "../mysql";

interface Prop {
  tutorId: string;
  studentId: string;
}

const addFavorite = async ({ tutorId, studentId }: Prop) => {
  const connection = await db();
  
  await connection.execute(
    `INSERT INTO favorites(tutorId, studentId)
      VALUES('${tutorId}', '${studentId}');
    `
  );

  return await connection.query(`SELECT LAST_INSERT_ID();`)
};

export default addFavorite;