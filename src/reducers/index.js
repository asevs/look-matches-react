const initialState = {
  rooms: [
    {
      id: 1,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 2,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 3,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 4,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 5,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 6,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 2,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Tetmajera 21',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'football',
      roomStatus: 'OPEN',
    },
    {
      id: 3,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Tetmajera 21',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 4,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'football',
      roomStatus: 'OPEN',
    },
    {
      id: 5,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'basketball',
      roomStatus: 'OPEN',
    },
    {
      id: 6,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.5712999,
        lng: 19.2422265,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'voleyball',
      roomStatus: 'OPEN',
    },
    {
      id: 7,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6312999,
        lng: 19.1254565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'voleyball',
      roomStatus: 'OPEN',
    },
    {
      id: 8,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.6412999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'football',
      roomStatus: 'OPEN',
    },
    {
      id: 9,
      place: {
        id: 1,
        city: 'Żywiec',
        street: 'Sporyska 22',
        lat: 49.5912999,
        lng: 19.1654565,
      },
      slots: 10,
      levelSkill: 'Amator',
      eventDate: '20.04.2020',
      users: 3,
      disciplineAvatar: 'football',
      teamSecond: 'Real Madrid',
      teamFirst: 'FC Barcelona',
      ownerUser: 'asev',
      disciplineType: 'football',
      roomStatus: 'CLOSED',
    },
  ],
  players: [{ id: 2, email: 'Janusz' }],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
