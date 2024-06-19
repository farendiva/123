"use client";

import React from "react";
import "../stepper.css";
import { Check } from "lucide-react";

function Stepper({ steps }: { steps: string[] }) {
  const [currentStep, setCurrentStep] = React.useState(3);
  const isCompleted = currentStep > steps.length;

  return (
    <React.Fragment>
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 ? "active" : ""}
              ${currentStep > i + 1 ? "complete" : ""}`}
          >
            <div className="step-index">
              {currentStep > i + 1 ? <Check color="white" /> : i + 1}
            </div>
            <p className="capitalize text-sm text-[#D4DEFF] mt-1">{step}</p>
          </div>
        ))}
      </div>
      {/* 
      <button
        type="button"
        className="button"
        onClick={() => setCurrentStep((prev) => prev + 1)}
        disabled={isCompleted}
      >
        {isCompleted ? "Completed" : "Next"}
      </button> */}
    </React.Fragment>
  );
}

export default Stepper;
