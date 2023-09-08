import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About-us Ecommerce"}>
            <div className="row contactus ">
            <div className="col-md-6">
    <img
        src="/images/about.png"
        alt="contactus"
        style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
    />
</div>

                <div className="col-md-4">
    <p className="text-justify mt-2">
        
    </p>
    <p className="text-justify mt-2">
        <strong>About Me:</strong> 
        <p>
        I'm a continuous learner and always on the lookout for new challenges to push my skills to the next level. When I'm not coding, you can find me exploring the latest tech trends, hiking in the great outdoors, or enjoying a good book.
    </p>
    </p>
    <strong>Portfolio Link:</strong> <a href="https://ashish-alok.vercel.app/" target="_blank" rel="noopener noreferrer">Explore my portfolio</a>
</div>

            </div>
        </Layout>
    );
};

export default About;
