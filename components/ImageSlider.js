import React from 'react'

export default class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}


// In the components/ImageSlider.js file, create an ImageSlider React component.
// Its initial state should have a property currentSlideIndex that starts at 0.
// It should render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of currentSlideIndex
