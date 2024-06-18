import { fakerES as faker } from "@faker-js/faker";
import { OTHER, STUDENT, TEACHER } from "../constants/roles";
import { getRandomStr } from "../utils/getRamdonStr";
import { connDb } from "./connDb";

const data = Array.from({ length: 50 }).map(() => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: faker.datatype.boolean(),
    role: getRandomStr([STUDENT, TEACHER, OTHER]),
  };
});

async function seedDb() {
  await connDb.user.createMany({
    data,
  });
}

seedDb()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    connDb.$disconnect();
  });
