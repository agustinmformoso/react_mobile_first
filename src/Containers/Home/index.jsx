import React from 'react'
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap/'
import { ButtonCustom, Header, TransactionList, SearchBar, NavBar } from '../../Components/'
import { GLOBAL } from '../../Config/global'
import { TransactionsProvider } from '../../Store/TransactionsContext'
import profile_picture from '../../Resources/Images/duko.jpg'

const Home = () => {
    return (        
        <TransactionsProvider>
            <Container fluid={true} className="p-0 m-0">
                <Row className="p-0 m-0">
                    <Col xs={12} className="p-0 m-0">
                        <Header roundedCircle={true} width="100" interval={false} profile_picture={profile_picture} />
                        <Col xs={12} className="d-flex justify-content-center">
                            <ButtonCustom block={false} variant="link" size="lg" btn_msg="depositar" className="btn-depositar bg-white shadow-sm px-5 py-3" />
                        </Col>
                        <Row className="p-0 m-0">
                            <Col xs={12} md={{ span: 6, offset: 3 }}>
                                <SearchBar placeholder={GLOBAL.SEARCH.PLACEHOLDER} text={GLOBAL.SEARCHBAR.TEXT} />
                                <TransactionList />
                                <NavBar />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </TransactionsProvider>
    )
}

export default Home
