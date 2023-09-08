import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={'Privacy Policy'}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
    <h2>Privacy Policy</h2>
    <p>
        Your privacy matters to us. Here's a summary of our practices:
    </p>
    <ul>
        <li>We collect essential data for order processing.</li>
        <li>Your information is never sold to third parties.</li>
        <li>We use cookies for a better browsing experience.</li>
        <li>Security measures protect your data.</li>
        <li>Policy updates will be communicated.</li>
    </ul>
    
</div>

            </div>
        </Layout>
    );
};

export default Policy;
