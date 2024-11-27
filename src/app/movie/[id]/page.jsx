"use client";
import { use } from "react";

const page = ({ params }) => {
  const { id } = use(params);
  return <p>ID: {id}</p>;
};

export default page;
