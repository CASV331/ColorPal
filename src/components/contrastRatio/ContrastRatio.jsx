import { useEffect } from "react";
import { useColors } from "../../context/colorContext";
import { hex, score } from "wcag-contrast";

function ContrastRatio() {
  const { colors } = useColors();
  const ratio = hex(colors.primary, colors.secondary).toFixed(2);

  return (
    <section className="flex gap-10">
      <div className="min-w-32">
        <h4>Ratio contrast</h4>
        <p
          style={ratio > 4.5 ? { color: "rgb(38, 211, 56)" } : { color: "red" }}
        >
          {ratio} {ratio > 7.1 ? "Very good" : ratio > 4.5 ? "Good" : "Poor"}
        </p>
      </div>
      <div className="min-w-32">
        <h4>WCAG Compilance</h4>
        <div className="flex items-center gap-12">
          <div
            className="w-6 h-6 rounded-full p-1 flex items-center gap-3"
            style={
              score(ratio) === "Fail"
                ? { background: "red" }
                : { background: "rgb(38, 211, 56)" }
            }
          >
            {score(ratio) === "Fail" ? (
              <img
                className="w-4 h-4"
                src="/img/SVGs/cross.svg"
                alt="Fail Icon"
              />
            ) : (
              <img
                className="w-4 h-4"
                src="/img/SVGs/check.svg"
                alt="Pass Icon"
              />
            )}

            <p
              style={
                score(ratio) === "Fail"
                  ? { color: "red" }
                  : { color: "rgb(38, 211, 56)" }
              }
            >
              AA
            </p>
          </div>
          <div
            className="w-6 h-6 rounded-full p-1 flex items-center gap-3"
            style={
              score(ratio) === "AAA"
                ? { background: "rgb(38, 211, 56)" }
                : { background: "red" }
            }
          >
            {score(ratio) === "AAA" ? (
              <img
                className="w-4 h-4"
                src="/img/SVGs/check.svg"
                alt="Pass Icon"
              />
            ) : (
              <img
                className="w-4 h-4"
                src="/img/SVGs/cross.svg"
                alt="Pass Icon"
              />
            )}

            <p
              style={
                score(ratio) === "AAA"
                  ? { color: "rgb(38, 211, 56)" }
                  : { color: "red" }
              }
            >
              AAA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContrastRatio;
