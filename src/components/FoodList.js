import React from 'react'
import { Link } from 'react-router-dom'
import FoodDetail from './FoodDetail'
import { Modal, Grid, Button } from 'semantic-ui-react'
import '../index.css'

export default function FoodList(props){
  return (

        <Grid columns={3} divided>
          {props.foods.map((food, i) => (
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Modal key={i} trigger={<Button size="big">{food.name}</Button>} closeIcon="close" size="large">
                    <FoodDetail food={food} />
              </Modal>
            </Grid.Column>
            )
          )}
        </Grid>
  )
}
