import {
    Button,
    Col,
    Container,
    Input,
    InputGroup,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    Table
} from "reactstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiTravel, byId, byIdImg } from "../../api/api";
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

    // add ziyoratgoh
    const addZiyoratgoh = () => {
        const ziyoratgohObj = new FormData();
        let image2 = byIdImg('image2'),
            image3 = byIdImg('image3'),
            image4 = byIdImg('image4'),
            image5 = byIdImg('image5'),
            image6 = byIdImg('image6'),
            image7 = byIdImg('image7'),
            image8 = byIdImg('image8');

        ziyoratgohObj.append("image", byIdImg('image'));
        if (image2 != null) ziyoratgohObj.append("image2", byIdImg('image2'));
        if (image3 != null) ziyoratgohObj.append("image3", byIdImg('image3'));
        if (image4 != null) ziyoratgohObj.append("image4", byIdImg('image4'));
        if (image5 != null) ziyoratgohObj.append("image5", byIdImg('image5'));
        if (image6 != null) ziyoratgohObj.append("image6", byIdImg('image6'));
        if (image7 != null) ziyoratgohObj.append("image7", byIdImg('image7'));
        if (image8 != null) ziyoratgohObj.append("image8", byIdImg('image8'));
        ziyoratgohObj.append("title", byId('title_uz'));
        ziyoratgohObj.append("title_en", byId('title_en'));
        ziyoratgohObj.append("title_uz", byId('title_uz'));
        ziyoratgohObj.append("title_ru", byId('title_ru'));
        ziyoratgohObj.append("description", byId('description_uz'));
        ziyoratgohObj.append("description_en", byId('description_en'));
        ziyoratgohObj.append("description_uz", byId('description_uz'));
        ziyoratgohObj.append("description_ru", byId('description_ru'));
        ziyoratgohObj.append("description2", byId('description2_uz'));
        ziyoratgohObj.append("description2_en", byId('description2_en'));
        ziyoratgohObj.append("description2_uz", byId('description2_uz'));
        ziyoratgohObj.append("description2_ru", byId('description2_ru'));
        ziyoratgohObj.append("description3", byId('description3_uz'));
        ziyoratgohObj.append("description3_en", byId('description3_en'));
        ziyoratgohObj.append("description3_uz", byId('description3_uz'));
        ziyoratgohObj.append("description3_ru", byId('description3_ru'));
        ziyoratgohObj.append("rank", byId('rank'));
        ziyoratgohObj.append("booking_link", byId('booking_link'));
        ziyoratgohObj.append('category', 9);

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.post(apiTravel + "places/", ziyoratgohObj, config).then(() => {
            openAddModal();
            getZiyoratAdmin();
            toast.success("Ziyoratgoh muvaffaqiyatli qo'shildi✔");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi! Ma'lumotlarni qaytadan tekshirib ko'ring!!!");
            openAddModal();
        })
    }

    // edit ziyorat
    const editZiyorat = () => {

        const ziyoratgohObj = new FormData();
        let image2 = byIdImg('image2'),
            image3 = byIdImg('image3'),
            image4 = byIdImg('image4'),
            image5 = byIdImg('image5'),
            image6 = byIdImg('image6'),
            image7 = byIdImg('image7'),
            image8 = byIdImg('image8');

        ziyoratgohObj.append("image", byIdImg('image'));
        if (image2 != null) ziyoratgohObj.append("image2", byIdImg('image2'));
        if (image3 != null) ziyoratgohObj.append("image3", byIdImg('image3'));
        if (image4 != null) ziyoratgohObj.append("image4", byIdImg('image4'));
        if (image5 != null) ziyoratgohObj.append("image5", byIdImg('image5'));
        if (image6 != null) ziyoratgohObj.append("image6", byIdImg('image6'));
        if (image7 != null) ziyoratgohObj.append("image7", byIdImg('image7'));
        if (image8 != null) ziyoratgohObj.append("image8", byIdImg('image8'));
        ziyoratgohObj.append("title", byId('title_uz'));
        ziyoratgohObj.append("title_en", byId('title_en'));
        ziyoratgohObj.append("title_uz", byId('title_uz'));
        ziyoratgohObj.append("title_ru", byId('title_ru'));
        ziyoratgohObj.append("description", byId('description_uz'));
        ziyoratgohObj.append("description_en", byId('description_en'));
        ziyoratgohObj.append("description_uz", byId('description_uz'));
        ziyoratgohObj.append("description_ru", byId('description_ru'));
        ziyoratgohObj.append("description2", byId('description2_uz'));
        ziyoratgohObj.append("description2_en", byId('description2_en'));
        ziyoratgohObj.append("description2_uz", byId('description2_uz'));
        ziyoratgohObj.append("description2_ru", byId('description2_ru'));
        ziyoratgohObj.append("description3", byId('description3_uz'));
        ziyoratgohObj.append("description3_en", byId('description3_en'));
        ziyoratgohObj.append("description3_uz", byId('description3_uz'));
        ziyoratgohObj.append("description3_ru", byId('description3_ru'));
        ziyoratgohObj.append("rank", byId('rank'));
        ziyoratgohObj.append("booking_link", byId('booking_link'));
        ziyoratgohObj.append('category', 9);

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.put(apiTravel + "places/" + adminZiyoratId.id  + "/", ziyoratgohObj, config).then(() => {
            openEditModal();
            getZiyoratAdmin();
            toast.success("Ziyoratgoh muvaffaqiyatli taxrirlandi✔");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi! Ma'lumotlarni qaytadan tekshirib ko'ring!!!");
            openEditModal();
        })
    }

    // detele
    const deleteZiyorat = () => {

        const config = {
            headers: {
                Authorization: sessionStorage.getItem('jwtToken'),
            }
        };

        axios.delete(apiTravel + "places/" + adminZiyoratId.id + "/", config).then(() => {
            openDeleteModal();
            getZiyoratAdmin();
            toast.success("Ziyoratgoh o'chirildi")
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi!");
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
                <Button onClick={openAddModal} color="primary" className="px-5 py-2 fs-5 fw-medium">Ziyoratgohlar
                    qo'shish</Button>
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
                <ModalHeader toggle={openAddModal}><span
                    className="fw-bold fs-2 text-dark">Ziyoratgohlar qo'shish</span></ModalHeader>
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
                <ModalHeader toggle={openEditModal}><span
                    className="fw-bold fs-2 text-dark">Taxrirlash</span></ModalHeader>
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
                            <Input id="title_en" placeholder="title_en"
                                defaultValue={adminZiyoratId && adminZiyoratId.title_en} />
                            <Input id="title_uz" placeholder="title_uz"
                                defaultValue={adminZiyoratId && adminZiyoratId.title_uz} />
                            <Input id="title_ru" placeholder="title_ru"
                                defaultValue={adminZiyoratId && adminZiyoratId.title_ru} />
                            <Input id="rank" type="number" placeholder="rank"
                                defaultValue={adminZiyoratId && adminZiyoratId.rank} />
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