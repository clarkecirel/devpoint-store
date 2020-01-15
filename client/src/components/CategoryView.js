import React from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";
import { Image, Card, Container, Button, Grid, Segment,Dropdown } from "semantic-ui-react";
import '../styles/catView.css'


class CategoryView extends React.Component {
  state = { category: {}, items: [] };
  

  // Mount used to make API calls to update state
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/categories/${id}`)
      .then(res => {
        this.setState({ category: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`/api/categories/${id}/items`)
      .then(res => this.setState({ items: res.data }));
  }

  // function to delete item
  deleteItem = id => {
    axios
      .delete(`/api/categories/${this.props.match.params.id}/items/${id}`)
      .then(res => {
        const { items } = this.state;
        this.setState({ items: items.filter(i => i.id !== id) });
      });
  };

  // function to delete item
  deleteItem = (id) => {
    axios.delete(`/api/categories/${this.props.match.params.id}/items/${id}`)
      .then( res => {
        const { items, } = this.state;
        this.setState({ items: items.filter(i => i.id !== id), })
      })
  }

  add = (data) => {
    this.setState({...this.state, items: [...this.state.items, data]})
  }

  // list of all item names
  renderItems() {
    const { id, } = this.props.match.params;
    return this.state.items.map(i => (
      <>

      <Grid.Column style={{display: "flex", justifyContent: "center"}}>
        <Link to={`/api/categories/${id}/items/${i.id}`}>
          <Image src={i.image} />
        <h4 style={{textAlign: "center"} }>   {i.name}</h4>

          <h4 style={{textAlign: "center"}}> ${i.price}.00 </h4>
          <br />
          <br />
        </Link>
          {/* <Button onClick={() => this.deleteItem(i.id)}>Delete</Button> */}
      </Grid.Column>
          <br />
          </>
    ));
  }


  render() {
    // const options = [
    //   { key: 1, text: 'Price: Low to High', value: 1 },
    //   { key: 2, text: 'Price: High to Low', value: 2 },
    //   { key: 3, text: 'Best Selling', value: 3 },
    //   { key: 4, text: 'On sale', value: 4 },
      

    // ]

    const options = [
      { key: 1, text: 'Price: Low to High', value: 1 },
      { key: 2, text: 'Price: High to Low', value: 2 },
      { key: 3, text: 'Most Popular', value: 3 },
      { key: 4, text: 'On Sale', value: 4 },
    ]
    return (
      <>
        <Container>
          {/* Category Picture */}
          <Card.Group itemsPerRow={1}>
            <Card>
              <Card.Content>
                <Image id ='mainimage'src={this.state.category.image} />
                <div id="shadowy"></div>
                <h1 id='cardname'>{this.state.category.name}</h1>
                <h3 id='sorty'>Sort By:</h3>
                <Button.Group
                 id='sortbutton'
                 inverted color='black'>
                  <Dropdown
                    className='button icon'
                    floating
                    options={options}
                    placeholder='Select an Option' />
                </Button.Group>
              </Card.Content>
            </Card>
          </Card.Group>
   
        <Segment>
          <ItemForm category_id={this.props.match.params.id} add={this.add} />
        </Segment>
          <hr />
          <br />
          <Grid >
            <Grid.Row padded relaxed columns={4}>
              {this.renderItems()}
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}





export default CategoryView;


