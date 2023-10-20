// our-domain.com/news/

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1> Welcome to News Page</h1>
      <ul>
        <li>
          <Link href="news/nextjs-is-a-great-framework">
            Next Js Is A great FrameWork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
