import React, { useState, useRef } from "react";

const Home = () => {
  const [cameraOpen, setCameraOpen] = useState(false); // Track if the camera is open
  const videoRef = useRef(null); // Reference for the video element
  const canvasRef = useRef(null); // Reference for the canvas to capture image
  const [capturedImage, setCapturedImage] = useState(null); // Store the captured image

  // Function to start the camera
  const openCamera = async () => {
    try {
      setCameraOpen(true); // Show camera section
      const stream = await navigator.mediaDevices.getUserMedia({ video: true }); // Request video stream
      videoRef.current.srcObject = stream; // Set stream as video source
      videoRef.current.play(); // Play the video
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  // Function to capture an image
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get image as a data URL
    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData); 
    stopCamera();
  };

  // Function to stop the camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop()); // Stop all tracks
    }
    setCameraOpen(false); // Hide camera section
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-neutral-100 border-neutral-600">
        <h1 className="text-4xl lg:text-6xl mt-32 font-oi text-yellow-700">
          <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
            Binit
          </span>
        </h1>
        <div className="mt-6 mx-10 text-center">
          <p className="text-2xl">
            Track your garbage disposal, win prizes, and climb the leaderboard
            <span className="block mt-2">with just a click of a button!</span>
          </p>
        </div>


        <button
          onClick={openCamera}
          className="mt-10 bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-2 rounded-md"
        >
          Binitfy!
        </button>
      </div>

      {cameraOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <video ref={videoRef} className="border rounded-md"></video>
            <div className="mt-4 flex justify-center">
              <button
                onClick={capturePhoto}
                className="border border-neutral-600 px-6 py-2 rounded-md mr-4"
              >
                Capture Photo
              </button>
              <button
                onClick={stopCamera}
                className="bg-red-500 text-white px-6 py-2 rounded-md"
              >
                Close Camera
              </button>
            </div>
          </div>
        </div>
      )}

      {capturedImage && (
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-lg font-medium mb-4">Captured Image:</h2>
          <img
            src={capturedImage}
            alt="Captured"
            className="border rounded-md"
          />
        </div>
      )}

      {/* Hidden canvas for capturing the photo */}
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

export default Home;
