import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * /blog/<slug> adresleri, makale altyapısının tek kanonik yolu olan
 * /makaleler/<slug> adresine 301 ile yönlendirilir.
 */
export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/makaleler/$slug",
      params: { slug: params.slug },
      statusCode: 301,
    });
  },
});
