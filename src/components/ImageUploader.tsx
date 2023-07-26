import Image from "next/image";

export default function ImageUploader() {
  return (
    <div className="rounded-lg shadow-xl px-9 py-9 bg-white">
      <div className="flex items-center flex-col space-y-8">
        {/* Title */}
        <div className="text-center space-y-4">
          <p className="font-semibold text-lg">Upload your image</p>
          <p className="opacity-70 text-xs">File should be JPEG, PNG...</p>
        </div>
        {/* Drop zone */}
        <div className="flex justify-center items-center flex-col space-y-8 px-24 py-14 rounded-lg border-dashed border-blue-400 border-[0.5px] border-x-2 border-y-2 bg-[#F6F8FB]">
          {/* Image */}
          <Image src="image.svg" alt="image" width={114} height={88} />
          <p className="opacity-50">Drag & Drop your image here</p>
        </div>
        {/* Text */}
        <p>Or</p>
        {/* Button */}
        <button className="text-white rounded-lg px-4 py-2 bg-blue-500">Choose a file</button>
      </div>
    </div>
  );
}
