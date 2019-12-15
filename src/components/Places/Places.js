import React from "react"
import PlaceList from "./PlaceList"
import { useStaticQuery, graphql } from "gatsby"

const getPlaces = graphql`
query {
    places: allContentfulAmazingHampiData {
        edges {
            node {
                name
                timeRequired
                slug
                timings
                contentful_id
                entryFees
                images {
                    fluid {
                        ...GatsbyContentfulFluid
                }
            }
        }
    }
}
}
`
const Places = () => {
    const { places } = useStaticQuery(getPlaces)
    return <PlaceList places={places} />
}

export default Places
