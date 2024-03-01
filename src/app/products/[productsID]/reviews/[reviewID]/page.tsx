export default function ReviewDetails({
  params,
}: {
  params: { reviewID: string; productsID: string };
}) {
  return (
    <h1>
      Rewiew {params.reviewID} About Product {params.productsID}
    </h1>
  );
}
