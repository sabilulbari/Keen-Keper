import Card from "../card/Card";

const userData = [
  {
    id: 1,
    name: "Arif Rahman",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "arif.rahman@gmail.com",
    days_since_contact: 18,
    status: "overdue",
    tags: ["college", "close friend"],
    bio: "Survived engineering days, still debate life",
    goal: 14,
    next_due_date: "2026-03-28",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "nusrat.jahan@yahoo.com",
    days_since_contact: 10,
    status: "almost due",
    tags: ["work", "design"],
    bio: "Creative mind pushing ideas beyond limits",
    goal: 14,
    next_due_date: "2026-04-19",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    picture: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "tanvir.hasan@gmail.com",
    days_since_contact: 5,
    status: "on-track",
    tags: ["gym", "motivation"],
    bio: "Gym partner never skips tough legdays",
    goal: 10,
    next_due_date: "2026-04-20",
  },
  {
    id: 4,
    name: "Mehjabin Sultana",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "mehjabin.sultana@gmail.com",
    days_since_contact: 21,
    status: "overdue",
    tags: ["school", "old friend"],
    bio: "School memories filled with laughter always",
    goal: 14,
    next_due_date: "2026-03-25",
  },
  {
    id: 5,
    name: "Rakib Ahmed",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "rakib.ahmed@outlook.com",
    days_since_contact: 12,
    status: "almost due",
    tags: ["freelance", "developer"],
    bio: "Build projects together share client struggles",
    goal: 14,
    next_due_date: "2026-04-17",
  },
  {
    id: 6,
    name: "Farzana Kabir",
    picture: "https://randomuser.me/api/portraits/women/25.jpg",
    email: "farzana.kabir@gmail.com",
    days_since_contact: 3,
    status: "on-track",
    tags: ["family friend"],
    bio: "Family friend always checks first regularly",
    goal: 7,
    next_due_date: "2026-04-19",
  },
  {
    id: 7,
    name: "Shakil Mahmud",
    picture: "https://randomuser.me/api/portraits/men/41.jpg",
    email: "shakil.mahmud@gmail.com",
    days_since_contact: 15,
    status: "overdue",
    tags: ["startup", "business"],
    bio: "Always chasing ideas building future startups",
    goal: 10,
    next_due_date: "2026-04-10",
  },
  {
    id: 8,
    name: "Tania Akter",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "tania.akter@gmail.com",
    days_since_contact: 8,
    status: "on-track",
    tags: ["university", "study buddy"],
    bio: "Study nights shared notes and stress",
    goal: 14,
    next_due_date: "2026-04-21",
  },
  {
    id: 9,
    name: "Imran Chowdhury",
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    email: "imran.chowdhury@gmail.com",
    days_since_contact: 13,
    status: "almost due",
    tags: ["cricket", "childhood"],
    bio: "Childhood cricket rivalry turned lifelong friendship",
    goal: 14,
    next_due_date: "2026-04-18",
  },
  {
    id: 10,
    name: "Sadia Noor",
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    email: "sadia.noor@gmail.com",
    days_since_contact: 2,
    status: "on-track",
    tags: ["content creator", "creative"],
    bio: "Creative content ideas inspire me daily",
    goal: 7,
    next_due_date: "2026-04-20",
  },
  {
    id: 11,
    name: "Mahfuz Karim",
    picture: "https://randomuser.me/api/portraits/men/63.jpg",
    email: "mahfuz.karim@yahoo.com",
    days_since_contact: 20,
    status: "overdue",
    tags: ["mentor", "career"],
    bio: "Mentor guiding my early career journey",
    goal: 14,
    next_due_date: "2026-03-30",
  },
];


const Cards = async() => {


  return (
    <div className="w-[80%] mx-auto mt-20">
      <div>
        <h3 className="text-[#234e2e] text-[24px] font-semibold">Your Friends</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {userData.map((user) => (
          <Card  key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default Cards;
