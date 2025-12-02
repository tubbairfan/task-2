import Card from "../components/Card"
import img1 from "../assets/images/img-1.jpg"
import Projectbox from "../components/Projectbox"
import Project1 from "../assets/images/project1.png.webp"
import Project2 from "../assets/images/project2.png.webp"
import Project3 from "../assets/images/project3.png.webp"
import Project4 from "../assets/images/project4.png.webp"
import Project5 from "../assets/images/project5.png.webp"
import Project6 from "../assets/images/project6.png.webp"
const ProjectPageData = [
  { img: Project1, title: "Floride Chemicals Factory" },
  { img: Project2, title: "Floride Chemicals Factory" },
  { img: Project3, title: "Floride Chemicals Factory" },
  { img: Project4, title: "Floride Chemicals Factory" },
  { img: Project5, title: "Floride Chemicals Factory" },
  { img: Project6, title: "Floride Chemicals Factory" },
];
const Project = () => {
  return (
    <div>
        <Card
        image={img1}
        heading="OUR PROJECTS"
        linkTo="/"
        pageName="Projects"
      />
      <Projectbox
            projects={ProjectPageData}
      />
    </div>
  )
}
export default Project
