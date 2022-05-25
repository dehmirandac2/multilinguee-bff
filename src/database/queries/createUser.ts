import db from "../mysql";

interface Prop {
  name: string;
  surname: string;
  email: string;
  password: string;
  type: string;
}

const createUser = async ({ name, surname, email, password, type }: Prop) => {
  const connection = await db();
  await connection.execute(
    `INSERT INTO users(name,surname, email, password, type)
  VALUES('${name}', '${surname}', '${email}', MD5('${password}'), '${type}');
  `
  );

  return await connection.query(`SELECT LAST_INSERT_ID();`)
};

export default createUser;
