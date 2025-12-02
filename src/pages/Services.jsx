import Card from "../components/Card"
import img1 from "../assets/images/img-1.jpg"
import Servicebox from "../components/Servicebox";
import Service1 from "../assets/images/services1.png";
import Service2 from "../assets/images/services2.png";
import Service3 from "../assets/images/services3.png";
import Service4 from "../assets/images/services4.png";
import Service5 from "../assets/images/services5.png";
import Service6 from "../assets/images/services6.png";


const servicesPageData = [
  { img: Service1, title: "Engineering Techniques & Implementation" },
  { img: Service2, title: "Engineering Techniques & Implementation" },
  { img: Service3, title: "Engineering Techniques & Implementation" },
  { img: Service4, title: "Engineering Techniques & Implementation" },
  { img: Service5, title: "Engineering Techniques & Implementation" },
  { img: Service6, title: "Engineering Techniques & Implementation" },

];
const Services = () => {
  return (
    <div>
     <Card
        image={img1}
        heading="SERVICES"
        linkTo="/"
        pageName="Services"
      />
       <div>
      <Servicebox 
        sectionTitle="SERVICES WE OFFER"
        services={servicesPageData}
      />
    </div>
    </div>
  )
}

export default Services
