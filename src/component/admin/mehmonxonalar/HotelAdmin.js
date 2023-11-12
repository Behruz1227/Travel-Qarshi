import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from "reactstrap";
import { apiTravel, byId, byIdImg } from "../../api/api";
import "./style.scss";
import { toast } from "react-toastify";
import NavbarAdmin from "../navbar/NavbarAdmin";

function HotelAdmin() {

    const [adminHotel, setAdminHotel] = useState([]);
    const [hotelItemId, setHotelItemId] = useState("");
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        getHotelsAdmin();
    }, []);

    const openAddModal = () => setAddModal(!addModal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    // getHotels
    const getHotelsAdmin = () => {
        axios.get(apiTravel + "places/?category=4").then(res => setAdminHotel(res.data.results));
    }

    // add hotel
    const addHotels = () => {
        const getHotelObj = new FormData();
        let image2 = byIdImg('image2'),
            image3 = byIdImg('image3'),
            image4 = byIdImg('image4'),
            image5 = byIdImg('image5'),
            image6 = byIdImg('image6'),
            image7 = byIdImg('image7'),
            image8 = byIdImg('image8');

        getHotelObj.append("image", byIdImg('image'));
        if (image2 != null) getHotelObj.append("image2", byIdImg('image2'));
        if (image3 != null) getHotelObj.append("image3", byIdImg('image3'));
        if (image4 != null) getHotelObj.append("image4", byIdImg('image4'));
        if (image5 != null) getHotelObj.append("image5", byIdImg('image5'));
        if (image6 != null) getHotelObj.append("image6", byIdImg('image6'));
        if (image7 != null) getHotelObj.append("image7", byIdImg('image7'));
        if (image8 != null) getHotelObj.append("image8", byIdImg('image8'));
        getHotelObj.append('title', byId('title_uz'));
        getHotelObj.append('title_uz', byId('title_uz'));
        getHotelObj.append('title_en', byId('title_en'));
        getHotelObj.append('title_ru', byId('title_ru'));
        getHotelObj.append('description', byId('description_uz'));
        getHotelObj.append('description_uz', byId('description_uz'));
        getHotelObj.append('description_en', byId('description_en'));
        getHotelObj.append('description_ru', byId('description_ru'));
        getHotelObj.append('description2', byId('description2_uz'));
        getHotelObj.append('description2_uz', byId('description2_uz'));
        getHotelObj.append('description2_en', byId('description2_en'));
        getHotelObj.append('description2_ru', byId('description2_ru'));
        getHotelObj.append('description3', byId('description3_uz'));
        getHotelObj.append('description3_uz', byId('description3_uz'));
        getHotelObj.append('description3_en', byId('description3_en'));
        getHotelObj.append('description3_ru', byId('description3_ru'));
        getHotelObj.append('rank', byId('rank'));
        getHotelObj.append('booking_link', byId('booking_link'));
        getHotelObj.append('category', 4);

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.post(apiTravel + "places/", getHotelObj, config).then(() => {
            openAddModal();
            getHotelsAdmin();
            toast.success("Mehmonxona muvaffaqiyatli qo'shildi✔");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi! Ma'lumotlarni qaytadan tekshirib ko'ring!!!");
            openAddModal();
        })
    }

    // edit hotel
    const editHotels = () => {
        const getHotelObj = new FormData();
        let image2 = byIdImg('image2'),
            image3 = byIdImg('image3'),
            image4 = byIdImg('image4'),
            image5 = byIdImg('image5'),
            image6 = byIdImg('image6'),
            image7 = byIdImg('image7'),
            image8 = byIdImg('image8');

        getHotelObj.append("image", byIdImg('image'));
        if (image2 != null) getHotelObj.append("image2", byIdImg('image2'));
        if (image3 != null) getHotelObj.append("image3", byIdImg('image3'));
        if (image4 != null) getHotelObj.append("image4", byIdImg('image4'));
        if (image5 != null) getHotelObj.append("image5", byIdImg('image5'));
        if (image6 != null) getHotelObj.append("image6", byIdImg('image6'));
        if (image7 != null) getHotelObj.append("image7", byIdImg('image7'));
        if (image8 != null) getHotelObj.append("image8", byIdImg('image8'));
        getHotelObj.append('title', byId('title_uz'));
        getHotelObj.append('title_uz', byId('title_uz'));
        getHotelObj.append('title_en', byId('title_en'));
        getHotelObj.append('title_ru', byId('title_ru'));
        getHotelObj.append('description', byId('description_uz'));
        getHotelObj.append('description_uz', byId('description_uz'));
        getHotelObj.append('description_en', byId('description_en'));
        getHotelObj.append('description_ru', byId('description_ru'));
        getHotelObj.append('description2', byId('description2_uz'));
        getHotelObj.append('description2_uz', byId('description2_uz'));
        getHotelObj.append('description2_en', byId('description2_en'));
        getHotelObj.append('description2_ru', byId('description2_ru'));
        getHotelObj.append('description3', byId('description3_uz'));
        getHotelObj.append('description3_uz', byId('description3_uz'));
        getHotelObj.append('description3_en', byId('description3_en'));
        getHotelObj.append('description3_ru', byId('description3_ru'));
        getHotelObj.append('rank', byId('rank'));
        getHotelObj.append('booking_link', byId('booking_link'));
        getHotelObj.append('category', 4);

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.put(apiTravel + "places/" + hotelItemId.id + "/", getHotelObj, config).then(() => {
            openEditModal();
            getHotelsAdmin();
            toast.success("Mehmonxona muvaffaqiyatli taxrirlandi✔");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi! Ma'lumotlarni qaytadan tekshirib ko'ring!!!");
            openEditModal();
        })
    }

    // detele hotel
    const deleteHotels = () => {

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.delete(apiTravel + "places/" + hotelItemId.id + "/", config).then(() => {
            openDeleteModal();
            getHotelsAdmin();
            toast.success("Mehmonxona o'chirildi")
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi!");
            openDeleteModal();
        });
    }

    // search
    function searchVal() {
        let searchVal = document.getElementById('search').value
        if (!!searchVal) axios.get(apiTravel + 'places/?category=4&search=' + searchVal).then(res => setAdminHotel(res.data.results))
        else getHotelsAdmin();
    }

    return (
        <Container>
            <NavbarAdmin />

            <h1
                style={{ marginTop: "8rem", marginBottom: "4rem" }}
                className="text-center fw-bold text-dark">Hotel Admin</h1>

            <div className="mb-5"
                style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <Button onClick={openAddModal} color="primary" className="px-5 py-2 fs-5 fw-medium">Mehmonxona qo'shish</Button>
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
                                setHotelItemId(item);
                            }} color="warning" outline>Edit</Button></td>
                            <td><Button onClick={() => {
                                openDeleteModal();
                                setHotelItemId(item);
                            }} color="danger" outline>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* addmodal */}
            <Modal scrollable size="xl" isOpen={addModal}>
                <ModalHeader toggle={openAddModal}><span className="fw-bold fs-2 text-dark">Mehmonxona qo'shish</span></ModalHeader>
                <ModalBody className="modal__label">
                    <Row>
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
                    <Button color="success" onClick={addHotels}>Saqlash</Button>
                </ModalFooter>
            </Modal>

            {/* editModal */}
            <Modal scrollable size="xl" isOpen={editModal}>
                <ModalHeader toggle={openEditModal}><span className="fw-bold fs-2 text-dark">Taxrirlash</span></ModalHeader>
                <ModalBody className="modal__label">
                    <Row>
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
                            <Input id="title_en" placeholder="title_en" defaultValue={hotelItemId && hotelItemId.title_en} />
                            <Input id="title_uz" placeholder="title_uz" defaultValue={hotelItemId && hotelItemId.title_uz} />
                            <Input id="title_ru" placeholder="title_ru" defaultValue={hotelItemId && hotelItemId.title_ru} />
                            <Input id="rank" type="number" placeholder="rank" defaultValue={hotelItemId && hotelItemId.rank} />
                        </Col>
                        <Col className="col-12 col-md-8 input__title">
                            <Label for="description">Description: Majburiy</Label>
                            <textarea
                                id="description_en"
                                placeholder="description_en"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description_en}></textarea>
                            <textarea
                                id="description_uz"
                                placeholder="description_uz"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description_uz}></textarea>
                            <textarea
                                id="description_ru"
                                placeholder="description_ru"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description_ru}></textarea>
                            <Label for="description2">Description_2: Ixtiyoriy</Label>
                            <textarea
                                id="description2_en"
                                placeholder="description_2_en"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description2_en}></textarea>
                            <textarea
                                id="description2_uz"
                                placeholder="description_2_uz"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description2_uz}></textarea>
                            <textarea
                                id="description2_ru"
                                placeholder="description_2_ru"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description2_ru}></textarea>
                            <Label for="description3">Description_3: Ixtiyoriy</Label>
                            <textarea
                                id="description3_en"
                                placeholder="description_3_en"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description3_en}></textarea>
                            <textarea
                                id="description3_uz"
                                placeholder="description_3_uz"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description3_uz}></textarea>
                            <textarea
                                id="description3_ru"
                                placeholder="description_3_ru"
                                rows="2"
                                defaultValue={hotelItemId && hotelItemId.description3_ru}></textarea>
                            <Label for="booking_link">Booking link: Ixtiyoriy</Label>
                            <textarea
                                id="booking_link"
                                placeholder="booking_link"
                                rows="3"
                                defaultValue={hotelItemId && hotelItemId.booking_link}></textarea>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openEditModal}>Orqaga</Button>
                    <Button color="success" onClick={editHotels}>Saqlash</Button>
                </ModalFooter>
            </Modal>

            {/* delete modal */}
            <Modal isOpen={deleteModal}>
                <ModalHeader toggle={openDeleteModal}>Mehmonxonani o'chirish</ModalHeader>
                <ModalBody>
                    Siz bu mehmonxonani o'chirmoqchisiz. <br />
                    Bu mehmonxonani o'chirishga ishonchingiz komilmi?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Orqaga</Button>
                    <Button onClick={deleteHotels} color="danger">O'chirish</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default HotelAdmin;