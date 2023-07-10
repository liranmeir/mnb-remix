import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          MNB <span>Videos</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">View</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
