import Card from "../card/Card";

const userData = [
  {
    id: 1,
    name: "Arif Rahman",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "arif.rahman@gmail.com",
    days_since_contact: 18,
    status: "Overdue",
    tags: ["COLLEGE", "CLOSE FRIEND"],
    bio: "We survived engineering together. Still debates tech vs life over tea.",
    goal: 14,
    next_due_date: "2026-03-28",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "nusrat.jahan@yahoo.com",
    days_since_contact: 10,
    status: "Almost due",
    tags: ["WORK", "DESIGN"],
    bio: "Creative soul from my first internship. Always pushing me to think differently.",
    goal: 14,
    next_due_date: "2026-04-19",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    picture: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "tanvir.hasan@gmail.com",
    days_since_contact: 5,
    status: "On-track",
    tags: ["GYM", "MOTIVATION"],
    bio: "Gym partner who never skips leg day. Keeps me disciplined.",
    goal: 10,
    next_due_date: "2026-04-20",
  },
  {
    id: 4,
    name: "Mehjabin Sultana",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "mehjabin.sultana@gmail.com",
    days_since_contact: 21,
    status: "Overdue",
    tags: ["SCHOOL", "OLD FRIEND"],
    bio: "School memories, endless laughter, and random late-night calls.",
    goal: 14,
    next_due_date: "2026-03-25",
  },
  {
    id: 5,
    name: "Rakib Ahmed",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "rakib.ahmed@outlook.com",
    days_since_contact: 12,
    status: "Almost due",
    tags: ["FREELANCE", "DEVELOPER"],
    bio: "We collaborate on side projects and share client struggles.",
    goal: 14,
    next_due_date: "2026-04-17",
  },
  {
    id: 6,
    name: "Farzana Kabir",
    picture: "https://randomuser.me/api/portraits/women/25.jpg",
    email: "farzana.kabir@gmail.com",
    days_since_contact: 3,
    status: "On-track",
    tags: ["FAMILY FRIEND"],
    bio: "Family friend who always checks in first. Pure heart.",
    goal: 7,
    next_due_date: "2026-04-19",
  },
  {
    id: 7,
    name: "Shakil Mahmud",
    picture: "https://randomuser.me/api/portraits/men/41.jpg",
    email: "shakil.mahmud@gmail.com",
    days_since_contact: 15,
    status: "Overdue",
    tags: ["STARTUP", "BUSINESS"],
    bio: "Always talking about the next big idea. Hustle mindset 24/7.",
    goal: 10,
    next_due_date: "2026-04-10",
  },
  {
    id: 8,
    name: "Tania Akter",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "tania.akter@gmail.com",
    days_since_contact: 8,
    status: "On-track",
    tags: ["UNIVERSITY", "STUDY BUDDY"],
    bio: "We studied countless nights before exams. Still shares notes sometimes.",
    goal: 14,
    next_due_date: "2026-04-21",
  },
  {
    id: 9,
    name: "Imran Chowdhury",
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    email: "imran.chowdhury@gmail.com",
    days_since_contact: 13,
    status: "Almost due",
    tags: ["CRICKET", "CHILDHOOD"],
    bio: "Childhood cricket rival turned lifelong friend. Still argues over match scores.",
    goal: 14,
    next_due_date: "2026-04-18",
  },
  {
    id: 10,
    name: "Sadia Noor",
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    email: "sadia.noor@gmail.com",
    days_since_contact: 2,
    status: "On-track",
    tags: ["CONTENT CREATOR", "CREATIVE"],
    bio: "Always experimenting with content ideas. Inspires me to stay creative.",
    goal: 7,
    next_due_date: "2026-04-20",
  },
  {
    id: 11,
    name: "Mahfuz Karim",
    picture: "https://randomuser.me/api/portraits/men/63.jpg",
    email: "mahfuz.karim@yahoo.com",
    days_since_contact: 20,
    status: "Overdue",
    tags: ["MENTOR", "CAREER"],
    bio: "Guided me through my early career decisions. I owe him a proper catch-up.",
    goal: 14,
    next_due_date: "2026-03-30",
  },
  {
    id: 12,
    name: "S. Alom",
    picture: "https://randomuser.me/api/portraits/men/70.jpg",
    email: "mahfuz.karim@yahoo.com",
    days_since_contact: 40,
    status: "Overdue",
    tags: ["BANK ROBBER", "CAREER"],
    bio: "Guided me through my early career decisions. I owe him a proper catch-up.",
    goal: 14,
    next_due_date: "2026-03-30",
  },
];

const Cards = async () => {
  return (
    <div className="w-[90%] xl:w-[80%] mx-auto mt-20">
      <div>
        <h3 className="text-[#234e2e] text-[24px] font-semibold">Your Friends</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {userData.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
