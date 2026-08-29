import { CATEGORIES } from '../data/seed';

export function simulateAI(problemText, category, district) {
  const text = (problemText || "").toLowerCase();
  const rules = [
    { kw:["water","handpump","drinking","well","tap","jal","arsenic","ro"], cat:"Water" },
    { kw:["toilet","sanitation","sewage","drainage","drain","defecation","odf","ihhl"], cat:"Sanitation" },
    { kw:["road","pothole","nh-","highway","street","bridge","nh "], cat:"Roads" },
    { kw:["farm","crop","paddy","millets","kodo","agri","irrigation","tractor"], cat:"Agriculture" },
    { kw:["school","anganwadi","classroom","teacher","student","ems","education","braille"], cat:"Education" },
    { kw:["hospital","phc","doctor","ecg","maternal","health","patient","medicine"], cat:"Health" },
    { kw:["wheelchair","ramp","accessib","disabled","blind","braille","divyang"], cat:"Accessibility" },
    { kw:["forest","fire","mining","river","waste","pollution","tree","sal "], cat:"Environment" },
    { kw:["streetlight","bus","market","flood","urban","ev ","charging","tower","mobile"], cat:"Urban Infra" },
    { kw:["ration","pds","mgnrega","portal","aadhaar","scheme","office"], cat:"Public Service" },
  ];
  let predicted = category;
  let confidence = 86;
  let matchedKw = [];
  for (const r of rules) {
    const hits = r.kw.filter(k => text.includes(k));
    if (hits.length > matchedKw.length) {
      matchedKw = hits;
      predicted = r.cat;
      confidence = Math.min(97, 72 + hits.length * 7);
    }
  }
  if (!predicted) predicted = category || "Public Service";
  const priority =
    /urgent|emergency|accident|death|child|children|pregnan|maternal|arsenic/.test(text) ? "Urgent" :
    /flood|fire|contamin|unsafe|broken|fail|non-functional/.test(text) ? "High" :
    /need|request|plan|survey/.test(text) ? "Medium" : "Low";

  const explanations = {
    "Water":         "Routed to Water & Sanitation — matches drinking-water / handpump keywords and location history of similar reports in this block.",
    "Sanitation":    "Routed to Sanitation — toilet / drainage keywords detected; similar reports in district resolved by civil engineering teams.",
    "Roads":         "Routed to Roads & Transport — pothole / highway keywords; geotag places it on a state/national highway segment.",
    "Agriculture":   "Routed to Agriculture & Rural Livelihoods — crop / farming keywords; ICAR-affiliated universities flagged as best match.",
    "Education":     "Routed to Education — school / classroom keywords; pedagogy & hardware partners engaged.",
    "Health":        "Routed to Health — clinical / facility keywords; medical-college universities prioritised.",
    "Accessibility": "Routed to Accessibility — divyangjan / infrastructure-access keywords; universal-design labs engaged.",
    "Environment":   "Routed to Environment — forest / pollution keywords; ecology research groups flagged.",
    "Urban Infra":   "Routed to Urban Infrastructure — civic-amenity keywords; smart-city mission alignment.",
    "Public Service":"Routed to Public Service Delivery — scheme / portal keywords; e-governance labs engaged.",
  };

  return {
    predicted,
    confidence,
    priority,
    matchedKw,
    explanation: explanations[predicted] || "Routed based on semantic similarity to prior resolved cases.",
  };
}

export function findDuplicates(newTitle, newDesc, problems) {
  const text = (newTitle + " " + newDesc).toLowerCase();
  const tokens = text.split(/\s+/).filter(t => t.length > 4);
  return problems
    .map(p => {
      const pText = (p.title + " " + p.description).toLowerCase();
      const shared = tokens.filter(t => pText.includes(t)).length;
      const score = Math.round((shared / Math.max(tokens.length,1)) * 100);
      return { p, score };
    })
    .filter(x => x.score > 35)
    .sort((a,b) => b.score - a.score)
    .slice(0,2);
}

export function fmtINR(n) {
  if (n === null || n === undefined) return "—";
  if (n >= 10000000) return "₹" + (n/10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n/100000).toFixed(2) + " L";
  if (n >= 1000) return "₹" + (n/1000).toFixed(1) + "K";
  return "₹" + n;
}
