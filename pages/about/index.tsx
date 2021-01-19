import React from 'react'
import { Image, Header } from 'semantic-ui-react'

import Layout from '@components/Layout/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <Header as="h1" textAlign="center">
        Really you got all the way down here?
      </Header>

      <h2>
        Anyway, not much to see. Hope you enjoyed the other parts of the site!
      </h2>

      <h2>
        Also take a look at this parallel project made by my company{' '}
        <a href="https://github.com/Altair-Devs">Altaïr Devs</a> <br />
      </h2>

      <h2>
        <a href="https://github.com/Altair-Devs/Renacimiento">
          Renaissance Art
        </a>
      </h2>

      <style jsx>{`
        h2 {
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
