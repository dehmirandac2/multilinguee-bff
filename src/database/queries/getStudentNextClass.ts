import db from "../mysql";

const getStudentNextClass = async (studentId: string) => {
  const connection = await db();

  const [studentNextClass] = await connection.execute(`
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
  AND studentId = '${studentId}'
  ORDER BY date
  LIMIT 1
  `);
      
  return studentNextClass
};

export default getStudentNextClass;