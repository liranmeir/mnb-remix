import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/server/auth.server";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export let loader = async ({ request, params }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/videos",
  });
  return user;
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="text-3xl font-bold underline">
          MNB <span>Videos</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="videos">View</Link>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
