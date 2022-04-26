import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

class SelectData extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('http://localhost:8080/teachers')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.fullName

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
      </div>
   
    )
  }
}


export default SelectData