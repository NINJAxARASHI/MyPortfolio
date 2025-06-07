import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "#001C55" }} // Fond bleu foncé
      >
        <path
          class="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <path
          class="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <path
          class="letter"
          d="M217.945 123.968V132H194.566V123.968H200.65L198.395 115.799H186.056L183.526 123.968H189.884V132H168.829V123.968H174.708L183.971 92.4883H177.647V84.4561H208.683V92.4883H202.291L212.271 123.968H217.945ZM196.446 108.826L192.481 94.5049L188.209 108.826H196.446Z"
          stroke={theme.body}
          stroke-width="3"
        />
        <path
          class="letter"
          d="M217.153 158V149.968H223.101V118.488H217.153V110.456H240.122V118.488H235.132V128.913H248.086V118.488H243.267V110.456H266.099V118.488H260.117V149.968H266.099V158H243.267V149.968H248.086V136.979H235.132V149.968H240.122V158H217.153Z"
          stroke={theme.body}
          stroke-width="3"
        />

        {/* SIGNATURE ANIMEE : Arashi Hunter */}
        <text
          x="60"
          y="250"
          fontFamily="Agustina Regular, cursive"
          fontSize="40"
          fill="#ffffff"
          className="signature-animated"
        >
          <tspan className="char1">A</tspan>
          <tspan className="char2">r</tspan>
          <tspan className="char3">a</tspan>
          <tspan className="char4">s</tspan>
          <tspan className="char5">h</tspan>
          <tspan className="char6">i</tspan>
          <tspan className="char7"> </tspan>
          <tspan className="char8">H</tspan>
          <tspan className="char9">u</tspan>
          <tspan className="char10">n</tspan>
          <tspan className="char11">t</tspan>
          <tspan className="char12">e</tspan>
          <tspan className="char13">r</tspan>
          <tspan className="cursor">|</tspan>
        </text>

        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .char1 { opacity: 0; animation: typeIn 0.2s forwards 0.8s; }
                .char2 { opacity: 0; animation: typeIn 0.2s forwards 1.0s; }
                .char3 { opacity: 0; animation: typeIn 0.2s forwards 1.2s; }
                .char4 { opacity: 0; animation: typeIn 0.2s forwards 1.4s; }
                .char5 { opacity: 0; animation: typeIn 0.2s forwards 1.6s; }
                .char6 { opacity: 0; animation: typeIn 0.2s forwards 1.8s; }
                .char7 { opacity: 0; animation: typeIn 0.2s forwards 2.0s; }
                .char8 { opacity: 0; animation: typeIn 0.2s forwards 2.2s; }
                .char9 { opacity: 0; animation: typeIn 0.2s forwards 2.4s; }
                .char10 { opacity: 0; animation: typeIn 0.2s forwards 2.6s; }
                .char11 { opacity: 0; animation: typeIn 0.2s forwards 2.8s; }
                .char12 { opacity: 0; animation: typeIn 0.2s forwards 3.0s; }
                .char13 { opacity: 0; animation: typeIn 0.2s forwards 3.2s; }
                .cursor { 
                  opacity: 0;
                  animation: blink 0.7s infinite 3.2s;
                }

                @keyframes typeIn {
                  0% { 
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  100% { 
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }

                .letter {
                  opacity: 0;
                  animation: fadein 2s linear forwards 2.5s;
                }

                .myHexagon {
                  stroke-dasharray: 800;
                  stroke-dashoffset: 800;
                  animation: dash 4s linear forwards 0.5s;
                }

                @keyframes dash {
                  to {
                    stroke-dashoffset: 0;
                  }
                }

                @keyframes fadein {
                  to {
                    opacity: 1;
                  }
                }
              `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
