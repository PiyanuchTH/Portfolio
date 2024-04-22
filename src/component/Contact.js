import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const formInitialDetails = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText] = useState('Send');
    const [status] = useState({});

    

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_8fazwhr', 'template_vuxhm0o',
            {
                from_name: formDetails.firstname + " " + formDetails.lastname,
                to_name: 'Piyanuch',
                from_email: formDetails.email,
                to_email: 'deardear060344@gmail.com',
                message: formDetails.message,
            }, '4h7OSla14PQBp2YSb')
            .then(() => {
                alert('Thank you. I will get back to you as soon as possible');

                setFormDetails({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    message: ''
                }, (err) => {
                    console.log(err);
                    alert('Something went wrong');
                })
            })
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstname} placeholder="Firstname" onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastname} placeholder="Lastname" onChange={(e) => onFormUpdate('lastname', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col >
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}