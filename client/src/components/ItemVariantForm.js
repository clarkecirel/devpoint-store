import React from 'react'
import axios from "axios"
import { Form, Header, Button, } from "semantic-ui-react"

class ItemVariantForm extends React.Component {
  state = { item_id: '', color: "", image: "", quantity: "", size: "", }

  //grab the item reveling details 
  componentDidMount() {
    const { id, item_id, } = this.props
    if (id && item_id)
      axios.get(`/api/items/${item_id}/item_variants/${id}`)
        .then(res => {
          const { item_id, color, image, quantity, size } = res.data
          this.setState({ item_id, color, image, quantity, size })
        })
        .catch(err => {
          console.log(err.responce)
        })
  }
  //this needs to get looked at
  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }
  //this needs to get looked at
  handleSubmit = (e) => {
    e.preventDefault()
    const { color, quantity, size } = this.state
    const itemVariant = { color, quantity, size, }
    const { id, item_id, } = this.props
    if (id && item_id) {
      axios.put(`/api/items/${item_id}/item_variants/${id}`, itemVariant)
        .then(res => {
          this.props.update(res.data)
        })
      this.props.close()
    } else {
      axios.post(`/api/items/${item_id}/item_variants`, itemVariant)
        .then(res => {
          
        })
    }
  }

  render() {
    const { color, image, quantity, size } = this.state
    return (
      <>
        <h1> ItemVariantForm</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='Image'
            value={image}
            label="Image"
            placeholder="Image"
            // required
            onChange={this.handleChange}
          />
          <Form.Input
            name='quantity'
            value={quantity}
            label="Quantity"
            placeholder="Quantity"
            // required
            onChange={this.handleChange}
          />
          <Form.Input
            name='size'
            value={size}
            label="Size"
            placeholder="Size"
            // required
            onChange={this.handleChange}
          />
          <Form.Input
            name='olor'
            value={color}
            label="Color"
            placeholder="color"
            // required
            onChange={this.handleChange}
          />
          <br /><br />
          <Form.Button color="blue">
            Submit
            </Form.Button>
        </Form>
      </>
    )
  }
}

export default ItemVariantForm;
