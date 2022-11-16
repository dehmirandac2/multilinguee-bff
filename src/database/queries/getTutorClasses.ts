import db from "../mysql";

const getTutorClasses = async (id: string) => {
  const connection = await db();
  const [tutorClasses] = await connection.execute(`
  SELECT 
    classes.id,
    classes.tutorId,
    studentId,
    date,
    init,
    end,
    topic,
    name,
    surname
    FROM classes 
  INNER JOIN users ON classes.studentId = users.id
  WHERE date >= CURDATE()
  AND tutorId = "${id}"
  `);
      
  return tutorClasses
};

export default getTutorClasses;
