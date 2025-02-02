import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

//preko ovog loader a ti zapravo istovremeno renderujes i fecas nesto, dok prije si prvo morao da renderujes komponentu i tek onda da fecujes preko useEffect
function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
