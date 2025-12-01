import Card from "../components/Card";
import"./Blog.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/img1.jpg"
import { AboutContext } from "../Index";
import { useContext } from "react";
import Blog1 from "../assets/images/single_blog_1.png.webp"
const blogPosts =
    {id: 1,
    img: Blog1,
    date: "18",
    month: "Mar",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without.",
    author: "Admin",
    comments: 3,
    views: 150
    }
const BlogDetails = () => {
    const { sidebarData } = useContext(AboutContext);
  return (
    <div>
       <Card
        image={img1}
        heading="Blog Details"
        linkTo="/"
        pageName="Blog Detail"
      />
      <div className="page-container">
           <div className="blog-list">
              <div className="blog-card" key={blogPosts.id}>
                {}
                <div className="blog-img-container">
                  <img src={blogPosts.img} alt="" className="blog-img" />
                  {}
                  <div className="blog-date">
                    <span>{blogPosts.date}</span>
                    <small>{blogPosts.month}</small>
                  </div>
                </div>
                {}
                <div className="blog-content">
                  <h2 className="blog-title">{blogPosts.title}</h2>
                  <p className="blog-desc">{blogPosts.desc}</p>
                  <div className="blog-info">
                    <span>👤 {blogPosts.author}</span>
                    <span>💬 {blogPosts.comments} Comments</span>
                    <span>👁️ {blogPosts.views} Views</span>
                  </div>
                </div>
              </div>
               <p>MCSE boot camps have its supporters and its detractors. 
                  Some people do not understand why you should have to spend
                   money on boot camp when you can get the MCSE study materials yourself
                    at a fraction of the camp price. However, who has the willpower</p>
                   <p1> MCSE boot camps have its supporters and its detractors. Some people
                     do not understand why you should have to spend money on boot camp 
                     when you can get the MCSE study materials yourself at a fraction 
                     of the camp price. However, who has the willpower to actually sit
                      through a self-imposed MCSE training. who has the willpower to actually</p1>
         <h2 className="contact-title">Leave a Message</h2>
             <form className="contact-form">
          <textarea placeholder="Enter Message" />
          <div className="form-row">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Enter Subject" />
          <button className="send-btn">SEND</button>
        </form>
          </div>
          <div className="sidebar">
            {}
            <div className="search-box">
              <input
                type="text"
                placeholder={sidebarData.searchPlaceholder}
              />
              <button>Search</button>
            </div>
            {}
            <h3>Category</h3>
            <ul>
              {sidebarData.categories.map((cat, idx) => (
                <li key={idx}>{cat}</li>
              ))}
            </ul>
            {}
            <h3>Recent Post</h3>
            {sidebarData.recentPosts.map((post, idx) => (
              <div key={idx} className="recent-item">
                <img src={post.img} alt="" width="60" />
                <div>
                  <p>{post.title}</p>
                  <small>{post.date}</small>
                </div>
              </div>
            ))}
            {}
            <h3>Tag Clouds</h3>
            <div className="tags">
              {sidebarData.tags.map((t, idx) => (
                <span key={idx} className="tag">{t}</span>
              ))}
            </div>
            {}
            <h3>Instagram Feeds</h3>
            <div className="insta-grid">
              {sidebarData.instagram.map((img, idx) => (
                <img key={idx} src={img} alt="" width="70" />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}
export default BlogDetails
