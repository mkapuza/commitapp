import React, { Component } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: true }
    // Mobile workaround
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.setChartDimensions)
      this.state = { matches: window.matchMedia("(min-width: 768px)").matches }
    }
  }

  componentDidMount() {
    // Mobile workaround
    if (typeof window !== "undefined") {
      const handler = e => this.setState({ matches: e.matches })
      window.matchMedia("(min-width: 768px)").addListener(handler)
    }
  }
  render() {
    return (
      <Layout>
        <SEO title="Commit App" />
        {this.state.matches ? (
          <div>
            {/* Desktop */}
            <div style={{ width: `50%`, display: `inline-block` }}>
              <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
                <Image image="commitAppDemo" />
              </div>
            </div>
            <div
              style={{
                width: `50%`,
                display: `inline-block`,
                verticalAlign: `top`,
                marginTop: `50px`,
              }}
            >
              <h1>Commit to your goals {this.state.matches}</h1>
              <p>
                With Commit for iPhone, you'll discover how simple meeting your
                fitness goals really is, and how committing money to yourself
                can lead to amazing results.
              </p>
              <p style={{ marginBottom: 70 }}>
                Now let's accomplish your goals!
              </p>
              <Image image="downloadAppStore" style={{ width: `150px` }} />
            </div>
          </div>
        ) : (
          <div style={{ textAlign: `center` }}>
            {/* Mobile */}
            <div style={{ width: `100%` }}>
              <div style={{ maxWidth: `150px`, margin: `auto` }}>
                <Image image="commitAppDemo" />
              </div>
            </div>
            <div
              style={{
                width: `100%`,
                verticalAlign: `top`,
              }}
            >
              <h1>Commit to your goals {this.state.matches}</h1>
              <p>
                With Commit for iPhone, you'll discover how simple meeting your
                fitness goals really is, and how committing money to yourself
                can lead to amazing results.
              </p>
              <p style={{ marginBottom: 30 }}>
                Now let's accomplish your goals!
              </p>
              <Image
                image="downloadAppStore"
                style={{
                  width: `150px`,
                  margin: `auto`,
                  marginBottom: 70,
                }}
              />
            </div>
          </div>
        )}
      </Layout>
    )
  }
}

export default IndexPage
