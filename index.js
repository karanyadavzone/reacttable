const { useState, useEffect } = React;
function App() {
  let Array = [];
  let Headers = [];
  const [data, setData] = useState([]);
  const [monthName, setMonthname] = useState("MONTH 1");
  const [mapArray, setMapArray] = useState([]);
  Headers[0] = "Onboarding Cell";
  Headers[7] = "Google Search Console Access";
  Headers[14] = "Google Analytics Access";
  Headers[21] = "Website Access";
  Headers[28] = "Technical Audit";
  Headers[35] = "Anchor Text and Sematic Analysis";
  Headers[42] = "Competitor Analysis";
  Headers[49] = "Anchor Text / Url Mapping";
  Headers[56] = "Google Data Studio Report + Local Reporting Suite";
  Headers[63] = "Site Level Optimization";
  Headers[70] = "On Page Optimization";
  Headers[77] = "Content Creation";
  Headers[84] = "Content Publishing";
  Headers[91] = "Premium Press Release";
  Headers[98] = "Authority Niche Placements";
  Headers[105] = "Review Management";
  Headers[112] = "Index Links";
  Headers[119] = "Video Recap";
  let arr = [];
  let val = 0;

  for (let i = 0; i < 126; i++) {
    Array.push(i);
    val = val + 1;
    arr.push(val);
    val = val + 3;
    arr.push(val);
    val = val - 4;
    val = val + 7;
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    let obj = {
      index: name,
      value: value,
    };
    let newArr = [...data];
    // match if the element with same index already exist and update it else add new entry
    let dataIndex = newArr.findIndex((val) => {
      return val.index == name;
    });
    if (value === "") {
      dataIndex === -1 ? newArr.push(obj) : newArr.splice(dataIndex, 1);
    } else {
      dataIndex === -1 ? newArr.push(obj) : (newArr[dataIndex] = obj);
    }

    setData(newArr);
  };
  const handleSave = async () => {
    // for now we are saving data to localstorage
    localStorage.setItem("Tabledata", JSON.stringify(data));

    // This is the function ready to post data to any endpoint

    //-------------------------------//
    // let url = 'https://exampleurl.com'
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // };
    // await fetch(url, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data, "response"));
    //-------------------------------//

    // do changes according to data
  };
  useEffect(() => {
    // get saved data from localstorage
    let saveddata = JSON.parse(localStorage.getItem("Tabledata") || "[]");

    for (let i = 0; i < saveddata?.length; i++) {
      Array[saveddata[i].index] = { value: saveddata[i].value };
      console.log(Array[saveddata[i].index]);
    }
    setData(saveddata);
    setMapArray(Array);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <div>
          <input
            defaultValue={monthName}
            className="headinput titleinput"
            onChange={(e) => setMonthname(e.target.value)}
          />
          <br />
        </div>
        {mapArray.map((item, index) => {
          val = val + 7;
          return (
            <>
              <input
                name={index}
                onChange={handleChange}
                className={index % 7 == 0 ? "headinput" : ""}
                style={arr.includes(index) ? { width: "80px" } : {}}
                defaultValue={
                  item?.value
                    ? item?.value
                    : index % 7 == 0
                    ? Headers[index]
                    : item?.value
                }
              />
              {(index + 1) % 7 == 0 ? (
                <>
                  {" "}
                  <br />
                </>
              ) : null}
            </>
          );
        })}
      </div>
      <div className="outputContainer">
        {data.length !== 0 && (
          <>
            <b>Data ready to post preview</b>
            <button className="saveButton" onClick={handleSave}>
              SAVE DATA
            </button>
            <br />
          </>
        )}
        {data.map((values) => {
          return (
            <div className="card">
              <p>Data - {values.value}</p>
              <p>Index -{values.index}</p>
            </div>
          );
        })}
      </div>
      
    </>
  );
}

function Hello() {
  return (
    <div>
      <App />
      <p className='footer'>IWCN ASSIGNMENT KARAN YADAV </p>
    </div>
  );
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
