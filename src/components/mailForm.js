import React from "react";
import video1 from "../assets/riph/video.mp4";
import CustomForm from "../components/mailchimp";

const mailForm = () => {
    const videoSource = {video1}
    return (
        <div>
            <video autoPlay="autoplay" loop="loop">
                <source src={video1} type="video/mp4" />
                <CustomForm />
            </video>
        </div>
    );
}

export default mailForm;