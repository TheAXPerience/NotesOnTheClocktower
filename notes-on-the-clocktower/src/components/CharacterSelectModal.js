import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "./CharacterSelectModal.css";
import CharacterIcon from "./CharacterIcon";

const CharacterSelectModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            toggle={props.toggle}
        >
            <ModalHeader toggle={props.toggle} className="CharacterSelectModal">
                Select a Character
            </ModalHeader>
            <ModalBody className={props.modalLines}>
                <div className="ModalSection">
                    <button className="AddPlayerButton">
                        Filter
                    </button>
                </div>
                <div className="ModalSection">
                    <CharacterIcon
                        imageSrc={"https://wiki.bloodontheclocktower.com/images/e/e0/Icon_gnome.png"}
                        onClick={props.onSelect}
                    />
                    <CharacterIcon
                        imageSrc={"https://wiki.bloodontheclocktower.com/images/e/e0/Icon_gnome.png"}
                        onClick={props.onSelect}
                    />
                    <CharacterIcon
                        imageSrc={"https://wiki.bloodontheclocktower.com/images/e/e0/Icon_gnome.png"}
                        onClick={props.onSelect}
                    />
                    <CharacterIcon
                        imageSrc={"https://wiki.bloodontheclocktower.com/images/e/e0/Icon_gnome.png"}
                        onClick={props.onSelect}
                    />
                    <CharacterIcon
                        imageSrc={"https://wiki.bloodontheclocktower.com/images/e/e0/Icon_gnome.png"}
                        onClick={props.onSelect}
                    />
                </div>
            </ModalBody>
        </Modal>
    );
}

export default CharacterSelectModal;