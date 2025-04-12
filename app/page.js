import Cards from "@/components/cards.jsx";
import Hero from "@/components/Hero.jsx";


export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
  const data = await response.json();

  return (
    <>
      <Hero />
      <Cards data={data} />
    </>
  );
}
