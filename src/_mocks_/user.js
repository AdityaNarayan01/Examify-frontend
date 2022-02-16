import faker from 'faker';
import { sample } from 'lodash';
// utils

// ----------------------------------------------------------------------

const users = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  // company: faker.company.companyName(),
  marks: faker.datatype.number(),
  section: sample([
    "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
  "D1"
]),
  branch: sample([
    'CSE',
    'MECH',
    'IT',
    'ESE'
  ])
}));

export default users;