import db from "../mysql";

interface Prop {
  tutorId: string,
  studentId: string
}
const getTutor = async ({tutorId, studentId}: Prop) => {
  const connection = await db();

  const [tutor] = await connection.execute(`
  SELECT 
    users.id,
    name,
    surname,
    CASE WHEN f.tutorId IS NOT NULL
      THEN true
      ELSE false END AS isFavorite,
    MAX(about) AS about,
    CASE WHEN MAX(stars) IS NOT NULL
      THEN ROUND(AVG(stars), 0)
      ELSE 0 END AS stars,
    COUNT(DISTINCT tutor_reviews.id) AS totalReviews, GROUP_CONCAT(DISTINCT language SEPARATOR ',') AS languages
  FROM users 
  INNER JOIN tutors ON users.id = tutors.userId
  INNER JOIN tutors_languages ON users.id = tutors_languages.userId
  LEFT JOIN tutor_reviews ON users.id = tutor_reviews.userId
  LEFT JOIN favorites AS f ON f.studentId = "${studentId}" and f.tutorId = users.id
  WHERE users.id = "${tutorId}"
  `);
      
  return tutor
};

export default getTutor;
