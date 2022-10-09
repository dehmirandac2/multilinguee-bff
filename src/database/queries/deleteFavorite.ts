import db from "../mysql";

interface Prop {
  tutorId: string;
  studentId: string;
}

const deleteFavorite = async ({ tutorId, studentId }: Prop) => {
  const connection = await db();
  
  await connection.execute(
    `DELETE FROM favorites
      WHERE tutorId = '${tutorId}' AND '${studentId}';
    `
  );

};

export default deleteFavorite;