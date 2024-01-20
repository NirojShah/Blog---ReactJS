import React from "react";
import style from "./style.module.css";
import logo from "../../assets/logo transparent white.png";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div id={style.landingMain}>
      <div id={style.nav}>
        <img src={logo} alt="Logo" />
      </div>
      <div id={style.landingDetail}>
        <h1>Curious chronicles</h1>
        <p>
          A CuriousChronicles is a platform where individuals or organizations
          can publish articles, stories, or informational content. It often
          allows readers to comment, share, and engage with the content,
          fostering a sense of community around the topics discussed.
        </p>
      </div>
      <div id={style.routeLinks}>
        <div id={style.authorLink}>
          <h1>Author</h1>
          <p>
            On "Curious Chronicles," authors have the flexibility to craft blogs
            based on user-posted questions or current trends. This adaptability
            allows them to provide valuable insights that align with user
            interests. Authors can update their blogs to incorporate new
            information or developments, ensuring that their content remains
            relevant and informative. Additionally, they can delete blogs that
            have become outdated or less relevant over time, maintaining the
            platform's commitment to quality and accuracy in its content
            offerings. This approach fosters a dynamic environment where authors
            can engage with the audience and deliver impactful content.
          </p>
          <Link to="/signupauthor">
            <button>Start as author</button>
          </Link>
        </div>
        <div id={style.userLink}>
          <h1>User</h1>
          <p>
            "Curious Chronicles" allows users to browse blogs and rate them
            based on their reading experience. This feature empowers users to
            provide valuable feedback, helping to highlight the most insightful
            content. By offering a rating system, the platform fosters user
            engagement and ensures that the best blogs gain visibility within
            the community, creating a dynamic and interactive environment for
            content discovery.
          </p>
          <Link to="/signup">
            <button>Start as user</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
