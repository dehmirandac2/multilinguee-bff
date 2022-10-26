import db from "../mysql";

const getStudentClasses = async (id: string) => {
  const connection = await db();

  const [studentClasses] = await connection.execute(`
  SELECT 
    classes.id,
    classes.tutorId,
    studentId,
    date,
    init,
    end,
    topic,
    about,
    name,
    surname
  FROM classes 
  INNER JOIN users ON classes.tutorId = users.id
  INNER JOIN tutors ON classes.tutorId = tutors.userId
  WHERE date >= CURDATE()
  AND studentId = "${id}"
  `);
      
  return studentClasses
};

export default getStudentClasses;
