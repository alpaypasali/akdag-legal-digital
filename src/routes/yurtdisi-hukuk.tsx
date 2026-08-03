import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/yurtdisi-hukuk")({
  beforeLoad: () => {
    throw redirect({
      to: "/bursa-gurbetci-hukuk",
      statusCode: 301,
      reloadDocument: false,
    });
  },
});
