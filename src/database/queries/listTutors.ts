import { RowDataPacket } from "mysql2";
import db from "../mysql";

const listTutors = async () => {
  const connection = await db();

  const [tutors] = await connection.execute(`
    SELECT users.id, name, surname, MAX(about) AS about, ROUND(AVG(stars), 0) AS stars, COUNT(DISTINCT tutor_reviews.id) AS totalReviews, GROUP_CONCAT(DISTINCT language SEPARATOR ',') AS languages
    FROM users 
      INNER JOIN tutors ON users.id = tutors.userId
      INNER JOIN tutors_languages ON users.id = tutors_languages.userId
      INNER JOIN tutor_reviews ON users.id = tutor_reviews.userId
      GROUP BY users.id;
      `);

      
return tutors
};

export default listTutors;
