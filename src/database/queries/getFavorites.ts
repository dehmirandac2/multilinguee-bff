import db from "../mysql";

const getFavorites = async (studentId: string) => {
  const connection = await db();

  const [favorites] = await connection.execute(`
  SELECT 
    users.id,
    name,
    surname,
    MAX(about) AS about,
    CASE WHEN MAX(stars) IS NOT NULL
      THEN ROUND(AVG(stars), 0)
      ELSE 0 END AS stars,
    COUNT(DISTINCT tutor_reviews.id) AS totalReviews, GROUP_CONCAT(DISTINCT language SEPARATOR ',') AS languages
  FROM users 
  JOIN favorites ON favorites.studentId = "${studentId}" and favorites.tutorId = users.id
  INNER JOIN tutors ON users.id = tutors.userId
  INNER JOIN tutors_languages ON users.id = tutors_languages.userId
  LEFT JOIN tutor_reviews ON users.id = tutor_reviews.userId
  GROUP BY users.id;
  `);
      
  return favorites
};

export default getFavorites;
