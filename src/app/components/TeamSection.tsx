import TeamCard from "./TeamCard";

const team = [
  {
    name: "Richards Mills",
    position: "Sales Consultant",
    imageUrl: "https://mobixsystemsinc.com/images/team/1.jpg",
  },
  {
    name: "Mike Hussey",
    position: "Founder, CEO",
    imageUrl: "https://mobixsystemsinc.com/images/team/1.jpg",
  },
  {
    name: "Jenilia D’sosa",
    position: "Marketing Lead",
    imageUrl: "https://mobixsystemsinc.com/images/team/1.jpg",
  },
  {
    name: "David Warner",
    position: "SEO Analyst",
    imageUrl: "https://mobixsystemsinc.com/images/team/1.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-2">OUR TEAM</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        A tale of a fateful trip that started from this tropic port aboard this
        tiny ship today stillers
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {team.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
}
