import { useState } from "react";
import OpenAI from "openai";

const token = "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";
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

function AiContent() {

  const client = new OpenAI({
    baseURL: endpoint,
    apiKey: token,
    dangerouslyAllowBrowser: true,
  });

  const[value, setValue] = useState(""); 
  const [aiValue, setClick] = useState(null);

  const handleClick = () => {
    const fetchData = async () => {
      const response = await client.chat.completions.create({
        messages: [
          {
            role: "user",
            content: "generate xml only for"+ value,
          },
        ],
        temperature: 1,
        top_p: 1,
        model: model,
      });

      setClick( response.choices[0].message.content );
    };

    fetchData();
   
  };


  return (
    <div>
      <div className="container text-left">
        <div className="row">
          <div className="col">
            <div className="aiFilter">
              <form>
                <div className="aiInfrastructure border b-radius-30">
                  <div className="container">
                    <h3>Infrastructure</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radioDefault"
                      >
                        Amazon
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radioDefault2"
                      >
                        Azure
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radioDefault3"
                      >
                        Google Cloud
                      </label>
                    </div>
                  </div>
                </div>
                <div className="aiTerra border b-radius-30">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                    />
                  </div>
                </div>
                <div className="aiTextField border b-radius-30">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <label htmlFor="aiText" className="visually-hidden">
                        AI Textbox
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="aiText"
                        placeholder="Enter your Text Prompt"
                        value={value} onChange={(e) => {setValue(e.target.value)}}
                      />
                    </div>
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-dark b-radius mb-3"
                        onClick={handleClick}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="aiReturn border b-radius-30">{aiValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiContent;
