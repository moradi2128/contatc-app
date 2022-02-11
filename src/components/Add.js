import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addContact } from "../redux/contants/contactAtion";

const Add = () => {
  const contacts = useSelector((state) => state.allContact);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handlerForm = (e) => {
    
    e.preventDefault();
    const checkEmail = contacts.find((contact) => contact.email === email && contact);
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
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
      id: contacts[contacts.length - 1].id + 1,
      name,
      number,
      email,
    };
    dispatch(addContact(data));
    toast.success("Contact added success");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center my-5">Add Contact</h1>
      <div className="row"></div>
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
              value="Add"
              className="btn btn-block btn-dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
