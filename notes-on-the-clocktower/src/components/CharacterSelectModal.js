import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader } from "reactstrap";
import "./CharacterSelectModal.css";
import CharacterIcon from "./CharacterIcon";
import { useSelector } from "react-redux";
import { selectAllCharacterTypes, selectAllScripts, selectCharactersFiltered } from "../features/characterlist/CharacterListSlice";
import { useState } from "react";

const SelectorDropdown = (props) => {
    const [toggleLabel, setToggleLabel] = useState(props.initialLabel);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            direction="down"
            className="DropdownSizing"
        >
            <DropdownToggle
                caret
                className="DropdownInternal DropdownColoring"
            >
                {toggleLabel}
            </DropdownToggle>
            <DropdownMenu className="DropdownInternal">
                {
                    props.items.map(item => {
                        return (
                            <DropdownItem
                                onClick={() => {
                                    setToggleLabel(item["name"]);
                                    props.onChange(item["search"]);
                                }}
                                className="DropdownInternal"
                            >
                                {item["name"]}
                            </DropdownItem>
                        );
                    })
                }
            </DropdownMenu>
        </Dropdown>
    );
}

const CharacterSelectModal = (props) => {
    const characterTypes = useSelector(selectAllCharacterTypes);
    const allScripts = useSelector(selectAllScripts);

    const [currScript, setCurrScript] = useState("");
    const [currType, setCurrType] = useState("");

    const characterRoles = useSelector(selectCharactersFiltered(currScript, currType));

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
                    <SelectorDropdown
                        items={allScripts}
                        initialLabel="--Select Script--"
                        onChange={setCurrScript}
                    />
                    <SelectorDropdown
                        items={characterTypes}
                        initialLabel="--Select Type--"
                        onChange={setCurrType}
                    />
                </div>
                <div className="ModalSection">
                    {
                        characterTypes.map(charType => {
                            const currCharacters = characterRoles.filter(
                                character => character["characterType"] === charType["search"]
                            ).sort((a, b) => {
                                if (a["characterName"] < b["characterName"]) {
                                    return -1;
                                }
                                return 1;
                            });

                            if (currCharacters.length === 0) {
                                return <></>
                            }

                            return (
                                <div className="ModalSection">
                                    <div className="SectionHeader">
                                        <img
                                            className="SectionImageHeader"
                                            alt={charType["name"]}
                                            src={charType["imageSrc"]}
                                        />
                                        <label className="SectionLabelHeader">
                                            {charType["name"]}
                                        </label>
                                    </div>
                                    <div className="ModalSection">
                                    {
                                        currCharacters.map(character => {
                                            return (
                                                <div className="IconHeader">
                                                    <CharacterIcon
                                                        imageSrc={character["imageSrc"]}
                                                        imageAlt={character["characterName"]}
                                                        onClick={props.onSelect}
                                                    />
                                                    <label className="IconLabel">
                                                        {character["characterName"]}
                                                    </label>
                                                </div>
                                            );
                                        })
                                    }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </ModalBody>
        </Modal>
    );
}

export default CharacterSelectModal;