import { Button, Col, Container, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from "reactstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiTravel, byId, byIdImg } from "../../api/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function DamOlishAdmin() {

    const [adminHotel, setAdminHotel] = useState([]);
    const [adminHotelId, setAdminHotelId] = useState([]);
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
        axios.get(apiTravel + "places/?category=7").then(res => setAdminHotel(res.data.results));
    }

    // add
    const addRestoran = () => {
        const damOlishPlaces = new FormData();
        let image2 = byIdImg('image2'),
            image3 = byIdImg('image3'),
            image4 = byIdImg('image4'),
            image5 = byIdImg('image5'),
            image6 = byIdImg('image6'),
            image7 = byIdImg('image7'),
            image8 = byIdImg('image8');

        damOlishPlaces.append("image", byIdImg('image'));
        if (image2 != null) damOlishPlaces.append("image2", byIdImg('image2'));
        if (image3 != null) damOlishPlaces.append("image3", byIdImg('image3'));
        if (image4 != null) damOlishPlaces.append("image4", byIdImg('image4'));
        if (image5 != null) damOlishPlaces.append("image5", byIdImg('image5'));
        if (image6 != null) damOlishPlaces.append("image6", byIdImg('image6'));
        if (image7 != null) damOlishPlaces.append("image7", byIdImg('image7'));
        if (image8 != null) damOlishPlaces.append("image8", byIdImg('image8'));
        damOlishPlaces.append('title', byId('title_uz'));
        damOlishPlaces.append('title_uz', byId('title_uz'));
        damOlishPlaces.append('title_en', byId('title_en'));
        damOlishPlaces.append('title_ru', byId('title_ru'));
        damOlishPlaces.append('description', byId('description_uz'));
        damOlishPlaces.append('description_uz', byId('description_uz'));
        damOlishPlaces.append('description_en', byId('description_en'));
        damOlishPlaces.append('description_ru', byId('description_ru'));
        damOlishPlaces.append('description2', byId('description2_uz'));
        damOlishPlaces.append('description2_uz', byId('description2_uz'));
        damOlishPlaces.append('description2_en', byId('description2_en'));
        damOlishPlaces.append('description2_ru', byId('description2_ru'));
        damOlishPlaces.append('description3', byId('description3_uz'));
        damOlishPlaces.append('description3_uz', byId('description3_uz'));
        damOlishPlaces.append('description3_en', byId('description3_en'));
        damOlishPlaces.append('description3_ru', byId('description3_ru'));
        damOlishPlaces.append('rank', byId('rank'));
        damOlishPlaces.append('booking_link', byId('booking_link'));
        damOlishPlaces.append('category', 7);

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.post(apiTravel + "places/", damOlishPlaces, config).then(() => {
            openAddModal();
            getHotelsAdmin();
            toast.success("Dam olish joyi muvaffaqiyatli qo'shildi✔");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi! Ma'lumotlarni qaytadan tekshirib ko'ring!!!");
            openAddModal();
        })
    }

    // edit
    const editRestoran = () => {
        const damOlishPlaces = new FormData();
        let image2 = byIdImg('image2'),
            image3 = byIdImg('image3'),
            image4 = byIdImg('image4'),
            image5 = byIdImg('image5'),
            image6 = byIdImg('image6'),
            image7 = byIdImg('image7'),
            image8 = byIdImg('image8');

        damOlishPlaces.append("image", byIdImg('image'));
        if (image2 != null) damOlishPlaces.append("image2", byIdImg('image2'));
        if (image3 != null) damOlishPlaces.append("image3", byIdImg('image3'));
        if (image4 != null) damOlishPlaces.append("image4", byIdImg('image4'));
        if (image5 != null) damOlishPlaces.append("image5", byIdImg('image5'));
        if (image6 != null) damOlishPlaces.append("image6", byIdImg('image6'));
        if (image7 != null) damOlishPlaces.append("image7", byIdImg('image7'));
        if (image8 != null) damOlishPlaces.append("image8", byIdImg('image8'));
        damOlishPlaces.append('title', byId('title_uz'));
        damOlishPlaces.append('title_uz', byId('title_uz'));
        damOlishPlaces.append('title_en', byId('title_en'));
        damOlishPlaces.append('title_ru', byId('title_ru'));
        damOlishPlaces.append('description', byId('description_uz'));
        damOlishPlaces.append('description_uz', byId('description_uz'));
        damOlishPlaces.append('description_en', byId('description_en'));
        damOlishPlaces.append('description_ru', byId('description_ru'));
        damOlishPlaces.append('description2', byId('description2_uz'));
        damOlishPlaces.append('description2_uz', byId('description2_uz'));
        damOlishPlaces.append('description2_en', byId('description2_en'));
        damOlishPlaces.append('description2_ru', byId('description2_ru'));
        damOlishPlaces.append('description3', byId('description3_uz'));
        damOlishPlaces.append('description3_uz', byId('description3_uz'));
        damOlishPlaces.append('description3_en', byId('description3_en'));
        damOlishPlaces.append('description3_ru', byId('description3_ru'));
        damOlishPlaces.append('rank', byId('rank'));
        damOlishPlaces.append('booking_link', byId('booking_link'));
        damOlishPlaces.append('category', 7);

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.put(apiTravel + "places/" + adminHotelId.id + "/", damOlishPlaces, config).then(() => {
            openEditModal();
            getHotelsAdmin();
            toast.success("Dam olish joyi muvaffaqiyatli taxrirlandi✔");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi! Ma'lumotlarni qaytadan tekshirib ko'ring!!!");
            openEditModal();
        })
    }

    // detele
    const deleteRestoran = () => {

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.delete(apiTravel + "places/" + adminHotelId.id + "/", config).then(() => {
            openDeleteModal();
            getHotelsAdmin();
            toast.success("Dam olish joyi o'chirildi")
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi!");
            openDeleteModal();
        })
    }

    // search
    function searchVal() {
        let searchVal = document.getElementById('search').value
        if (!!searchVal) axios.get(apiTravel + 'places/?category=7&search=' + searchVal).then(res => setAdminHotel(res.data.results))
        else getHotelsAdmin();
    }

    return (
        <Container>
            <NavbarAdmin />

            <h1
                style={{ marginTop: "8rem", marginBottom: "4rem" }}
                className="text-center fw-bold text-dark">Dam olish joylari Admin</h1>

            <div className="mb-5"
                style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <Button onClick={openAddModal} color="primary" className="px-5 py-2 fs-5 fw-medium">Dam olish joylari qo'shish</Button>
                <div>
                    <InputGroup>
                        <Input className="w-25" onChange={searchVal} id="search" size="lg" placeholder="🔍search" />
                        {/* <Button color="success">🔍</Button> */}
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
                            <td><Link to={item.booking_link}>{item.title}</Link></td>
                            <td><Button onClick={() => {
                                openEditModal();
                                setAdminHotelId(item);
                            }} color="warning" outline>Edit</Button></td>
                            <td><Button onClick={() => {
                                openDeleteModal();
                                setAdminHotelId(item);
                            }} color="danger" outline>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* addmodal */}
            <Modal size="xl" isOpen={addModal} scrollable>
                <ModalHeader toggle={openAddModal}><h3>Dam olish joylari qo'shish</h3></ModalHeader>
                <ModalBody className="modal__label">
                    <Row className="w-100">
                        <Col className="col-12 col-md-4">
                            <Label for="image">Image: Majburiy</Label>
                            <Input type="file" id="image" placeholder="image_1" />
                            <Label for="image2">Image 2: Ixtiyoriy</Label>
                            <Input type="file" id="image2" placeholder="image_2" />
                            <Label for="image3">Image 3: Ixtiyoriy</Label>
                            <Input type="file" id="image3" placeholder="image_3" />
                            <Label for="image4">Image 4: Ixtiyoriy</Label>
                            <Input type="file" id="image4" placeholder="image_4" />
                            <Label for="image5">Image 5: Ixtiyoriy</Label>
                            <Input type="file" id="image5" placeholder="image_5" />
                            <Label for="image6">Image 6: Ixtiyoriy</Label>
                            <Input type="file" id="image6" placeholder="image_6" />
                            <Label for="image7">Image 7: Ixtiyoriy</Label>
                            <Input type="file" id="image7" placeholder="image_7" />
                            <Label for="image8">Image 8: Ixtiyoriy</Label>
                            <Input type="file" id="image8" placeholder="image_8" />
                            <Label>Title: Majburiy</Label>
                            <Input id="title_en" placeholder="title_en" />
                            <Input id="title_uz" placeholder="title_uz" />
                            <Input id="title_ru" placeholder="title_ru" />
                            <Input id="rank" type="number" placeholder="rank" />
                        </Col>
                        <Col className="col-12 col-md-8 input__title">
                            <Label for="description">Description: Majburiy</Label>
                            <textarea id="description_en" placeholder="description_en" rows="2"></textarea>
                            <textarea id="description_uz" placeholder="description_uz" rows="2"></textarea>
                            <textarea id="description_ru" placeholder="description_ru" rows="2"></textarea>
                            <Label for="description2">Description_2: Ixtiyoriy</Label>
                            <textarea id="description2_en" placeholder="description_2_en" rows="2"></textarea>
                            <textarea id="description2_uz" placeholder="description_2_uz" rows="2"></textarea>
                            <textarea id="description2_ru" placeholder="description_2_ru" rows="2"></textarea>
                            <Label for="description3">Description_3: Ixtiyoriy</Label>
                            <textarea id="description3_en" placeholder="description_3_en" rows="2"></textarea>
                            <textarea id="description3_uz" placeholder="description_3_uz" rows="2"></textarea>
                            <textarea id="description3_ru" placeholder="description_3_ru" rows="2"></textarea>
                            <Label for="booking_link">Booking link: Ixtiyoriy</Label>
                            <textarea id="booking_link" placeholder="booking_link" rows="3"></textarea>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openAddModal}>Orqaga</Button>
                    <Button color="success" onClick={addRestoran}>Saqlash</Button>
                </ModalFooter>
            </Modal>

            {/* edit modal */}
            <Modal size="xl" scrollable isOpen={editModal}>
                <ModalHeader toggle={openEditModal}><h3>Dam olish joylari tahrirlash</h3></ModalHeader>
                <ModalBody className="modal__label">
                    <Row className="w-100">
                        <Col className="col-12 col-md-4">
                            <Label for="image">Image: Majburiy</Label>
                            <Input type="file" id="image" placeholder="image_1" />
                            <Label for="image2">Image 2: Ixtiyoriy</Label>
                            <Input type="file" id="image2" placeholder="image_2" />
                            <Label for="image3">Image 3: Ixtiyoriy</Label>
                            <Input type="file" id="image3" placeholder="image_3" />
                            <Label for="image4">Image 4: Ixtiyoriy</Label>
                            <Input type="file" id="image4" placeholder="image_4" />
                            <Label for="image5">Image 5: Ixtiyoriy</Label>
                            <Input type="file" id="image5" placeholder="image_5" />
                            <Label for="image6">Image 6: Ixtiyoriy</Label>
                            <Input type="file" id="image6" placeholder="image_6" />
                            <Label for="image7">Image 7: Ixtiyoriy</Label>
                            <Input type="file" id="image7" placeholder="image_7" />
                            <Label for="image8">Image 8: Ixtiyoriy</Label>
                            <Input type="file" id="image8" placeholder="image_8" />
                            <Label>Title: Majburiy</Label>
                            <Input id="title_en" placeholder="title_en" defaultValue={adminHotelId && adminHotelId.title_en} />
                            <Input id="title_uz" placeholder="title_uz" defaultValue={adminHotelId && adminHotelId.title_uz} />
                            <Input id="title_ru" placeholder="title_ru" defaultValue={adminHotelId && adminHotelId.title_ru} />
                            <Input id="rank" type="number" placeholder="rank" defaultValue={adminHotelId && adminHotelId.rank} />
                        </Col>
                        <Col className="col-12 col-md-8 input__title">
                            <Label for="description">Description: Majburiy</Label>
                            <textarea
                                id="description_en"
                                placeholder="description_en"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description_en}></textarea>
                            <textarea
                                id="description_uz"
                                placeholder="description_uz"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description_uz}></textarea>
                            <textarea
                                id="description_ru"
                                placeholder="description_ru"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description_ru}></textarea>
                            <Label for="description2">Description_2: Ixtiyoriy</Label>
                            <textarea
                                id="description2_en"
                                placeholder="description_2_en"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description2_en}></textarea>
                            <textarea
                                id="description2_uz"
                                placeholder="description_2_uz"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description2_uz}></textarea>
                            <textarea
                                id="description2_ru"
                                placeholder="description_2_ru"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description2_ru}></textarea>
                            <Label for="description3">Description_3: Ixtiyoriy</Label>
                            <textarea
                                id="description3_en"
                                placeholder="description_3_en"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description3_en}></textarea>
                            <textarea
                                id="description3_uz"
                                placeholder="description_3_uz"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description3_uz}></textarea>
                            <textarea
                                id="description3_ru"
                                placeholder="description_3_ru"
                                rows="2"
                                defaultValue={adminHotelId && adminHotelId.description3_ru}></textarea>
                            <Label for="booking_link">Booking link: Ixtiyoriy</Label>
                            <textarea
                                id="booking_link"
                                placeholder="booking_link"
                                rows="3"
                                defaultValue={adminHotelId && adminHotelId.booking_link}></textarea>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openEditModal}>Orqaga</Button>
                    <Button color="warning" onClick={editRestoran}>Saqlash</Button>
                </ModalFooter>
            </Modal>

            {/* delete modal */}
            <Modal size="lg" isOpen={deleteModal} scrollable>
                <ModalHeader toggle={openDeleteModal}><h3>Dam olish joylarini o'chirish</h3></ModalHeader>
                <ModalBody scrollable>
                    <Label>{adminHotelId.title}ni o'chirishga ishonchingiz komilmi?</Label>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Orqaga</Button>
                    <Button color="danger" onClick={deleteRestoran}>O'chirish</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default DamOlishAdmin;