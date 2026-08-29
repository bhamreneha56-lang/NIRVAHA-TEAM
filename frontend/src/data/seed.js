export const DISTRICTS = [
  "Ranchi","Jamshedpur (East Singhbhum)","Dhanbad","Bokaro","Hazaribagh",
  "Giridih","Deoghar","Dumka","Godda","Sahebganj","Pakur","Latehar",
  "Lohardaga","Gumla","Simdega","West Singhbhum","Khunti","Ramgarh",
  "Koderma","Chatra","Palamu","Garhwa","Saraikela-Kharsawan","Shivpur (Nawadih)"
];

export const CATEGORIES = [
  { key:"Water",        icon:"💧", color:"#0ea5e9" },
  { key:"Sanitation",   icon:"🚽", color:"#8b5cf6" },
  { key:"Roads",        icon:"🛣️", color:"#64748b" },
  { key:"Agriculture",  icon:"🌾", color:"#84cc16" },
  { key:"Education",    icon:"📚", color:"#f59e0b" },
  { key:"Health",       icon:"🏥", color:"#ef4444" },
  { key:"Accessibility",icon:"♿", color:"#06b6d4" },
  { key:"Environment",  icon:"🌳", color:"#16a34a" },
  { key:"Urban Infra",  icon:"🏙️", color:"#475569" },
  { key:"Public Service",icon:"🏛️",color:"#b45309" },
];

export const catMeta = (key) => CATEGORIES.find(c => c.key === key) || CATEGORIES[9];

export const UNIVERSITIES = [
  { id:"u1", name:"BIT Mesra",                    short:"BITM", district:"Ranchi",       type:"Technical", strength:180 },
  { id:"u2", name:"NIT Jamshedpur",               short:"NITJ", district:"Jamshedpur (East Singhbhum)", type:"Technical", strength:220 },
  { id:"u3", name:"Ranchi University",            short:"RU",   district:"Ranchi",       type:"General",   strength:260 },
  { id:"u4", name:"IIM Ranchi",                   short:"IIMR", district:"Ranchi",       type:"Management",strength:90  },
  { id:"u5", name:"Central University of Jharkhand",short:"CUJ",district:"Ranchi",       type:"Central",   strength:150 },
  { id:"u6", name:"Vinoba Bhave University",      short:"VBU",  district:"Hazaribagh",   type:"General",   strength:200 },
  { id:"u7", name:"Kolhan University",            short:"KU",   district:"West Singhbhum",type:"General",  strength:170 },
  { id:"u8", name:"ICAR - Research Complex, Ranchi",short:"ICAR",district:"Ranchi",      type:"Research",  strength:60  },
];

export const INDUSTRIES = [
  { id:"i1", name:"Tata Steel CSR",        type:"Large Industry", budget: 2500000, committed: 820000 },
  { id:"i2", name:"Jindal Steel Foundation",type:"Large Industry", budget: 1800000, committed: 410000 },
  { id:"i3", name:"CCL CSR (Ranchi)",       type:"PSU",            budget: 900000,  committed: 180000 },
  { id:"i4", name:"Ranchi MSME Consortium", type:"MSME Cluster",   budget: 350000,  committed: 95000  },
  { id:"i5", name:"Jharkhand Startup Hub",  type:"Startup",        budget: 200000,  committed: 60000  },
];

export const STATUSES = ["Submitted","Under Review","Routed to University","In Progress","Resolved"];
export const SUBMITTER_TYPES = ["Individual","Community Group","Panchayati Raj Institution","Urban Local Body","Government Department"];
export const LANGUAGES = [
  { code:"en", label:"English",  native:"English" },
  { code:"hi", label:"Hindi",    native:"हिन्दी" },
  { code:"sat",label:"Santhali", native:"ᱥᱟᱱᱛᱟᱲᱤ" },
];

export const SEED_PROBLEMS = [
  { id:"p1",  title:"Handpump failure in Toli village for 3 weeks", description:"The single community handpump serving 42 households in Toli village (block: Bundu) has been dry since 12 August. Women walk 1.8 km to the river. Children missing morning school.", category:"Water", district:"Ranchi", lat:23.33, lng:85.33, submitter:"Community Group", status:"Routed to University", priority:"High", reportedOn:"2026-08-18", upvotes:34, photo:"handpump" },
  { id:"p2",  title:"Pothole cluster on NH-33 near Sikidiri", description:"Three major potholes on NH-33 stretch between Sikidiri and Godda have caused 4 two-wheeler accidents this monsoon. No signage, no barricades.", category:"Roads", district:"Godda", lat:24.84, lng:87.22, submitter:"Individual", status:"In Progress", priority:"Urgent", reportedOn:"2026-08-02", upvotes:89, photo:"road" },
  { id:"p3",  title:"Primary school without functional toilets since 2025", description:"GG+UPS Simaria has 184 students but both toilet blocks have been non-functional since October 2025. Girls' attendance dropped 28%.", category:"Sanitation", district:"Hazaribagh", lat:23.99, lng:85.35, submitter:"Government Department", status:"Resolved", priority:"High", reportedOn:"2026-06-14", upvotes:122, photo:"school" },
];

export const SEED_PROJECTS = [
  { id:"pr1", problemId:"p3",  universityId:"u3", industryId:"i1", title:"Low-cost bio-toilet retrofit for rural schools", status:"In Progress", milestones:[
    { id:"m1", name:"Site survey & design", status:"Done", verifiedOn:"2026-07-10" },
    { id:"m2", name:"Prototype installation", status:"Done", verifiedOn:"2026-08-02" },
    { id:"m3", name:"3-month usage monitoring", status:"In Progress", dueOn:"2026-09-15" },
    { id:"m4", name:"Handover & training", status:"To Do", dueOn:"2026-10-01" },
  ], funding:{ ask:180000, pledged:180000, released:90000 }, ip:"Disclosure Drafted", team:{ faculty:"Dr. Anjali Verma", students:["Riya Kumari","Aarav Singh","Meenakshi Oraon"] }, impact:{ beneficiaries:184, costSaved:42000, timeSavedMonths:2 } }
];

export const SEED_NOTIFICATIONS = [
  { id:"n1", to:"citizen",    forUser:"You", text:"Your report 'Handpump failure in Toli village' was routed to Ranchi University.", time:"2h ago", unread:true },
  { id:"n2", to:"citizen",    forUser:"You", text:"12 others endorsed your report on NH-33 potholes.", time:"5h ago", unread:true },
  { id:"n3", to:"university", forUser:"BIT Mesra", text:"New problem assigned: 'Offline-first PDS authentication sync'. Response SLA: 5 days.", time:"1d ago", unread:true },
  { id:"n4", to:"industry",   forUser:"Tata Steel CSR", text:"Your ₹90,000 commitment for 'Low-cost bio-toilet' released on milestone verification.", time:"3d ago", unread:false },
  { id:"n5", to:"government", forUser:"Secretary", text:"Weekly summary: 47 new submissions, 12 routed, 3 resolved. Top district: Ranchi.", time:"6h ago", unread:true },
];
