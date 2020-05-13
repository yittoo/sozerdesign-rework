import React, { Component } from "react"

import Sketch from "./Sketch"
import s from "./Fake3D.module.scss"

class Fake3D extends Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount() {
    new Sketch({}, this.container.current)
  }

  render() {
    return (
      <div
        className={s.gl}
        ref={this.container}
        data-imageoriginal={this.props.imageOriginal}
        data-imagedepth={this.props.imageMap}
        data-horizontalthreshold="35"
        data-verticalthreshold="15"
      />
    )
  }
}

export default Fake3D
