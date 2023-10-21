import { Button, Col, Container, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from "reactstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiTravel } from "../../api/api";
import axios from "axios";
import { toast } from "react-toastify";

function ZiyoratgohlarAdmin() {

    const [adminZiyorat, setAdminZiyorat] = useState([]);
    const [adminZiyoratId, setAdminZiyoratId] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const openAddModal = () => setAddModal(!addModal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    useEffect(() => {
        getZiyoratAdmin();
    }, []);

    // getZiyorat
    const getZiyoratAdmin = () => {
        axios.get(apiTravel + "places/?category=9").then(res => setAdminZiyorat(res.data.results));
    }

    function getZiyoratgohObj() {
        const ziyoratgohObj = new FormData();
        ziyoratgohObj.append("image", document.getElementById('image').files[0]);
        ziyoratgohObj.append("image2", document.getElementById('image2').files[0]);
        ziyoratgohObj.append("image3", document.getElementById('image3').files[0]);
        ziyoratgohObj.append("image4", document.getElementById('image4').files[0]);
        ziyoratgohObj.append("image5", document.getElementById('image5').files[0]);
        ziyoratgohObj.append("image6", document.getElementById('image6').files[0]);
        ziyoratgohObj.append("image7", document.getElementById('image7').files[0]);
        ziyoratgohObj.append("image8", document.getElementById('image8').files[0]);
        ziyoratgohObj.append("title", document.getElementById('title_uz').value);
        ziyoratgohObj.append("title_en", document.getElementById('title_en').value);
        ziyoratgohObj.append("title_uz", document.getElementById('title_uz').value);
        ziyoratgohObj.append("title_ru", document.getElementById('title_ru').value);
        ziyoratgohObj.append("description", document.getElementById('description_uz').value);
        ziyoratgohObj.append("description_en", document.getElementById('description_en').value);
        ziyoratgohObj.append("description_uz", document.getElementById('description_uz').value);
        ziyoratgohObj.append("description_ru", document.getElementById('description_ru').value);
        ziyoratgohObj.append("description2", document.getElementById('description2_uz').value);
        ziyoratgohObj.append("description2_en", document.getElementById('description2_en').value);
        ziyoratgohObj.append("description2_uz", document.getElementById('description2_uz').value);
        ziyoratgohObj.append("description2_ru", document.getElementById('description2_ru').value);
        ziyoratgohObj.append("description3", document.getElementById('description3_uz').value);
        ziyoratgohObj.append("description3_en", document.getElementById('description3_en').value);
        ziyoratgohObj.append("description3_uz", document.getElementById('description3_uz').value);
        ziyoratgohObj.append("description3_ru", document.getElementById('description3_ru').value);
        ziyoratgohObj.append("rank", document.getElementById('rank').value);
        ziyoratgohObj.append("booking_link", document.getElementById('booking_link').value);
        return ziyoratgohObj;
    }

    // add ziyoratgoh
    const addZiyoratgoh = () => {
        axios.post(apiTravel + "places/?category=9/", getZiyoratgohObj(), {
            headers: {
                "Authorization": "Basic b3h1bmpvbkBnbWFpbC5jb206MjAwNQ=="
            }
        }).then(() => {
            openAddModal();
            getZiyoratAdmin();
            toast.success("Mehmonxona muvaffaqiyatli qo'shildi✔");
        }).catch(() => {
            toast.error("Qandaydur xatolik yuz berdi! Buning uchun sizdan uzur suraymiz!!!");
            openAddModal();
            // console.log(err);
        })
    }

    // edit ziyorat
    const editZiyorat = () => {
        axios.put(apiTravel + "places/" + adminZiyoratId.id + "/", getZiyoratgohObj(), {
            headers: {
                "Authorization": "Basic b3h1bmpvbkBnbWFpbC5jb206MjAwNQ=="
            }
        }).then(() => {
            openEditModal();
            getZiyoratAdmin();
            toast.success("Mehmonxona muvaffaqiyatli taxrirlandi✔");
        }).catch(() => {
            toast.error("Qandaydur xatolik yuz berdi! Buning uchun sizdan uzur suraymiz!!!");
            openEditModal();
            // console.log(err);
        })
    }

    // detele hotel
    const deleteZiyorat = () => {
        axios.delete(apiTravel + "places/" + adminZiyoratId.id + "/", {
            headers: {
                "Authorization": "Basic b3h1bmpvbkBnbWFpbC5jb206MjAwNQ=="
            }
        }).then(() => {
            openDeleteModal();
            getZiyoratAdmin();
            toast.success("Mehmonxona o'chirildi")
        }).catch(() => {
            toast.error("Qandaydur xatolik yuz berdi! Buning uchun sizdan uzur suraymiz!!!");
            openDeleteModal();
        })
    }

    // search
    function searchVal() {
        let searchVal = document.getElementById('search').value
        if (!!searchVal) axios.get(apiTravel + 'places/?category=9&search=' + searchVal).then(res => setAdminZiyorat(res.data.results))
        else getZiyoratAdmin();
    }

    return (
        <Container>
            <NavbarAdmin />

            <h1
                style={{ marginTop: "8rem", marginBottom: "4rem" }}
                className="text-center fw-bold text-dark">Ziyoratgoh Admin</h1>

            <div className="mb-5"
                style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <Button onClick={openAddModal} color="primary" className="px-5 py-2 fs-5 fw-medium">Ziyoratgohlar qo'shish</Button>
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
                    {adminZiyorat.length && adminZiyorat.map((item, i) =>
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td><img src={item.image} alt="img" width="100" height="80" /></td>
                            <td>{item.title}</td>
                            {/* <td>{item.description}</td> */}
                            <td><Link to={item.booking_link}>{item.title}</Link></td>
                            <td><Button onClick={() => {
                                openEditModal();
                                setAdminZiyoratId(item);
                            }} color="warning" outline>Edit</Button></td>
                            <td><Button onClick={() => {
                                openDeleteModal();
                                setAdminZiyoratId(item);
                            }} color="danger" outline>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* addmodal */}
            <Modal scrollable size="xl" isOpen={addModal}>
                <ModalHeader toggle={openAddModal}><span className="fw-bold fs-2 text-dark">Ziyoratgohlar qo'shish</span></ModalHeader>
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
                    <Button color="success" onClick={addZiyoratgoh}>Saqlash</Button>
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
                            <Input id="title_en" placeholder="title_en" defaultValue={adminZiyoratId && adminZiyoratId.title_en} />
                            <Input id="title_uz" placeholder="title_uz" defaultValue={adminZiyoratId && adminZiyoratId.title_uz} />
                            <Input id="title_ru" placeholder="title_ru" defaultValue={adminZiyoratId && adminZiyoratId.title_ru} />
                            <Input id="rank" type="number" placeholder="rank" defaultValue={adminZiyoratId && adminZiyoratId.rank} />
                        </Col>
                        <Col className="col-12 col-md-8 input__title">
                            <Label for="description">Description: Majburiy</Label>
                            <textarea
                                id="description_en"
                                placeholder="description_en"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description_en}></textarea>
                            <textarea
                                id="description_uz"
                                placeholder="description_uz"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description_uz}></textarea>
                            <textarea
                                id="description_ru"
                                placeholder="description_ru"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description_ru}></textarea>
                            <Label for="description2">Description_2: Ixtiyoriy</Label>
                            <textarea
                                id="description2_en"
                                placeholder="description_2_en"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description2_en}></textarea>
                            <textarea
                                id="description2_uz"
                                placeholder="description_2_uz"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description2_uz}></textarea>
                            <textarea
                                id="description2_ru"
                                placeholder="description_2_ru"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description2_ru}></textarea>
                            <Label for="description3">Description_3: Ixtiyoriy</Label>
                            <textarea
                                id="description3_en"
                                placeholder="description_3_en"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description3_en}></textarea>
                            <textarea
                                id="description3_uz"
                                placeholder="description_3_uz"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description3_uz}></textarea>
                            <textarea
                                id="description3_ru"
                                placeholder="description_3_ru"
                                rows="2"
                                defaultValue={adminZiyoratId && adminZiyoratId.description3_ru}></textarea>
                            <Label for="booking_link">Booking link: Ixtiyoriy</Label>
                            <textarea
                                id="booking_link"
                                placeholder="booking_link"
                                rows="3"
                                defaultValue={adminZiyoratId && adminZiyoratId.booking_link}></textarea>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openEditModal}>Orqaga</Button>
                    <Button color="success" onClick={editZiyorat}>Saqlash</Button>
                </ModalFooter>
            </Modal>

            {/* delete modal */}
            <Modal isOpen={deleteModal}>
                <ModalHeader toggle={openDeleteModal}>Ziyoratgohni o'chirish</ModalHeader>
                <ModalBody>
                    Siz bu ziyoratgohni o'chirmoqchisiz. <br />
                    Bu ziyoratgohni o'chirishga ishonchingiz komilmi?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Orqaga</Button>
                    <Button onClick={deleteZiyorat} color="danger">O'chirish</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default ZiyoratgohlarAdmin;