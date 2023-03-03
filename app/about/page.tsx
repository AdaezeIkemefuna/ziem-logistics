import React from "react";
import Link from "next/link";

export default function AboutPage() {
  //   throw new Error("Something went wrong");
  return (
    <div>
      <h1>about Page</h1>
      <Link href={"/"}> Home page</Link>
    </div>
  );
}
