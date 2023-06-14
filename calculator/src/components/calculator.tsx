import { ReactNode } from "react";

interface calculatorProps {
  display: ReactNode;
}

function Calculator({ display }: calculatorProps) {
  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center m-5">
          <div className="col-8">
            <div className="card border-danger">
              <div className="card-body">{display}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
