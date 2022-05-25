import db from "../mysql";

interface Prop {
  id: string;
  about: string;
  languages: string[],
  classDays: any,
}

const createTutor = async ({ id, about, languages, classDays }: Prop) => {
  const connection = await db();
  const finalLanguages = languages.reduce((acc, el, index) => {
    return `${acc} ${index > 0 ? ',':  ''} ('${id}', '${el}')`
  }, '')

  const finalClassDays = Object.keys(classDays[0]).reduce((acc, el, index) => {
    const { init, end } = classDays[0][el];

    return `${acc} ${index > 0 ? ',':  ''} ('${id}', '${el}', '${init}', '${end}')`
  }, '')
  
  await connection.execute(
    `INSERT INTO tutors(userId, about)
      VALUES('${id}', '${about}');
    `
  );
  await connection.execute(
    `INSERT INTO tutors_class_days(userId, weekDay, hourInit, hourEnd)
      VALUES ${finalClassDays};
    `
  );
  return await connection.execute(
  `INSERT INTO tutors_languages(userId, language) 
      VALUES ${finalLanguages}`)
};

export default createTutor;