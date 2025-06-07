import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="experience-content">
          {experience.sections.map((section, sectionIndex) => (
            <div key={section.title} className="experience-section">
              <Fade bottom duration={1000} distance="20px">
                <h2
                  className="section-title"
                  style={{
                    color: theme.text,
                    borderBottom: `2px solid ${theme.headerColor}`,
                    paddingBottom: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {section.title}
                </h2>
              </Fade>

              <div className="experience-cards-container">
                {section.experiences.map((exp, index) => (
                  <Fade
                    bottom
                    duration={1000}
                    distance="20px"
                    delay={index * 200}
                  >
                    <div
                      key={index}
                      className="experience-card"
                      style={{
                        backgroundColor: theme.body,
                        border: `1px solid ${theme.headerColor}`,
                        borderRadius: "10px",
                        padding: "20px",
                        marginBottom: "20px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        transition: "transform 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div>
                          <h3
                            style={{ color: theme.text, margin: "0 0 10px 0" }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            style={{
                              color: theme.secondaryText,
                              margin: "0 0 10px 0",
                            }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p
                            style={{
                              color: theme.secondaryText,
                              margin: "0 0 5px 0",
                            }}
                          >
                            {exp.duration}
                          </p>
                          <p style={{ color: theme.secondaryText, margin: 0 }}>
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: "15px" }}>
                        {Array.isArray(exp.description) ? (
                          <ul
                            style={{
                              margin: 0,
                              paddingLeft: "20px",
                              color: theme.text,
                            }}
                          >
                            {exp.description.map((item, i) => (
                              <li key={i} style={{ marginBottom: "5px" }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p style={{ color: theme.text, margin: 0 }}>
                            {exp.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
