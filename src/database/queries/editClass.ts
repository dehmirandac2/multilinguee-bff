import db from "../mysql";

interface Prop {
    id: string;
    topic: string;
    date: string;
    init: string;
    end: string
}

const editClass = async ({ id, topic, date, init, end }: Prop) => {
  const connection = await db();
  await connection.execute(
    `UPDATE classes 
    SET topic = '${topic}',
        date = '${date}',
        init = '${init}',
        end = '${end}'
    WHERE id = '${id}';
    `
  );

};

export default editClass;