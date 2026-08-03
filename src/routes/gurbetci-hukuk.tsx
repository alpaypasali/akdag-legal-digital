import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gurbetci-hukuk")({
  beforeLoad: () => {
    throw redirect({
      to: "/bursa-gurbetci-hukuk",
      statusCode: 301,
      reloadDocument: false,
    });
  },
});
