import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
      "entry.310829241": "",
      "entry.1330483961": "",
      "entry.2294100": "",
      "entry.1696234116": "",
      "entry.332270016-1": "",
      "entry.332270016-2": "",
      "entry.332270016-3": "",
      "entry.332270016-4": "",
      "entry.332270016-5": "",
      "entry.332270016-6": "",
      "entry.332270016-7": "",
      "entry.332270016-8": "",
      "entry.667021705": ""
  })
  const [option8ticked, setOption8ticked] = useState(false)
  const [option7ticked, setOption7ticked] = useState(false)
  const [option6ticked, setOption6ticked] = useState(false)
  const [option5ticked, setOption5ticked] = useState(false)
  const [option4ticked, setOption4ticked] = useState(false)
  const [option3ticked, setOption3ticked] = useState(false)
  const [option2ticked, setOption2ticked] = useState(false)
  const [option1ticked, setOption1ticked] = useState(false)

  const handleInputData = (input) => (e) => {
    const { value } = e.target
    // let value
    // const checkedArr = []
    // if (e.target.type !== 'checkbox') {
    //   value = e.target.value
    // } else {
    //   const checkeds = document.getElementsByTagName('input');
    //   for (let i = 0; i < checkeds.length; i++) {
    //     if (checkeds[i].checked) {
    //       checkedArr.push(checkeds[i].value)
    //     }
    //   }
    //   value = checkedArr
    //   console.log(checkedArr)
    // }

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  // const handleCheckboxChange = (input) => (e) => {
  //   const { checked } = e.target;

  //   if (checked) {
  //     setDataArray((prevState) => [...prevState, e.target.value]);
  //   } else {
  //     setDataArray(dataArray[input].filter((item) => item !== e.target.value));
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let checkboxes = document.getElementsByTagName('input');
    var vals = ""
    var boxesTicked = []
    for ( var i=0; i < checkboxes.length; i++ ) {
      if ( checkboxes[i].checked ) {
        boxesTicked.push(checkboxes[i].value)
      }
    }

    // let url = `https://docs.google.com/forms/d/e/1FAIpQLSfrwpT7lHkNQfrHk8MgdlNogs5riMFfAh5TfmEZQXoz3PQ8Gg/formResponse?entry.310829241=${formData["entry.310829241"]}&entry.2294100=${formData["entry.2294100"]}&entry.1330483961=${formData["entry.1330483961"]}&entry.1696234116=${formData["entry.1696234116"]}&entry.667021705=${formData["entry.667021705"]}&entry.332270016=${formData["entry.332270016-1"]}&entry.332270016=${formData["entry.332270016-2"]}&entry.332270016=${formData["entry.332270016-3"]}&entry.332270016=${formData["entry.332270016-4"]}&entry.332270016=${formData["entry.332270016-5"]}&entry.332270016=${formData["entry.332270016-6"]}&entry.332270016=${formData["entry.332270016-7"]}&entry.332270016=${formData["entry.332270016-8"]}`;
    let url = `https://docs.google.com/forms/d/e/1FAIpQLSfrwpT7lHkNQfrHk8MgdlNogs5riMFfAh5TfmEZQXoz3PQ8Gg/formResponse?entry.310829241=${formData["entry.310829241"]}&entry.2294100=${formData["entry.2294100"]}&entry.1330483961=${formData["entry.1330483961"]}&entry.1696234116=${formData["entry.1696234116"]}&entry.667021705=${formData["entry.667021705"]}`

    const res = await fetch(url, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
          <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm"><h4>Thanks for your enquiry!</h4>
          <p>Callum and the team will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.310829241">Your name</label>
              <input
                required
                type="text"
                name="entry.310829241"
                id="entry.310829241"
                onChange={handleInputData("entry.310829241")}
                value={formData["entry.310829241"]}
                autoComplete="false"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.2294100">Your email</label>
              <input
                required
                type="email"
                name="entry.2294100"
                id="entry.2294100"
                onChange={handleInputData("entry.2294100")}
                value={formData["entry.2294100"]}
                autoComplete="false"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1330483961">Your phone number</label>
              <input
                type="number"
                name="entry.1330483961"
                id="entry.1330483961"
                onChange={handleInputData("entry.1330483961")}
                value={formData["entry.1330483961"]}
                autoComplete="false"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1696234116">Your business name</label>
              <input
                type="text"
                name="entry.1696234116"
                id="entry.1696234116"
                onChange={handleInputData("entry.1696234116")}
                value={formData["entry.1696234116"]}
                autoComplete="false"
              />
            </fieldset>

            <fieldset>
            <label htmlFor="entry.332270016" id="interest">I am interested in sponsoring...</label>
            <div className="form-checkbox">
                  <span>
                    <label htmlFor="Gym Membership (Thai Boxing)">Gym Membership (Thai Boxing)</label>
                    <input type="checkbox" name="entry.332270016-1" id="Gym Membership (Thai Boxing)" value="Gym Membership (Thai Boxing)" onChange={handleInputData("entry.332270016-1")} />
                  </span>
                  <span>
                    <label htmlFor="Training Kit">Training Kit</label>
                    <input type="checkbox" name="entry.332270016-2" id="Training Kit" value="Training Kit" onChange={handleInputData("entry.332270016-2")} />
                  </span>
                  <span>
                    <label htmlFor="Vehicle">Vehicle</label>
                    <input type="checkbox" name="entry.332270016-3" id="Vehicle" value="Vehicle" onChange={handleInputData("entry.332270016-3")} />
                  </span>
                  <span>
                    <label htmlFor="Gym Membership Travel">Gym Membership Travel</label>
                    <input type="checkbox" name="entry.332270016-4" id="Gym Membership Travel" value="Gym Membership Travel" onChange={handleInputData("entry.332270016-4")} />
                  </span>
                  <span>
                    <label htmlFor="Fitness & Fight Travel">Fitness & Fight Travel</label>
                    <input type="checkbox" name="entry.332270016-5" id="Fitness & Fight Travel" value="Fitness & Fight Travel" onChange={handleInputData("entry.332270016-5")} />
                  </span>
                  <span>
                    <label htmlFor="Training Camp Meal Preps">Training Camp Meal Preps</label>
                    <input type="checkbox" name="entry.332270016-6" id="Training Camp Meal Preps" value="Training Camp Meal Preps" onChange={handleInputData("entry.332270016-6")} />
                  </span>
                  <span>
                    <label htmlFor="Supplements">Supplements</label>
                    <input type="checkbox" name="entry.332270016-7" id="Supplements" value="Supplements" onChange={handleInputData("entry.332270016-7")} />
                  </span>
                  <span>
                    <label htmlFor="Other">Other</label>
                    <input type="checkbox" name="entry.332270016-8" id="Other" value="Other" onChange={handleInputData("entry.332270016-8")} />
                  </span>
                </div>
            </fieldset>

            <fieldset>
            <label htmlFor="entry.667021705">Your message</label>
              <textarea
                name="entry.667021705"
                id="entry.667021705"
                rows="6"
                cols="80"
                onChange={handleInputData("entry.667021705")}
                value={formData["entry.667021705"]}
                autoComplete="false"
                style="height: 100px; width: 100%;"
              ></textarea>
            </fieldset>

            <button type="submit">Submit form</button>
          </form>
        )}
      </div>
    </div>
    </main>
  );
}
