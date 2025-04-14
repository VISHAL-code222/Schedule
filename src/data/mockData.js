import { faker } from '@faker-js/faker';

export const speakers = Array.from({ length: 6 }).map(() => ({
  name: faker.person.fullName(),
  topic: faker.company.catchPhrase(),
  time: faker.date.future().toLocaleTimeString(),
  avatar: faker.image.avatar(),
}));

export const eventInfo = {
  name: 'ReactConf 2025',
  date: 'August 20-22, 2025',
  location: 'San Francisco, CA',
  description: 'Join the biggest minds in React for 3 days of talks, workshops, and networking.',
};
