import { cloneDeep } from 'lodash';
import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/theme-context';
import { ArrowBackOutline } from 'react-ionicons';


export default function DetailComponent() {
    const location = useLocation()
    let [state, setState] = useState(cloneDeep(location.state))
    const navigate = useNavigate()
    const { selected, countries } = state
    console.log(state)


    let limitrophe = selected.borders && countries.filter(d => {
        return selected.borders.indexOf(d.alpha3Code) !== -1
    })
    let handleClick = (e) => {
        let targetName = e.target.innerText
        let temp = null
        limitrophe.forEach(limit => {
            if (limit.name === targetName) {
                console.log(limit);
                temp = limit
            }
        })
        setState({
            ...state,
            selected: temp
        })


    }
    let handleBack = () => {
        navigate('/')
    }
    let buttons = limitrophe && limitrophe.map((buttons, i) => {
        return <ThemeContext.Consumer>
            {themes=>(
                <Button style={{background:themes.theme.element.background, color:themes.theme.text.color, border: themes.theme.button.border}} className='shadow mx-1 my-1 text-nowrap' key={i} onClick={(e) => handleClick(e)} variant="light">{buttons.name}</Button>
            )}
        </ThemeContext.Consumer>
        // return <Col xs={6} md={6} lg={3} xl={1}>

        // </Col> 
    })
    console.log(window);
    limitrophe && console.log(buttons)
    return (
        <ThemeContext.Consumer>
            { themes => (
                <Container className='' style={{ color: themes.theme.text.color}}>
                    <Row className='py-3 py-md-5'>
                        <Col>
                            <Button style={{background:themes.theme.element.background, color:themes.theme.text.color, border: themes.theme.button.border}} onClick={handleBack} className='shadow' 
                            variant="light"><ArrowBackOutline 
                                color={themes.theme.text.color}
                                className='pe-2'
                            />Back</Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={12} md={6} >
                            <Image fluid src={selected.flag} className='shadow' />
                        </Col>
                        <Col xs={12} md={6} className='lh-1 p-md-4 ps-lg-5'>
                            <Row className='mt-5 mt-md-0'>
                                <p className='fw-bolder'>{selected.name}</p>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <p className='detail-name fw-semibold'>Native Name: <span className='detail-value fw-light'>{selected.nativeName}</span></p>
                                    <p className='detail-name fw-semibold'>Population: <span className='detail-value fw-light'>{selected.population}</span></p>
                                    <p className='detail-name fw-semibold'>Region: <span className='detail-value fw-light'>{selected.region}</span></p>
                                    <p className='detail-name fw-semibold'>Sub Region: <span className='detail-value fw-light'>{selected.subregion}</span></p>
                                    <p className='detail-name fw-semibold'>Capital: <span className='detail-value fw-light'>{selected.capital}</span></p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <p className='detail-name fw-semibold'>Top Level Domain: <span className='detail-value fw-light'>{selected.topLevelDomain}</span></p>
                                    <p className='detail-name fw-semibold'>Currencies: <span className='detail-value fw-light'>{selected.currencies[0].name}</span></p>
                                </Col>
                            </Row>
                            <div className='d-flex flex-wrap align-items-end '>
                                <p className='me-3'>Border Countries :</p>
                                {limitrophe && buttons}

                            </div>
                        </Col>
                    </Row>
                    <Row className='h-100'>

                    </Row>
                </Container>

            )}
        </ThemeContext.Consumer>
    )
}
