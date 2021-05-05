import Link from "next/link";
import React, { useEffect } from "react";

import { useRouter } from "next/router";

interface Props {}

const ErrorPage = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="mt-12 flex justify-center items-center self-center">
      <h1>Ooopppsss...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a className="text-blue-400">Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
