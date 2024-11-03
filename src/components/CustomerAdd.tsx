import { useState } from "react";
import { addCustomer } from "../store/slices/customerSlice";
import { useDispatch } from "react-redux";

function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addCustomers(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim() === "") {
      return null;
    }
    dispatch(addCustomer(input));
    setInput("");
  }
  return (
    <div>
      <h3>Add New Customer</h3>
      <form onSubmit={addCustomers}>
        <input
          id="customerName"
          style={{
            borderRadius: 8,
            padding: "10px",
            margin: "0 15px 0 0",
            fontSize: "1.0rem",
          }}
          type="text"
          placeholder="Enter Customer Name"
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          value={input}
        />
        <input
          style={{
            borderRadius: 8,
            padding: "5px",
            fontSize: "0.9rem",
          }}
          value="Add Customer"
          type="submit"
        />
      </form>
    </div>
  );
}

export default CustomerAdd;
