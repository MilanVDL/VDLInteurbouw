const people = [
  {
    name: "Project A",
    role: "Intereur Project",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    name: "Project B",
    role: "Intereur Project",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    name: "Project C",
    role: "Intereur Project",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    name: "Project D",
    role: "Intereur Project",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    name: "Project E",
    role: "Intereur Project",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    name: "Project F",
    role: "Intereur Project",
    imageUrl: "https://placehold.co/600x400",
  },
];

export default function Showcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Onze projecten
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Word geinspireerd door de projecten die wij hebben gemaakt.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
