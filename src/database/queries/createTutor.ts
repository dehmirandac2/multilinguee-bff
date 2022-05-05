import db from "../mysql";

interface Prop {
  id: string;
  about: string;
}

const createTutor = async ({ id, about }: Prop) => {
  const connection = await db();
  return await connection.execute(
      `BEGIN;
      INSERT INTO tutors(tutorId, about)
        VALUES('${id}', '${about}');
      INSERT INTO tutorLanguages (tutorId, bio) 
        VALUES('${id}', '${about}');
      COMMIT;
      `
  );
};

export default createTutor;