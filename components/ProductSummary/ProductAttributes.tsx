import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const ProductAttributes = (
  { description}: TProductAttributes,
  { name }: TProduct )  => (
  <section className="container">
    <Header as='h3'>About {name}</Header>
    <p>{description}</p>

    <Divider />
  </section>
)

export default ProductAttributes