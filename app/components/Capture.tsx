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
          const { width, height } = image;

          if (captureType === "face") {
            // Crop for face (circle) using canvas
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const cropSize = Math.min(width, height) * 0.6;
            canvas.width = cropSize;
            canvas.height = cropSize;

            if (ctx) {
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

              // Resize the canvas to a larger size
              const resizedCanvas = document.createElement("canvas");
              const resizedCtx = resizedCanvas.getContext("2d");
              resizedCanvas.width = canvas.width * 2; // Double the width
              resizedCanvas.height = canvas.height * 2; // Double the height

              if (resizedCtx) {
                resizedCtx.drawImage(
                  canvas,
                  0,
                  0,
                  canvas.width,
                  canvas.height,
                  0,
                  0,
                  resizedCanvas.width,
                  resizedCanvas.height
                );
              }

              // Convert canvas to blob and then to file
              resizedCanvas.toBlob((blob) => {
                if (blob) {
                  const file = new File([blob], "cropped-face.png", {
                    type: "image/png",
                  });
                  setCapturedImage(URL.createObjectURL(blob));
                  onCapture(file);
                }
              }, "image/png");
            }
          } else {
            // For KTP capture, crop the image using Image object
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
              const { width, height } = image;
              const cropSize = Math.min(width, height) * 0.6;
              const croppedWidth = width - (width - cropSize) / 2;
              const croppedHeight = height - (height - cropSize) / 2;

              const canvas = document.createElement("canvas");
              canvas.width = croppedWidth;
              canvas.height = croppedHeight;
              const ctx = canvas.getContext("2d");
              ctx?.drawImage(
                image,
                (width - croppedWidth) / 2,
                (height - croppedHeight) / 2,
                croppedWidth,
                croppedHeight,
                0,
                0,
                croppedWidth,
                croppedHeight
              );

              canvas.toBlob((blob) => {
                if (blob) {
                  const file = new File([blob], "ktp-image.png", {
                    type: "image/png",
                  });
                  setCapturedImage(URL.createObjectURL(blob));
                  onCapture(file);
                }
              }, "image/png");
            };
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
        screenshotQuality={1}
        screenshotFormat="image/png"
        className="absolute inset-0 w-full h-full object-cover rounded-5xl"
        videoConstraints={{
          facingMode: "user",
          width: 3840, // Increased width for higher resolution
          height: 2160, // Increased height for higher resolution
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
            <div className="mb-10 h-[360px] w-[650px] border-4 border-white bg-white bg-transparent"></div>
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
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-center text-sm md:text-base">
        {captureType === "face"
          ? "Posisikan wajah anda pada lingkaran"
          : "Pastikan KTP Anda dekat dengan kamera dan sepenuhnya masuk ke dalam frame."}
      </div>
    </div>
  );
};

export default Capture;
