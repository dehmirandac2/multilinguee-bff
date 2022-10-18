import db from "../mysql";

const deleteClass = async (classId: string) => {
  const connection = await db();
  await connection.execute(
    `DELETE FROM classes
      WHERE id = '${classId}';
    `
  );

};

export default deleteClass;