import PropTypes from "prop-types";
import { ContactItem } from "./ContactListItem.styled";
import Button from "../Button/Button";

export default function ContactListItem({ name, number, handleDelete }) {
  return (
    <ContactItem>
      {name} : {number}
      <Button type="button" text="delete" onClick={handleDelete} />
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
