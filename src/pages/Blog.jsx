import Card from "../components/Card";
import"./Blog.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/img-1.jpg"
import { AboutContext } from "../Index";
import { useContext } from "react";
import Blog1 from "../assets/images/single_blog_1.png.webp"
import Blog2 from "../assets/images/single_blog_2.png.webp"
import Blog3 from "../assets/images/single_blog_3.png.webp"
const blogPosts = [
  {
    id: 1,
    img: Blog1,
    date: "18",
    month: "Mar",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without.",
    author: "Admin",
    comments: 3,
    views: 150
  },
  {
    id: 2,
    img:Blog2,
    date: "19",
    month: "Mar",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without.",
    author: "Admin",
    comments: 5,
    views: 210
  },
  {
    id: 3,
    img:Blog3,
    date: "20",
    month: "Mar",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without.",
    author: "Admin",
    comments: 2,
    views: 98
  }
];
const Blog = () => {
     const { sidebarData } = useContext(AboutContext);
  return (
    <div>
       <Card
        image={img1}
        heading="Blog"
        linkTo="/"
        pageName="Blog"
      />
<div className="page-container">
     <div className="blog-list">
      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          {}
          <div className="blog-img-container">
            <img src={post.img} alt="" className="blog-img" />
            {}
            <div className="blog-date">
              <span>{post.date}</span>
              <small>{post.month}</small>
            </div>
          </div>
          {}
          <div className="blog-content">
            <h2 className="blog-title">
             <Link to="/blog Details">{post.title}</Link></h2>
            <p className="blog-desc">{post.desc}</p>
            <div className="blog-info">
              <span>👤 {post.author}</span>
              <span>💬 {post.comments} Comments</span>
              <span>👁️ {post.views} Views</span>
            </div>
          </div>
        </div>
      ))}
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
export default Blog
