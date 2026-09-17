import { Award, Building2, Handshake, ShieldCheck } from "lucide-react";

const achievements = [
  {
    icon: Building2,
    title: "Property Focused",
    text: "Carefully selected residential and investment opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Process",
    text: "A structured approach from property discovery to closing.",
  },
  {
    icon: Handshake,
    title: "Client First",
    text: "Property solutions built around individual client requirements.",
  },
  {
    icon: Award,
    title: "Professional Service",
    text: "A premium experience across every stage of your property journey.",
  },
];

function Achievements() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F29925]/10 text-[#F29925]">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-montserrat text-sm font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-neutral-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;