// import { Link } from 'react-router-dom'
import './Home.less'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import Typed from 'typed.js'

const Test = styled.div`
    color: red;
`

const FirstPage = () => {
    const myText = React.useRef(null)

    React.useEffect(() => {
        const typed = new Typed(myText.current, {
            strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
            typeSpeed: 50,
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy()
        }
    }, [])
    console.log(myText)
    return (
        <div className="section">
            <div className="section__content">
                <span ref={myText} />
            </div>
        </div>
    )
}

const Test2 = ({ fullpageApi }) => {
    const [change, setChange] = React.useState(0)
    console.log(fullpageApi)
    return (
        <div className="section">
            <p>Section {change} (welcome to fullpage.js)</p>
            <button onClick={() => setChange(change + 1)}>
                Click me to add up
            </button>
        </div>
    )
}

Test2.propTypes = {
    fullpageApi: PropTypes.object,
}

function Home() {
    return (
        <>
            <main>
                {/* <div className="page">
                    this is my first page
                    <div className="test">111</div>
                    <Test>111</Test>
                </div> */}
                <ReactFullpage
                    //fullpage options
                    licenseKey="gplv3-license"
                    scrollingSpeed={600} /* Options here */
                    render={({ fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <FirstPage />
                                <div className="section">
                                    <p>Section 2</p>
                                </div>
                                <Test className="section">1111</Test>
                                <Test2 fullpageApi={fullpageApi} />
                                <Test className="section">1111</Test>
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </main>
        </>
    )
}

export default Home
