import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { reviewID: string; productsID: string };
}) {
  if (parseInt(params.reviewID) > 1000) {
    notFound();
  } else {
    return (
      <h1>
        Rewiew {params.reviewID} About Product {params.productsID}
      </h1>
    );
  }
}
