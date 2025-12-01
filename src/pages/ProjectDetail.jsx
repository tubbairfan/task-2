import Card from "../components/Card";
import img1 from "../assets/images/img1.jpg";
import Project1 from "../assets/images/project1.png.webp"
import "./ServiceDetail.css";
const ProjectDetail = () => {
  const paragraphs = [
    `Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu
     quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
      mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg.`,
    `Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu
     quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
      mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg.`,
  ];
  const helpParagraphs = [
   `Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu
     quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
      mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg.`,
   `Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu
     quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
      mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg.`,
  ]
  return (
    <div >
      <Card
        image={img1}
        heading="PROJECT DETAILS"
        linkTo="/"
        pageName="ProjectDetails"
      />
      <div className="service-detail-content">
        <img src={Project1} alt="Service Detail" className="service-img" />
        {}
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <h3>Our Main Goal</h3>
        {}
        {helpParagraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};
export default ProjectDetail;
