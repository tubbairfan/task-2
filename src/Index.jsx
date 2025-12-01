import { createContext } from "react";
export const AboutContext = createContext();
import team1 from "./assets/images/team1.png.webp";
import team2 from "./assets/images/team2.png.webp";
import team3 from "./assets/images/team3.png.webp";
import safe_in from "./assets/images/safe_in.png.webp";
import Post1 from"./assets/images/post_1.png.webp";
import Post2 from"./assets/images/post_2.png.webp";
import Post3 from"./assets/images/post_3.png.webp";
import Post4 from"./assets/images/post_4.png.webp";
import Blog1 from "./assets/images/single_blog_1.png.webp"
import Blog2 from "./assets/images/single_blog_2.png.webp"
import Blog3 from "./assets/images/single_blog_3.png.webp"
import Blog4 from "./assets/images/single_blog_4.png.webp"
export const AboutProvider = ({ children }) => {
  const teamMembers = [
    { img: team1, role: "UX Designer", name: "Ethan Welch" },
    { img: team2, role: "Frontend Developer", name: "John Doe" },
    { img: team3, role: "Project Manager", name: "John Doe" },
  ];
  const sidebarData = {
    searchPlaceholder: "Search Post",
    categories: [
      "Construction & Build",
      "Real estate & property",
      "Industry Construction",
      "House & property",
      "Interior & Exterior",
    ],
    recentPosts: [
      {
        img: Post1,
        title: "Facts why drugs are harmful",
        date: "12 March, 2024"
      },
      {
        img: Post2,
        title: "The Drones Revolutin",
        date: "17 March, 2024"
      },
      {
        img: Post3,
        title: "Outstanding Technology",
        date: "21 March, 2024"
      },
      {
        img: Post4,
        title: "Advanced instruments",
        date: "25 March, 2024"
      }
    ],
    tags: ["Beautiful", "Nature", "Industrial", "Modern", "Real Estate"],
    instagram: [
      Blog1,Blog2,Blog3,Blog4 ]
  };
  const heading = "Who We Are";
  const description = `Mollit anim laborum duis au dolor in voluptcate velit ess
    cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.
    Mollit anim laborum Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife
    nrulla parihatur Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg 
    dhjinulpadeserunt mollitemnth incididbnt ut o5tu layjobore mofllit anim.`;
  const buttonText = "Read More";
  return (
    <AboutContext.Provider
      value={{
        heading,
        description,
        buttonText,
        image: safe_in,
        team: teamMembers,
         sidebarData 
      }}
    >
      {children}
    </AboutContext.Provider>
  );
};
