import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { sectors } from "../data/sectors";

export default function BentoData() {
  const sectorImages: Record<string, string> = {
    'Health & Nutrition': '/nutrition.jpg',
    'Education': '/education.jpg',
    'Livelihoods & Economic Empowerment': '/20892261_Sandy_Ppl-31_Single-01.jpg',
    'Gender Equality & Social Inclusion (GESI)': '/gender%20equality.jpg',
    'Climate Change & Environment': '/climate_change.jpg',
    'Governance & Human Rights': '/govering_and_human_rights.jpg',
    'Child Protection': '/childprotection.jpg',
    'WASH': '/wash.jpg',
  }
  const items = sectors.map((name, i) => ({
    title: name,
    description: "Sector of expertise",
    header: (
      <img
        src={sectorImages[name] || 'https://images.unsplash.com/photo-1520975684285-8d8be0ccdfbb?w=900&auto=format&fit=crop&q=60'}
        alt={`${name} sector`}
        width={900}
        height={352}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: (i === 0 || i === 4) ? "md:col-span-2" : "md:col-span-1",
  }))

  return (
    <div id="sectors-bento" className="container mt-12 mx-auto items-center py-20 sm:py-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Sectors of Expertise</h2>
            <p className="mt-2 text-lg text-gray-600">
                We work with a diverse range of sectors to deliver tailored solutions.
            </p>
        </div>
      <BentoGrid className="md:grid-cols-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
