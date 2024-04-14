import { Container,Row,Col } from "react-bootstrap";

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={12} >
                        <p>CopyRight 2023.</p>
                    </Col>

                </Row>
            </Container>

        </footer>
    )
}