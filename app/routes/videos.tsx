/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import stylesUrl from "~/styles/videos.css";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import { VideoCard } from "../components/VideoCard";

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
      <header className="py-4 bg-blue-900">
        <div className="container max-auto flex items-center justify-between px-4">
          <h1 className="text-white text-2xl font-bold">
            <Link to="/" title="MNB Videos">
              <span className="">MNB🏀</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="text-white flex">
              <span>{`Hi ${data.user.username}`}</span>
              <Form action="/logout" method="post">
                <button
                  type="submit"
                  className="text-white hover:text-gray-200 ml-4"
                >
                  Logout
                </button>
              </Form>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <VideoCard></VideoCard>
        </div>
        {/* <div className="">
          <div className="">
            <Link to=".">Get a random video</Link>
            <p>latest videos:</p>
            <ul>
              {data.jokeListItems.map(({ id, name }) => (
                <li key={id}>
                  <Link prefetch="intent" to={id}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="">
              Add your own
            </Link>
          </div>
          <div className="">
            <Outlet />
          </div>
        </div> */}
      </main>
    </div>
  );
}
