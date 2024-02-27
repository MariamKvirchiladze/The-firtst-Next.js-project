export default function ProductDetails({
  params,
}: {
  params: { productsID: string };
}) {
  return <h1>Details About Product {params.productsID}</h1>;
}
