// app/routes/dashboard.tsx
//TODO: this should be removed just an exmaple of authenticated route
import { useLoaderData, Form } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/server/auth.server";

export let loader = async ({ request, params }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  return { user };
};

export default function Dashboard() {
  const { user } = useLoaderData<typeof loader>();

  if (!user)
    return (
      <div>
        <h1>Not logged in</h1>
        <Form action="/login" method="post">
          <button>Login</button>
        </Form>
      </div>
    );

  return (
    <div>
      <h1>Welcome {user.displayName}!</h1>
      <p>This is a protected page</p>
      <Form action="/logout-google" method="post">
        <button>Logout</button>
      </Form>
    </div>
  );
}
