import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import { Link } from "gatsby"
import Banner from "../components/Banner"

export default () => (
        <Layout>
        <SimpleHero>
            <Banner
                title="Awesome Hampi"
                info="Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site."
            >
                <Link to="/places" className="btn-white">explore places</Link>
            </Banner>
        </SimpleHero>
        </Layout>
)
