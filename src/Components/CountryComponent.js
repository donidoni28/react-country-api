import React, { useLayoutEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import CountryCardComponent from './CountryCardComponent'
import { ThemeContext } from '../context/theme-context'
import { SearchOutline } from 'react-ionicons'

export default function CountryComponent({ data, onClicked }) {
    // console.log(data)
    let [dData, setDData] = useState()
    let [change, setChange] = useState({
        inpValue: '',
        selecteOpt: ''
    })
    let handleClick = (e) => {
        // console.log(e.target.innerText)
        if (change.selecteOpt === e.target.innerText) {
            setChange({
                inpValue: '',
                selecteOpt: ''
            })

        } else {
            setChange({
                inpValue: '',
                selecteOpt: e.target.innerText,
            })
        }
    }
    let handleChange = (e) => {
        setChange({
            selecteOpt: '',
            inpValue: e.target.value,
        })

    }
    let dataRegions = data && data.map(el => {
        return el.region
    })
    let Options = [new Set(dataRegions)]
    let displayOPt = Array.from(Options[0]).map((ele, i) => {
        return <ThemeContext.Consumer>
            {
                themes => (
                    <Dropdown.Item style={{ color: themes.theme.text.color }} key={i} onClick={(e) => handleClick(e)} href="#">{ele}</Dropdown.Item>
                )
            }
        </ThemeContext.Consumer>
    })
    // console.log(Options)
    useLayoutEffect(() => {
        let test = []
        if (change.inpValue) {
            data.length !== 0 && data.forEach(el => {
                if (el.translations.fr.toLowerCase().startsWith(change.inpValue)) {
                    test = [
                        ...test,
                        el
                    ]
                }
            })
            setDData(test)
        }
        if (change.selecteOpt) {
            data.length !== 0 && data.forEach(el => {
                if (el.region === change.selecteOpt) {
                    console.log(el)
                    test = [
                        ...test,
                        el
                    ]
                }
            })
            // console.log(test);
            setDData(test)

        }
        return () => {
            setDData([])
        }
    }, [change.inpValue, change.selecteOpt, data])

    return (
        <ThemeContext.Consumer>
            {
                themes => (
                    <Container className=''>
                        <Row className="my-3 px-0">
                            <Col sm={12} md={4} className='my-1 my-md-0 px-0'>
                                <InputGroup size='sm' className='ps-0 pe-0'>
                                    <InputGroup.Text id="inputGroup-sizing-sm">
                                        <SearchOutline />
                                    </InputGroup.Text>
                                    <Form.Control
                                        onChange={(e) => handleChange(e)}
                                        value={change.inpValue}
                                        aria-label="sm"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={0} md={5} className='d-none d-md-block px-0'></Col>
                            <Col sm={12} md={3} className='my-1 my-md-0 px-0'>
                                <div className='d-flex flex-row justify-content-end'>
                                    <Dropdown as={ButtonGroup}>
                                        <Button style={{ background: themes.theme.element.background, border: themes.theme.button.border, color: themes.theme.text.color }}>Continent</Button>
                                        <Dropdown.Toggle style={{ background: themes.theme.element.background, border: themes.theme.button.border, color: themes.theme.text.color }} id="dropdown-custom-2" />
                                        <Dropdown.Menu style={{ background: themes.theme.element.background, border: themes.theme.button.border, color: themes.theme.text.color }} >
                                            {
                                                displayOPt
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center justify-content-md-between'>
                            {
                                change.inpValue !== '' && dData.map((element, i) => {

                                    return <CountryCardComponent key={i} country={element} all={data} number={i} />
                                })

                            }
                            {
                                change.selecteOpt !== '' && dData.map((element, i) => {

                                    return <CountryCardComponent key={i} country={element} all={data} number={i} />
                                })
                            }
                            {

                                change.selecteOpt === '' && change.inpValue === '' && data.map((element, i) => {

                                    return <CountryCardComponent key={i} country={element} all={data} number={i} />
                                })
                            }
                        </Row>

                    </Container>

                )
            }
        </ThemeContext.Consumer>
    )
}
