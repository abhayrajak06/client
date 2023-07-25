import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            corporis in quia et asperiores cumque fugiat voluptas tempore natus
            aperiam maiores fugit repudiandae facilis delectus laudantium, nemo
            quod ut rerum nihil. Rerum aspernatur qui at quo dignissimos, vero
            dolorum distinctio aperiam molestiae delectus sequi, fugit
            blanditiis beatae et consequatur quas voluptate laudantium porro?
            Molestias in quam quia illum, eligendi quibusdam vitae accusamus
            iusto ipsam vero provident laborum dolore sed repellat? Velit harum
            adipisci deserunt dicta nam maxime libero id dolorum?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
