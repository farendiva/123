import { useRef, FC, useCallback, useState } from "react";
import Webcam from "react-webcam";

interface CaptureProps {
  onCapture: (image: File) => void;
  captureType: "face" | "ktp";
}

const Capture: FC<CaptureProps> = ({ onCapture, captureType }) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const { width, height } = image;

          if (ctx) {
            if (captureType === "face") {
              // Crop for face (circle)
              const cropSize = Math.min(width, height) * 0.6;
              canvas.width = cropSize;
              canvas.height = cropSize;
              ctx.drawImage(
                image,
                (width - cropSize) / 2,
                (height - cropSize) / 2,
                cropSize,
                cropSize,
                0,
                0,
                cropSize,
                cropSize
              );
            } else {
              // Crop for KTP (rectangle with specific aspect ratio)
              const aspectRatio = 85.6 / 53.98; // KTP aspect ratio ~1.585
              let cropHeight;

              if (window.innerWidth >= 1024) {
                // LG (large) screens and above
                cropHeight = height * 0.47;
              } else {
                // Smaller screens (mobile)
                cropHeight = height * 0.35; // Adjust this value as needed
              }
              const cropWidth = cropHeight * aspectRatio;
              canvas.width = cropWidth;
              canvas.height = cropHeight;
              ctx.drawImage(
                image,
                (width - cropWidth) / 2,
                (height - cropHeight) / 2,
                cropWidth,
                cropHeight,
                0,
                0,
                cropWidth,
                cropHeight
              );
            }

            // Convert canvas to blob and then to file
            canvas.toBlob((blob) => {
              if (blob) {
                const file = new File([blob], "cropped-image.jpeg", {
                  type: "image/jpeg",
                });
                setCapturedImage(URL.createObjectURL(blob));
                onCapture(file);
              }
            }, "image/jpeg");
          }
        };
      }
    }
  }, [webcamRef, onCapture, captureType]);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-128 lg:h-128 rounded-5xl overflow-hidden">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="absolute inset-0 w-full h-full object-cover rounded-5xl"
        videoConstraints={{
          facingMode: "user",
        }}
      />
      {capturedImage && (
        <img
          src={capturedImage}
          alt="Captured"
          className="absolute inset-0 w-full h-full object-cover rounded-5xl"
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 mix-blend-multiply">
        {captureType === "face" ? (
          <div className="relative">
            <div className="h-72 w-72 rounded-full border-4 border-white bg-white bg-transparent"></div>
          </div>
        ) : (
          <div className="relative">
            <div className="h-44 w-80 lg:h-56 lg:w-96 border-4 border-white bg-white bg-transparent"></div>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <img
          src="/icons/circle.svg"
          alt="Capture"
          onClick={handleCapture}
          className="cursor-pointer h-16 w-16"
        />
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-center text-sm md:text-base">
        {captureType === "face"
          ? "Posisikan wajah anda pada lingkaran"
          : "Posisikan Kartu KTP anda masuk ke dalam frame"}
      </div>
    </div>
  );
};

export default Capture;
