import { useSelector, useDispatch } from "react-redux";
import { removeCustomer } from "../store/slices/customerSlice";
function CustomerView() {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: { customerState: string[] }) => state.customerState
  );
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#e1e1e1",
        borderRadius: "8px",
        border: "2px black solid",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "15px" }}>Customer View</h1>
      <ul style={{ paddingLeft: "0" }}>
        {customers.length === 0 ? (
          <li style={{ listStyle: "none", color: "#999" }}>
            No customers added yet.
          </li>
        ) : (
          customers.map((customer: string, index: number) => (
            <li
              key={index} // It's better to use a unique identifier instead of the index if possible
              style={{
                listStyle: "none",
                padding: "5px 0",
                borderBottom: "1px solid #bbb",
                display: "flex",
                justifyContent: "space-between", // Aligns items correctly
              }}
            >
              {customer}
              <button
                onClick={() => {
                  dispatch(removeCustomer(index));
                }}
                style={{ margin: 0, padding: 0 }}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default CustomerView;
