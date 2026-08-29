import mongoose from 'mongoose';
import { University } from './src/models/University';
import { Industry } from './src/models/Industry';
import { Problem } from './src/models/Problem';
import { User } from './src/models/User';

const JHARKHAND_UNIVERSITIES = [
  { name: 'Ranchi University', district: 'Ranchi', departments: ['Science', 'Arts', 'Commerce'] },
  { name: 'Vinoba Bhave University (VBU)', district: 'Hazaribagh', departments: ['Science', 'Engineering'] },
  { name: 'Sido Kanhu Murmu University (SKMU)', district: 'Dumka', departments: ['Arts', 'Science'] },
  { name: 'Kolhan University', district: 'Chaibasa', departments: ['Science', 'Commerce'] },
  { name: 'Nilamber-Pitamber University', district: 'Palamu', departments: ['Science', 'Arts'] },
  { name: 'Binod Bihari Mahto Koyalanchal University (BBMKU)', district: 'Dhanbad', departments: ['Science', 'Engineering'] },
  { name: 'Dr. Shyama Prasad Mukherjee University', district: 'Ranchi', departments: ['Science', 'Arts'] },
  { name: 'Birsa Agricultural University (BAU)', district: 'Ranchi', departments: ['Agriculture', 'Veterinary Science'] },
  { name: 'Jharkhand Raksha Shakti University', district: 'Ranchi', departments: ['Security Science'] },
  { name: 'Jharkhand University of Technology (JUT)', district: 'Ranchi', departments: ['Engineering', 'Technology'] },
  { name: 'Central University of Jharkhand (CUJ)', district: 'Ranchi', departments: ['Energy Engineering', 'Environmental Sciences'] },
  { name: 'IIT (ISM) Dhanbad', district: 'Dhanbad', departments: ['Mining', 'Petroleum', 'Computer Science'] },
  { name: 'BIT Mesra', district: 'Ranchi', departments: ['Computer Science', 'Electronics'] },
  { name: 'NIT Jamshedpur', district: 'East Singhbhum', departments: ['Mechanical', 'Civil', 'Computer Science'] },
  { name: 'IIIT Ranchi', district: 'Ranchi', departments: ['Computer Science', 'Electronics'] },
  { name: 'AIIMS Deoghar', district: 'Deoghar', departments: ['Medical', 'Healthcare'] },
  { name: 'National University of Study and Research in Law', district: 'Ranchi', departments: ['Law'] },
  { name: 'Amity University', district: 'Ranchi', departments: ['Management', 'Engineering'] },
  { name: 'Arka Jain University', district: 'Jamshedpur', departments: ['Commerce', 'Management'] },
  { name: 'YBN University', district: 'Ranchi', departments: ['Science', 'Nursing'] },
  { name: 'AISECT University', district: 'Hazaribagh', departments: ['Skill Development', 'Management'] },
  { name: 'Netaji Subhas University', district: 'Jamshedpur', departments: ['Management', 'IT'] },
  { name: 'Usha Martin University', district: 'Ranchi', departments: ['Management', 'Engineering'] },
  { name: 'Capital University', district: 'Koderma', departments: ['Arts', 'Science'] },
  { name: 'Jharkhand Rai University', district: 'Ranchi', departments: ['Mining', 'Agriculture'] },
  { name: 'Radha Govind University', district: 'Ramgarh', departments: ['Science', 'Education'] },
  { name: 'Ramchandra Chandravansi University', district: 'Palamu', departments: ['Medical', 'Science'] },
  { name: 'Sarala Birla University', district: 'Ranchi', departments: ['Engineering', 'Management'] },
  { name: 'Sai Nath University', district: 'Ranchi', departments: ['Agriculture', 'Law'] },
  { name: 'Pragyan International University', district: 'Ranchi', departments: ['Yoga', 'Wellness'] }
];

async function seed() {
  try {
    await mongoose.connect('mongodb://localhost:27017/nirvaha');
    console.log('Connected to DB for seeding...');

    // Clear DB
    await University.deleteMany({});
    await Industry.deleteMany({});
    await Problem.deleteMany({});
    await User.deleteMany({});

    // Seed Universities
    const insertedUnis = await University.insertMany(JHARKHAND_UNIVERSITIES);
    console.log('Inserted ' + insertedUnis.length + ' Jharkhand Universities');

    // Seed mock analytics user so things work
    await User.create({ name: 'Gov Admin', email: 'gov@jharkhand.gov.in', password: 'mock', role: 'GOVERNMENT' });

    console.log('Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
