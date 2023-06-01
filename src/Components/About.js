import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic =
      "images/" + <myprofilepic className="jpeg"></myprofilepic>;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Cyberzik</h2>

              <p>
                My name is Cyberzik, and I am a passionate web developer and
                Solidity developer. With a strong foundation in web development
                technologies and extensive experience in the world of
                blockchain, I strive to create innovative and secure solutions
                for the digital landscape. I am well-versed in front-end and
                back-end development, utilizing modern frameworks and languages
                to build robust and user-friendly websites and applications.
                Additionally, my expertise in Solidity allows me to develop
                smart contracts and decentralized applications DApps on various
                blockchain platforms. I am constantly exploring new technologies
                and staying up-to-date with the latest trends in the industry to
                provide cutting-edge solutions for my clients. Whether you need
                a sleek website, a secure smart contract, or an interactive
                DApp, I am here to turn your ideas into reality. Let's
                collaborate and create something remarkable together!"
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Osamor Isaac</span>
                    {/* <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span> */}
                    <br></br>
                    <span>09057469410</span>
                    <br />
                    <span>cyberzikk1@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="https://www.linkedin.com/in/peter-osamor-isaac-chukwuka-003ab51a4/"
                      className="button"
                    >
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
