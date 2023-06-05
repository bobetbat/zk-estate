export const contractAddress = '0xE47845dac04A7C91E73B8f09b441785810D40f69';

export const filterOptions = {
  location: [
    'Manhattan',
    'Brooklyn',
    'Queens',
    'Bronx',
    'Staten Island',
  ],
  price: [
    'Under $1,000',
    '$1,000 - $2,000',
    '$2,000 - $3,000',
    '$3,000 - $4,000',
    '$4,000 - $5,000',
    'Over $5,000',
  ],
  bedrooms: [
    'Studio',
    '1 Bedroom',
    '2 Bedrooms',
    '3 Bedrooms',
    '4+ Bedrooms',
  ],
};


export interface Contract {
  address: string;
}

export interface Apartment {
  id: number;
  // address: string
  title: string;
  description: string;
  location: string;
  price: number;
  contract: Contract;
  imageUrls: string[];
}

export const apartments: Apartment[] = [
  {
    id: 1,
    contract: {
      address: '0x123',
    },
    title: 'Luxury Apartment in Manhattan',
    description: 'Spacious 2-bedroom apartment with stunning views of Central Park.',
    location: 'Manhattan',
    price: 5000,
    imageUrls: [
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+1',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+2',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+3',
    ],
  },
  {
    id: 2,
    contract: {
      address: '0x123',
    }, title: 'Cozy Studio in Brooklyn',
    description: "Charming studio apartment in the heart of Brooklyn's trendiest neighborhood.",
    location: 'Brooklyn',
    price: 2000,
    imageUrls: [
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+4',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+5',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+6',
    ],
  },
];
