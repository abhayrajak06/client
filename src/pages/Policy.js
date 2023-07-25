import React from "react";
import Layout from ".././components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptatum omnis neque quam consequatur tenetur dignissimos impedit
            recusandae eos? Voluptatem commodi ratione cum modi nobis deleniti.
            Fuga quae laudantium ipsam iusto sint porro facilis eos, perferendis
            totam aliquid cupiditate suscipit nobis id ratione impedit
            assumenda, praesentium ipsa beatae quia possimus delectus nihil
            dicta. Amet soluta delectus officiis, porro officia error.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
