import { NavLink } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="section container" style={{ textAlign: "center" }}>
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lede" style={{ margin: "0 auto 28px" }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <NavLink to="/" className="btn btn-primary">
          Back to Home
        </NavLink>
      </section>
    </>
  );
}
