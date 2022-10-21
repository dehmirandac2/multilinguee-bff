import db from "../mysql";

interface Prop {
    id: string;
    name: string;
    surname: string;
    email: string
}

const editUser = async ({ id, name, surname, email }: Prop) => {
  const connection = await db();
  await connection.execute(
    `UPDATE users 
    SET email = '${email}',
        name = '${name}',
        surname = '${surname}'
    WHERE id = '${id}';
    `
  );

};

export default editUser;