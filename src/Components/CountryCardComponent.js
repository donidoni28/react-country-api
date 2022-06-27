import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/theme-context';

export default function CountryCardComponent({ country, all }) {
    const navigate = useNavigate()
    const cardData = (data, all) => {
        navigate('/detail', {
            state: {
                selected: data,
                countries: all
            }
        })
    }
    // console.log(country)
    return (
        <ThemeContext.Consumer>
            {
                themes => (

                    <Card onClick={() => cardData(country, all)} className='p-0 m-0 mb-2' style={{ width: '18rem', background: themes.theme.background.background, color:themes.theme.text.color }}>
                        {/* <Image src={data.flag}/> */}
                        <div style={{ width: '100%', height: '10rem', backgroundImage: `url(${country.flag})`, backgroundSize: 'cover', backgroundPosition: 'left center' }} >

                        </div>
                        {/* <Card.Img variant="top" src={data.flag} /> */}
                        <Card.Body className='d-flex flex-column justify-content-end'>
                            <Card.Title>{country.translations.fr}</Card.Title>
                            <Card.Text>
                                population: {country.population}
                            </Card.Text>
                            <Card.Text>
                                region: {country.region}
                            </Card.Text>
                            <Card.Text>
                                capital: {country.capital}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </ThemeContext.Consumer>

    )
}
