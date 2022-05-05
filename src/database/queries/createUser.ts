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
  return await connection.execute(
    `INSERT INTO users(name,surname, email, password, type)
  VALUES('${name}', '${surname}', '${email}', MD5('${password}'), '${type}');`
  );
};

export default createUser;
