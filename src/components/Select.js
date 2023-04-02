const Select = ({ name, value, onChange, options }) => {
  return (
    <div style={{ display: "grid", alignItems: "center", marginLeft: "5px" }}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        style={{ width: "100px" }}
      >
        <option disabled={true} value={""}>
          Please select {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
