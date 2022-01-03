export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #3f3f3f",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d88fd"
  };
  const buttonStyle = {
    backgroundColor: "#aad3d1",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles - </p>
      <button style={buttonStyle}>aaa</button>
    </div>
  );
};
