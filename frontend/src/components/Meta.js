import React from 'react'
import { Helmet } from 'react-helmet'

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'AM Store. Spend Less. Smile More.',
  description: 'The place where you can find best product at cheapest rate.',
  keywords: 'electronics, buy electronics, cheap electronics',
}

export default Meta
