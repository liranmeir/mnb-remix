import type {
  LinksFunction,
  LoaderArgs,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

import stylesUrl from "~/styles/videos.css";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = async ({ request }: LoaderArgs) => {
  const jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
    take: 5,
  });
  const user = await getUser(request);

  return json({ jokeListItems, user });
};

export default function VideosRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="videos-layout">
      <header className="videos-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="MNB Videos"
            >
              <span className="logo">🏀</span>
              <span className="logo-medium">MNB🏀</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <Form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </Form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main className="videos-main">
        <div className="container">
          <div className="videos-list">
            <Link to=".">Get a random video</Link>
            <p>latest videos:</p>
            <ul>
              {data.jokeListItems.map(({ id, name }) => (
                <li key={id}>
                  <Link prefetch="intent" to={id}>{name}</Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="videos-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
