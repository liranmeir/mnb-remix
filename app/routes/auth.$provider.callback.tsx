// app/routes/auth/$provider.callback.tsx
import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/server/auth.server";

export let loader = async ({ request, params }: LoaderArgs) => {
  const provider = params.provider ?? "";
  return authenticator.authenticate(provider, request, {
    successRedirect: "/videos",
    failureRedirect: "/login",
  });
};
