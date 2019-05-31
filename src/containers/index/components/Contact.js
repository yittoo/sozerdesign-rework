import React from "react"

const Contact = () => {
  return (
    <div id="Contact" className="Container">
      <h2 className="SlabBold White">CONTACT:</h2>
      <form
        action="https://getsimpleform.com/messages?form_api_token=572bb5e13c427d330de8b1a42d08c00f"
        method="post"
        className="BlackishGray"
      >
        <div className="col-narrow">
          <label>
            <input
              type="text"
              className="PaleGreenBg"
              placeholder="NAME*"
              name="name"
              required
            />
          </label>
          <label>
            <input
              type="text"
              className="PaleGreenBg"
              placeholder="EMAIL*"
              name="email"
              required
            />
          </label>
          <label>
            <input
              type="text"
              className="PaleGreenBg"
              placeholder="SUBJECT"
              name="subject"
            />
          </label>
        </div>
        <div className="col-wide">
          <label>
            <textarea
              placeholder="MESSAGE*"
              className="PaleGreenBg"
              name="message"
              required
            />
          </label>
          <button className="PaleGreenBg">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
