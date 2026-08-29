import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  district: String,
  lat: Number,
  lng: Number,
  submitter: String,
  status: { type: String, default: 'Submitted' },
  priority: { type: String, default: 'Medium' },
  reportedOn: { type: Date, default: Date.now },
  upvotes: { type: Number, default: 0 },
  photo: String,
});
const Problem = mongoose.model('Problem', problemSchema);

async function main() {
  await mongoose.connect('mongodb://localhost:27017/nirvaha');
  await Problem.deleteMany({}); // clear existing
  const p1 = new Problem({
    title: "Handpump failure in Toli village for 3 weeks",
    description: "The single community handpump serving 42 households in Toli village (block: Bundu) has been dry since 12 August.",
    category: "Water",
    district: "Ranchi",
    lat: 23.33,
    lng: 85.33,
    submitter: "Community Group",
    status: "Routed to University",
    priority: "High",
    upvotes: 34
  });
  await p1.save();

  const p2 = new Problem({
    title: "Pothole cluster on NH-33 near Sikidiri",
    description: "Three major potholes on NH-33 stretch between Sikidiri and Godda have caused 4 two-wheeler accidents this monsoon. No signage, no barricades.",
    category: "Roads",
    district: "Godda",
    lat: 24.84,
    lng: 87.22,
    submitter: "Individual",
    status: "In Progress",
    priority: "Urgent",
    upvotes: 89
  });
  await p2.save();

  console.log("Database seeded successfully:", p1._id, p2._id);
  await mongoose.disconnect();
}
main();
