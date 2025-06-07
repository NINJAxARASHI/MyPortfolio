import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null,
    };
  }

  toggleSection = (sectionTitle) => {
    this.setState((prevState) => ({
      activeSection:
        prevState.activeSection === sectionTitle ? null : sectionTitle,
    }));
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          const isActive = this.state.activeSection === section["title"];
          return (
            <div key={section["title"]} className="accordion-section">
              <button
                className={`accordion-header ${isActive ? "active" : ""}`}
                onClick={() => this.toggleSection(section["title"])}
                style={{
                  backgroundColor: theme.body,
                  border: `1px solid ${theme.headerColor}`,
                  color: theme.text,
                  width: "100%",
                  textAlign: "left",
                  padding: "15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              >
                <h3 style={{ margin: 0 }}>{section["title"]}</h3>
                <span
                  style={{
                    transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ▼
                </span>
              </button>
              {isActive && (
                <div
                  className="accordion-content"
                  style={{
                    backgroundColor: theme.body,
                    padding: "20px",
                    borderRadius: "0 0 5px 5px",
                    border: `1px solid ${theme.headerColor}`,
                    borderTop: "none",
                  }}
                >
                  {section["experiences"].map((experience, index) => (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
