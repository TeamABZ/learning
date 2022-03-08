import React from "react";

import MainFeaturedPost from "./MainFeaturedPost";



const mainFeaturedPost = {
  title: "Cyber security training",
  description:
    "Making it easier to break into security, all through your browser.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function FirstPage() {
  return (
    <>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
      </main>
    </>
  );
}
