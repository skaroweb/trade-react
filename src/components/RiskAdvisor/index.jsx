function RiskAdvisor() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#e8e8e8",
          padding: "20px",
          borderTop: "1px solid #ddd",
          marginTop: "30px",
        }}
      >
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Risk Advisory
        </h2>
        <blockquote
          style={{
            borderLeft: "5px solid #008000",
            paddingLeft: "15px",
            fontStyle: "italic",
            color: "#555",
          }}
        >
          <p>
            Investing carries risks including the potential for loss of
            principal. Past performance is not indicative of future results.
            Historical data is only for informational purposes and should not be
            seen as indicative of future market behavior.
          </p>
          <p>
            Market conditions are subject to significant fluctuations, and the
            value of investments can decline, possibly resulting in losses that
            exceed the amount initially invested. Investment suitability varies
            among individuals.
          </p>
          <p>
            Prior to engaging in any investment activities, it is essential to
            fully comprehend the associated risks and legal requirements. If you
            have doubts about your investment choices, consider consulting with
            independent experts in finance, law, taxation, and accounting.
          </p>
        </blockquote>
      </div>
    </>
  );
}
export default RiskAdvisor;
