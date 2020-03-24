import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Sauti Sol',
    address: {
      country: 'Kenya',
      county: 'Nairobi',
      city: 'CBD',
      street: 'Luthuli Avenue'
    },
    email: 'info@sautisol.com',
    phone: '+25725136849',
    avatarUrl: '/images/avatars/batman.png',
    createdAt: Date.now()
  },
  {
    id: uuid(),
    name: 'Cardi B',
    address: {
      country: 'Kenya',
      county: 'Nairobi',
      city: 'Kilimani',
      street: 'Moi Avenue'
    },
    email: 'info@cardib.com',
    phone: '+25725136849',
    avatarUrl: '/images/avatars/batman.png',
    createdAt: Date.now()
  },

  {
    id: uuid(),
    name: 'Luna The Cat',
    address: {
      country: 'Kenya',
      county: 'Nairobi',
      city: 'Westlands',
      street: 'Moi Avenue'
    },
    email: 'info@luna.org',
    phone: '+25725136849',
    avatarUrl: '/images/avatars/batman.png',
    createdAt: Date.now()
  },
];
