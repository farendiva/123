import { useRef, FC } from "react";
import Webcam from "react-webcam";

interface CaptureProps {
  onCapture: (image: string) => void;
  captureType: "face" | "ktp";
}

const Capture: FC<CaptureProps> = ({ onCapture, captureType }) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const captureAndCropImage = (
    overlayWidth: number,
    overlayHeight: number,
    overlayLeft: number,
    overlayTop: number
  ) => {
    if (webcamRef.current && canvasRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) return;

      const img = new Image();
      img.src = imageSrc;

      img.onload = () => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d");

        canvas.width = overlayWidth;
        canvas.height = overlayHeight;

        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.drawImage(
          img,
          overlayLeft,
          overlayTop,
          overlayWidth,
          overlayHeight,
          0,
          0,
          overlayWidth,
          overlayHeight
        );

        const croppedImage = canvas.toDataURL("image/jpeg");
        onCapture(croppedImage);
      };
    }
  };

  const handleCapture = () => {
    if (captureType === "face") {
      captureAndCropImage(400, 400, 150, 50); // Adjusted to fit the center circle
    } else {
      captureAndCropImage(560, 360, 120, 90); // Adjusted for KTP
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto h-72 lg:h-128 rounded-5xl overflow-hidden">
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="absolute inset-0 w-full h-full object-cover rounded-5xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {captureType === "face" ? (
          <>
            <div className="relative">
              <div className="h-72 w-72 rounded-full border-4 border-white bg-transparent"></div>
            </div>
          </>
        ) : (
          <div className="relative">
            <div className="h-36 w-56 border-4 border-white bg-transparent"></div>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <img
          src="/icons/circle.svg"
          alt=""
          onClick={handleCapture}
          className="cursor-pointer h-16 w-16"
        />
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        {captureType === "face"
          ? "Posisikan wajah anda pada lingkaran"
          : "Posisikan Kartu KTP anda Masuk kedalam Frame"}
      </div>
    </div>
  );
};

export default Capture;
