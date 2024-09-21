import React, { useState } from "react";
import { SquarePen, CircleX, Camera } from "lucide-react";
import CameraCapture from "./CameraCapture";

interface Profile {
  ktp?: string | File;
  slip_gaji?: string | File;
  pekerjaan?: string;
}

interface User {
  profile?: Profile;
}

interface DocumentTabProps {
  user: User | null;
  isEditing: boolean;
  handleEditClick: () => void;
  handleFileUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Profile
  ) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentTab: React.FC<DocumentTabProps> = ({
  user,
  isEditing,
  handleEditClick,
  handleFormSubmit,
  handleFileUpload,
  setIsEditing,
}) => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedFileName, setCapturedFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // Add error state for validation

  const handleCameraCapture = (file: File) => {
    handleFileUpload({ target: { files: [file] } } as any, "ktp");
    setCapturedFileName(file.name);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCapturedFileName("");
  };

  const validateFile = (file: File, field: keyof Profile) => {
    const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
    const validFileType = "application/pdf";

    if (file.size > maxFileSize) {
      setError("Maksimal file 5MB.");
      return false;
    }

    if (file.type !== validFileType) {
      setError("Slip Gaji harus berupa file PDF.");
      return false;
    }

    setError(null); // Clear error if the file is valid
    return true;
  };

  const handleFileUploadWithValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Profile
  ) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file, field)) {
      handleFileUpload(e, field); // Call the original file upload handler if valid
    }
  };

  return (
    <div className="my-8 divide-y-2">
      {isEditing ? (
        <form onSubmit={handleFormSubmit} className="">
          <div className="flex items-center py-2">
            <div className="w-full">
              <label className="block font-bold">KTP</label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setShowCamera(true)}
                  className="px-4 py-2 bg-sky hover:bg-sky-950 text-white rounded-lg flex items-center gap-2"
                >
                  <Camera className="h-5 w-5" />
                  Ambil Kembali Foto KTP
                </button>
                {capturedFileName && (
                  <span className="ml-2 text-sm text-gray-600">
                    {capturedFileName}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center py-2">
            <div className="w-full">
              <label className="block font-bold">Slip Gaji</label>
              <input
                type="file"
                accept="application/pdf"
                name="slip_gaji"
                onChange={(e) => handleFileUploadWithValidation(e, "slip_gaji")}
                className="w-full text-sm border border-gray-300 rounded-lg p-2"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
              {/* Show error message */}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700"
            >
              <CircleX className="h-5 w-5" />
              <span>Batalkan</span>
            </button>
            <button
              disabled={!!error} // Disable the button if there's an error
              type="submit"
              className={`px-6 py-3 ${
                error
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }   text-white rounded-lg flex items-center gap-2 `}
            >
              <img src="/icons/save.svg" alt="Save Icon" className="h-5 w-5" />
              <span>Simpan</span>
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="my-8 divide-y divide-gray-300">
            <div className="flex justify-between items-center py-3">
              <div>
                <label className="block font-bold">KTP</label>
                {user?.profile?.ktp ? (
                  <a
                    className="text-sm text-blue-600"
                    href={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${
                      user?.profile?.ktp || ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Dokumen
                  </a>
                ) : (
                  <p>Belum Upload</p>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <label className="block font-bold">Slip Gaji</label>
                {user?.profile?.slip_gaji ? (
                  <a
                    className="text-sm text-blue-600"
                    href={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${
                      user?.profile?.slip_gaji || ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Dokumen
                  </a>
                ) : (
                  <p className="text-sm">
                    {user?.profile?.pekerjaan === "wiraswasta" ||
                    user?.profile?.pekerjaan === "pensiunan"
                      ? "Tidak Memerlukan Slip Gaji"
                      : "Belum Upload"}
                  </p>
                )}
              </div>
              {/* {user?.profile?.slip_gaji &&
                user?.profile?.pekerjaan !== "wiraswasta" &&
                user?.profile?.pekerjaan !== "pensiunan" && (
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                  />
                )} */}
            </div>
          </div>
        </>
      )}
      {showCamera && (
        <CameraCapture
          onCapture={handleCameraCapture}
          onClose={() => setShowCamera(false)}
        />
      )}
    </div>
  );
};

export default DocumentTab;
