import db from "../mysql";

interface Prop {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const createTutor = async ({ name, surname, email, password }: Prop) => {
  const connection = await db();
  await connection.execute(
    `INSERT INTO tutors(name,surname, email, password)
  VALUES('${name}', '${surname}', '${email}', MD5('${password}'));`
  );
};

export default createTutor;
