import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Camera } from "lucide-react";

interface CameraCaptureProps {
  onCapture: (file: File) => void;
  onClose: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({
  onCapture,
  onClose,
}) => {
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
        setCapturedImage(imageSrc);
      }
    }
  }, [webcamRef]);

  const handleRetake = () => {
    setCapturedImage(null);
  };

  const handleSave = () => {
    if (capturedImage) {
      fetch(capturedImage)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "captured_ktp.png", {
            type: "image/png",
          });
          onCapture(file);
          onClose();
        });
    }
  };

  return (
    <div className="fixed inset-0 -top-4 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl mx-auto h-128 lg:h-128 rounded-5xl overflow-hidden">
        {capturedImage ? (
          <div className="flex flex-col items-center h-full">
            <img
              src={capturedImage}
              alt="Captured KTP"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={handleRetake}
                className="bg-sky text-white px-6 py-2 rounded-full font-bold"
              >
                Ambil Kembali Foto KTP
              </button>
              <button
                onClick={handleSave}
                className="bg-emerald text-white px-6 py-2 rounded-full font-bold"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        ) : (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
              className="absolute inset-0 w-full h-full object-cover rounded-5xl"
              videoConstraints={{
                facingMode: "user",
                width: 3840,
                height: 2160,
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 mix-blend-multiply">
              <div className="relative">
                <div className="mb-10 h-[360px] w-[650px] border-4 border-white bg-white bg-transparent"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={handleCapture}
                className="bg-white rounded-full p-4 shadow-lg"
              >
                <img
                  src="/icons/circle.svg"
                  alt="Capture"
                  className="cursor-pointer h-8 w-8"
                />
              </button>
            </div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-center text-sm md:text-base">
              Pastikan KTP Anda dekat dengan kamera dan sepenuhnya masuk ke
              dalam frame.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
