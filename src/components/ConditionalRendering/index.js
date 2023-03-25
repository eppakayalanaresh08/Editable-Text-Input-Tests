import {Component} from 'react'

import './index.css'

class ConditionalRendering extends Component {
  state = {statusButton: false, textSave: ''}

  onClickTextButton = () => {
    this.setState(prevState => ({statusButton: !prevState.statusButton}))
  }

  onChangeText = event => {
    this.setState({textSave: event.target.value})
  }

  render() {
    const {statusButton, textSave} = this.state
    const textButton = statusButton ? 'Edit' : 'Save'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-input">Editable Text Input</h1>
          <div className="container-input">
            {statusButton ? (
              <p className="text-save">{textSave}</p>
            ) : (
              <input
                type="text"
                onChange={this.onChangeText}
                className="input-Element"
                value={textSave}
              />
            )}
            <button
              type="button"
              onClick={this.onClickTextButton}
              className="button-Text"
            >
              {textButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ConditionalRendering
