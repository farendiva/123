"use client";

import React from "react";

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
      <div className="mt-3 text-[10px] lg:text-sm text-center font-medium text-gray-900">
        {title}
      </div>
    </div>
  );
};

interface StepperProps {
  currentStatus: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStatus }) => {
  const mapBackendStatusToFrontend = (backendStatus: number): number => {
    if (backendStatus <= 2) return backendStatus;
    if (backendStatus >= 3 && backendStatus <= 5) return 3;
    return 4;
  };

  const frontendStatus = mapBackendStatusToFrontend(currentStatus);

  const steps = [
    { id: 1, title: "Prelisting" },
    { id: 2, title: "Listing" },
    { id: 3, title: "Pendanaan Terpenuhi" },
    { id: 4, title: "Berjalan" },
  ];

  return (
    <div className="flex flex-col bg-white rounded-xl items-center justify-center py-4 lg:px-1">
      <div className="flex gap-4 lg:gap-8">
        {steps.map((step) => (
          <Step
            key={step.id}
            title={step.title}
            isActive={step.id === frontendStatus}
            isComplete={step.id < frontendStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
