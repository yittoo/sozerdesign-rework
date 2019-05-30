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
          <input
            type="text"
            className="PaleGreenBg"
            placeholder="NAME*"
            name="name"
            required
          />
          <input
            type="text"
            className="PaleGreenBg"
            placeholder="EMAIL*"
            name="email"
            required
          />
          <input
            type="text"
            className="PaleGreenBg"
            placeholder="SUBJECT"
            name="subject"
          />
        </div>
        <div className="col-wide">
          <textarea
            placeholder="MESSAGE*"
            className="PaleGreenBg"
            name="message"
            required
          />
          <button className="PaleGreenBg">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
