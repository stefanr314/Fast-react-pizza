import { getOrder } from "../../services/apiRestaurant";

export async function loader({ params }) {
  //params.orderId jer si ih tako nazvao kada si kreirao rutu
  const order = await getOrder(params.orderId);
  return order;
}
