import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import FridgeAdapter from '../adapters'
import FoodList from './FoodList'
import FoodForm from './FoodForm'
import FoodDetail from './FoodDetail'
import Drawers from './Drawers'
import CatShow from './CatShow'
import Background from '../images/emptyfridgewithbanana.jpg'
import { Grid } from 'semantic-ui-react'


export default class FridgeContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(context){
    super(context)
    this.state = {
      foods: [],
      categories: []
    }

    this.createFood = this.createFood.bind(this)
    this.deleteFood = this.deleteFood.bind(this)

  }

  componentDidMount(){
    FridgeAdapter.all()
    .then(data => {
      this.setState({ foods: data })
    })
    FridgeAdapter.allCats()
    .then(data => {
      this.setState({ categories: data })
    })
  }

  createFood(food){
    FridgeAdapter.create(food)
    .then(data => this.setState((previousState) => {
      debugger
      return {
        foods: [...previousState.foods, data]
      }
    }))
  }

  createCat(cat){
    FridgeAdapter.createCat(cat)
    .then(cat => this.setState((previousState) => {
        return {
          categories: [...previousState.categories, cat]
        }
      })
    )
  }

  deleteFood(id, food){
    if (parseInt(food.quantity) === 1){
    FridgeAdapter.destroy(id)
    .then(() => {
      this.setState(previousState => {
        return {
          foods: previousState.foods.filter( food => food.id !== id )
        }
      })
    })
    .then(this.context.router.history.push('/foods'))
  } else {
    food.quantity = (parseInt(food.quantity) - 1).toString()
    var newFood = this.state.foods.map(item => {
      if (item.id === id){
        return food
      } else {
        return item
      }
    })
    this.setState({ foods: newFood })
    }
  }

  render(){
    return (
      <Grid className="fridgeCont" padded>
        <Grid.Column width={4}>
          <FoodForm createFood={this.createFood} categories={this.state.categories} type="Add a food" />
        </Grid.Column>
        <Grid.Column width={9}>
          <Drawers cats={this.state.categories} />

          <FoodList foods={this.state.foods} />
          <Route exact path='/foods/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const food = this.state.foods.find( s =>  s.id === parseInt(id) )
                if (!food){
                routerProps.history.push("/foods")
                return null
              }
              return <FoodDetail food={food} deleteFood={this.deleteFood}/>
          }} />
        </Grid.Column>
      </Grid>
    )
  }
}
