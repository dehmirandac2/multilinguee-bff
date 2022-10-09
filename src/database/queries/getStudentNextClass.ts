import db from "../mysql";

const getStudentNextClass = async (studentId: string) => {
  const connection = await db();

  const [studentNextClass] = await connection.execute(`
  SELECT 
    id,
    tutorId,
    studentId,
    date,
    init,
    end,
    topic
  FROM classes 
  WHERE date >= CURDATE()
  AND studentId = '${studentId}'
  ORDER BY date
  LIMIT 1
  `);
      
  return studentNextClass
};

export default getStudentNextClass;