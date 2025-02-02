/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrder({ order }) {
  console.log(order);
  const fetcher = useFetcher();
  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type={"primary"}>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
