import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { clearCart } from "../cart/cartSlice";
import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

//akcija za dodavanje na narudzbe preko forme na server tj API
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please enter the valid phone number...";

  if (Object.keys(errors).length > 0) return errors;

  //ako je sve u redu napravi novu narudzbu i preusmjeri se na tu stranu
  const newOrder = await createOrder(order);

  // NEMOJ previse koristiti
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
