import { createFileRoute, redirect } from "@tanstack/react-router";

/** /blog → /makaleler (301). */
export const Route = createFileRoute("/blog/")({
  beforeLoad: () => {
    throw redirect({ to: "/makaleler", statusCode: 301 });
  },
});
