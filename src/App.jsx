import { useRef } from "react";
import "./App.css";

const App = () => {
  const inputBoxRef = useRef(null);
  const submitButtonRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  const handleSubmit = () => {
    const inputLength = inputBoxRef.current.value.length;
    backgroundVideoRef.current.style.display = "block";

    if (inputLength === 7) {
      backgroundVideoRef.current.src = "thala.mp4";
    } else if (inputBoxRef.current.value === "7") {
      backgroundVideoRef.current.src = "nothing.mp4";
    } else {
      backgroundVideoRef.current.src = "moyemoye.mp4";
    }

    backgroundVideoRef.current.load();
    backgroundVideoRef.current.play();
  };
  return (
    <>
      <div id="main">
        <div id="form">
          <div id="title">
            <h2>Thala Review System 😎</h2>
          </div>
          <div className="">
            <video
              id="backgroundVideo"
              ref={backgroundVideoRef}
              style={{ display: "none" }}
            />
          </div>
          <input type="text" id="inputBox" ref={inputBoxRef} placeholder="enter a 7-letter word"/>
          <br />
          <button
            id="submitButton"
            ref={submitButtonRef}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="social-platform">
          <div className="up">
            <button
              className="card1"
              onClick="window.open('https://www.reddit.com/user/devmehta777/')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30px"
                height="30px"
                viewBox="0 0 48 48"
                className="reddit"
              >
                <path
                  fill="#FFF"
                  d="M12.193 19.555c-1.94-1.741-4.79-1.727-6.365.029-1.576 1.756-1.301 5.023.926 6.632L12.193 19.555zM35.807 19.555c1.939-1.741 4.789-1.727 6.365.029 1.575 1.756 1.302 5.023-.927 6.632L35.807 19.555zM38.32 6.975A3.5 3.5 0 1 0 38.32 13.975 3.5 3.5 0 1 0 38.32 6.975z"
                ></path>
                <path
                  fill="#FFF"
                  d="M24.085 15.665000000000001A18.085 12.946 0 1 0 24.085 41.557A18.085 12.946 0 1 0 24.085 15.665000000000001Z"
                ></path>
                <g>
                  <path
                    fill="#D84315"
                    d="M30.365 23.506A2.884 2.884 0 1 0 30.365 29.274 2.884 2.884 0 1 0 30.365 23.506zM17.635 23.506A2.884 2.884 0 1 0 17.635 29.274 2.884 2.884 0 1 0 17.635 23.506z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#37474F"
                    d="M24.002 34.902c-3.252 0-6.14-.745-8.002-1.902 1.024 2.044 4.196 4 8.002 4 3.802 0 6.976-1.956 7.998-4C30.143 34.157 27.254 34.902 24.002 34.902zM41.83 27.026l-1.17-1.621c.831-.6 1.373-1.556 1.488-2.623.105-.98-.157-1.903-.721-2.531-.571-.637-1.391-.99-2.307-.994-.927.013-1.894.365-2.646 1.041l-1.336-1.488c1.123-1.008 2.545-1.523 3.991-1.553 1.488.007 2.833.596 3.786 1.658.942 1.05 1.387 2.537 1.221 4.081C43.961 24.626 43.121 26.096 41.83 27.026zM6.169 27.026c-1.29-.932-2.131-2.401-2.306-4.031-.166-1.543.279-3.03 1.221-4.079.953-1.062 2.297-1.651 3.785-1.658.009 0 .018 0 .027 0 1.441 0 2.849.551 3.965 1.553l-1.336 1.488c-.753-.676-1.689-1.005-2.646-1.041-.916.004-1.735.357-2.306.994-.563.628-.826 1.55-.721 2.53.115 1.067.657 2.023 1.488 2.624L6.169 27.026zM25 16.84h-2c0-2.885 0-10.548 4.979-10.548 2.154 0 3.193 1.211 3.952 2.096.629.734.961 1.086 1.616 1.086h1.37v2h-1.37c-1.604 0-2.453-.99-3.135-1.785-.67-.781-1.198-1.398-2.434-1.398C25.975 8.292 25 11.088 25 16.84z"
                  ></path>
                  <path
                    fill="#37474F"
                    d="M24.085 16.95c9.421 0 17.085 5.231 17.085 11.661 0 6.431-7.664 11.662-17.085 11.662S7 35.042 7 28.611C7 22.181 14.664 16.95 24.085 16.95M24.085 14.95C13.544 14.95 5 21.066 5 28.611c0 7.546 8.545 13.662 19.085 13.662 10.54 0 19.085-6.116 19.085-13.662C43.17 21.066 34.625 14.95 24.085 14.95L24.085 14.95zM38.32 7.975c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5-2.5-1.122-2.5-2.5S36.941 7.975 38.32 7.975M38.32 5.975c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.486 0 4.5-2.015 4.5-4.5S40.807 5.975 38.32 5.975L38.32 5.975z"
                  ></path>
                </g>
              </svg>
            </button>
            <button
              className="card2"
              onClick="window.open('https://www.twitter.com/DevMehta6277411')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="30px"
                height="30px"
                className="twitter"
              >
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
              </svg>
            </button>
          </div>
          <div className="down">
            <button
              className="card3"
              onClick="window.open('https://github.com/dev4thedeveloper')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
                className="github"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
            <button
              className="card4"
              onClick="window.open('https://www.linkedin.com/in/dev-mehta4369')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30px"
                height="30px"
                viewBox="0 0 48 48"
                className="linkedin"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
