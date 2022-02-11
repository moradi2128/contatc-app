import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateContact } from "../redux/contants/contactAtion";
const Edit = () => {
  const { editId } = useParams();
  const contacts = useSelector((state) => state.allContact);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(editId)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(currentContact.name);
  const [email, setEmail] = useState(currentContact.email);
  const [number, setNumber] = useState(currentContact.number);
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handlerForm = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(editId) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(editId) && contact.number === parseInt(number)
    );

    if (!name || !email || !number) {
      return toast.warning("Please fill in all fields!");
    }
    if (checkEmail) {
      return toast.error("This email already Exists!");
    }
    if (checkNumber) {
      return toast.error("This number already Exists!");
    }
    const data = {
      id: parseInt(editId),
      name,
      number,
      email,
    };
    dispatch(updateContact(data));
    toast.success("Contact update success");
    navigate("/");
  };
  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 text-center my-5">
            Edit Contact {parseInt(editId) + 1}
          </h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handlerForm}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-3 ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h display-3 my-5 text-center>
          Contact with id {editId} not exists!
        </h>
      )}
    </div>
  );
};

export default Edit;
