import { createContext } from "react";
import team1 from "../assets/images/team1.png.webp";
import team2 from "../assets/images/team2.png.webp";
import team3 from "../assets/images/team3.png.webp";
  const teamMembers = [
      { img: team1, role: "UX Designer", name: "Ethan Welch" },
      { img: team2, role: "Frontend Developer", name: "John Doe" },
      { img: team3, role: "Project Manager", name: "John Doe" },
    ];
export const AboutCards=createContext();
export const CardProvider=({children})=>
{
     return <AboutCards.Provider value={teamMembers}> {children}</AboutCards.Provider>
}