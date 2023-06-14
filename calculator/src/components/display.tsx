function Display() {
  const calculator_display = {
    minHeight: "80px",
    minWidth: "100%",
    maxWidth: "100%",
    color: "#00ff00",
    fontSize: "3em",
    backgroundColor: "#2e302f",
    textAlign: "right",
  };

  return (
    <>
      <input
        className="card-text"
        type="text"
        value={"fgh"}
        disabled
        style={calculator_display}
      />
    </>
  );
}

export default Display;
