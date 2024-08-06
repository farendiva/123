"use client";

import React, { useState } from "react";

interface StepProps {
  title: string;
  isActive: boolean;
  isComplete: boolean;
}

const Step: React.FC<StepProps> = ({ title, isActive, isComplete }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full w-5 h-5 flex items-center justify-center ${
          isActive
            ? "bg-sky text-white"
            : isComplete
            ? "bg-gray-400 text-gray-200"
            : "bg-gray-200 text-gray-500"
        }`}
      ></div>
      <div className="mt-3 text-sm font-medium text-gray-900">{title}</div>
    </div>
  );
};

const Stepper: React.FC<{ steps: StepProps[] }> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-xl items-center justify-center py-4">
      <div className="flex gap-8">
        {steps.map((step, index) => (
          <Step
            key={index}
            {...step}
            isActive={index === currentStep}
            isComplete={index < currentStep}
          />
        ))}
      </div>
      {/* <div className="mt-8 flex gap-4">
        {currentStep > 0 && (
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextStep}
          >
            Next
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Stepper;
