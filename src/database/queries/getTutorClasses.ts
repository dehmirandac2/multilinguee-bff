import db from "../mysql";

const getTutorClasses = async (id: string) => {
  const connection = await db();

  const [tutorClasses] = await connection.execute(`
  SELECT 
    id,
    date,
    init,
    end
  FROM classes 
  WHERE tutorId = "${id}"
  `);
      
  return tutorClasses
};

export default getTutorClasses;
