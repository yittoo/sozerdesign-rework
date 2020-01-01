import React from "react"

const Contact = ({ animate }) => {
  return (
    <div id="Contact" className="Container">
      <h2
        className={`SlabBold White ${
          animate ? "EnterFromRight" : "Transparent"
        }`}
      >
        CONTACT:
      </h2>
      <form
        action="https://getsimpleform.com/messages?form_api_token=572bb5e13c427d330de8b1a42d08c00f"
        method="post"
        className={`ColorDark1 ${animate ? "EnterFromBottom" : "Transparent"}`}
      >
        <div className="col-narrow">
          <label className="SlabBold">
            <span>* NAME:</span>
            <input
              type="text"
              className="TertiaryColorBg"
              name="name"
              required
            />
          </label>
          <label className="SlabBold">
            <span>* EMAIL:</span>
            <input
              type="text"
              className="TertiaryColorBg"
              name="email"
              required
            />
          </label>
          <label className="SlabBold">
            <span>SUBJECT:</span>
            <input type="text" className="TertiaryColorBg" name="subject" />
          </label>
        </div>
        <div className="col-wide">
          <label className="TextareaBox SlabBold">
            <span>* MESSAGE:</span>
            <textarea className="TertiaryColorBg" name="message" required />
          </label>
          <button className="TertiaryColorBg">SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
