import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from "reactstrap";
import { apiTravel } from "../../api/api";
import { Link } from "react-router-dom";
import NavbarAdmin from "../navbar/NavbarAdmin";

function RestuarantAdmin() {
    const [adminHotel, setAdminHotel] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        getHotelsAdmin();
    }, []);

    // addmodal
    const openAddModal = () => setAddModal(!addModal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    // getHotels
    const getHotelsAdmin = () => {
        axios.get(apiTravel + "places/?category=5").then(res => setAdminHotel(res.data.results));
    }
    return (
        <Container>
            <NavbarAdmin />

            <h1
                style={{ marginTop: "8rem", marginBottom: "4rem" }}
                className="text-center fw-bold text-dark">Restoran Admin</h1>

            <div className="mb-5"
                style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <Button onClick={openAddModal} color="primary" className="px-5 py-2 fs-5 fw-medium">Restoran qo'shish</Button>
                <div>
                    <InputGroup>
                        <Input className="w-25" size="lg" placeholder="🔍search" />
                        <Button color="success">🔍</Button>
                    </InputGroup>
                </div>
            </div>

            <Table bordered>
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        {/* <th>Description</th> */}
                        <th>Link</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {adminHotel.length && adminHotel.map((item, i) =>
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td><img src={item.image} alt="img" width="100" height="80" /></td>
                            <td>{item.title}</td>
                            {/* <td>{item.description}</td> */}
                            <td><Link to={item.booking_link}>Booking link (☞ﾟヮﾟ)☞</Link></td>
                            <td><Button onClick={openEditModal} color="warning" outline>Edit</Button></td>
                            <td><Button onClick={openDeleteModal} color="danger" outline>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* addmodal */}
            <Modal size="xl" isOpen={addModal} scrollable>
                <ModalHeader toggle={openAddModal}><h3>Restoran qo'shish</h3></ModalHeader>
                <ModalBody >
                    <Row className="w-100">
                        <Col className="col-12 col-md-4">
                            <Label for="image">Image 1</Label>
                            <Label for="image">Majburiy</Label>
                            <Input className="mt-2" type="file" id="image" placeholder="image_1" />
                            <Label className="mt-2" for="image">Ixtiyoriy</Label>
                            <Input className="mt-2" type="file" placeholder="image_2" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Input className="mt-2" type="file" placeholder="image_4" />
                            <Input className="mt-2" type="file" placeholder="image_5" />
                            <Input className="mt-2" type="file" placeholder="image_6" />
                            <Input className="mt-2" type="file" placeholder="image_7" />
                            <Input className="mt-2" type="file" placeholder="image_8" />
                            <Label className="mt-2 d-block" for="image">Majburiy</Label>
                            <Input className="mt-2" placeholder="title_en" />
                            <Input className="mt-2" placeholder="title_ru" />
                            <Input className="mt-2" placeholder="title_uz" />
                        </Col>
                        <Col className="col-12 col-md-8">

                            <Label className="mt-2 d-block" for="image">Majburiy</Label>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_en" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_ru" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_uz" ></textarea>
                            <Label className="mt-2 d-block" for="image">Ixtiyoriy</Label>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_en" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_ru" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_uz" ></textarea>
                            <Label className="mt-2 d-block" for="image">Majburiy</Label>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="Booking link" ></textarea>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openAddModal}>Orqaga</Button>
                    <Button color="success">Saqlash</Button>
                </ModalFooter>
            </Modal>

            <Modal size="xl" isOpen={editModal} scrollable>
                <ModalHeader toggle={openEditModal}><h3>Mehmonxonani tahrirlash</h3></ModalHeader>
                <ModalBody scrollable>
                    <Row className="w-100">
                        <Col className="col-12 col-md-4">
                            <Label for="image">Image 1</Label>
                            <Label for="image">Majburiy</Label>
                            <Input className="mt-2" type="file" id="image" placeholder="image_1" />
                            <Label className="mt-2 d-block" for="image">Ixtiyoriy</Label>
                            <Input className="mt-2" type="file" placeholder="image_2" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Input className="mt-2" type="file" placeholder="image_3" />
                            <Label className="mt-2 d-block" for="image">Majburiy</Label>
                            <Input className="mt-2" placeholder="Title eng" />
                            <Input className="mt-2" placeholder="Title rus" />
                            <Input className="mt-2" placeholder="Title uzb" />
                        </Col>
                        <Col className="col-12 col-md-8">

                            <Label className="mt-2 d-block" for="image">Majburiy</Label>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_en" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_ru" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_uz" ></textarea>
                            <Label className="mt-2 d-block" for="image">Ixtiyoriy</Label>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_en"></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_ru" ></textarea>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="description_uz" ></textarea>
                            <Label className="mt-2 d-block" for="image">Majburiy</Label>
                            <textarea className="mt-2" name="" id="" cols="60" placeholder="Booking link" ></textarea>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openEditModal}>Orqaga</Button>
                    <Button color="warning">Saqlash</Button>
                </ModalFooter>
            </Modal>

            <Modal size="lg" isOpen={deleteModal} scrollable>
                <ModalHeader toggle={openDeleteModal}><h3>Mehmonxonani o'chirish</h3></ModalHeader>
                <ModalBody scrollable>
                    <Label>Buni o'chirishingizga ishonchingiz komilmi?</Label>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Orqaga</Button>
                    <Button color="danger">Ha</Button>
                </ModalFooter>
            </Modal>
        </Container>

    );
}

export default RestuarantAdmin;