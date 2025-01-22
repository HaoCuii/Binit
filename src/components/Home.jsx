import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Camera, X, Image as ImageIcon, Sparkles, Upload } from "lucide-react";
import Features from "./Features";

const Home = ({ loggedIn }) => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [result, setResult] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const openCamera = async () => {
    if (!loggedIn) {
      navigate('/login');
      return;
    }

    try {
      setCameraOpen(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData);
    stopCamera();
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setCameraOpen(false);
  };

  const resizeImage = (imageData, maxWidth, maxHeight, quality = 0.1) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageData;
  
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
  
        let width = img.width;
        let height = img.height;
  
        // Resize based on max dimensions
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0, width, height);
  
        // Convert to JPEG with very low quality to reduce file size
        resolve(canvas.toDataURL("image/jpeg", quality)); // Use very low quality (0.1 or 0.2)
      };
  
      img.onerror = (error) => reject("Image resizing failed");
    });
  };
  

  const processImage = async () => {
    if (!capturedImage) return;
  
    try {
      // Resize image to JPEG format
      const resizedImage = await resizeImage(capturedImage, 400, 400, 0.1);
  
      // Convert base64 image to a Blob in JPEG format
      const blob = await fetch(resizedImage).then(res => res.blob());
  
      // Convert blob to base64
      const reader = new FileReader();
      const base64Image = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
  
      // Your API key - you should store this in an environment variable
      const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key
  
      // Prepare the request body according to Gemini API specifications
      const requestBody = {
        contents: [
          {
            parts: [
              { text: "Identify what type of trash this is in one word only!: Waste, Recycle, Glass, or Compost?" },
              {
                inlineData: {
                  mimeType: "image/jpeg",
                  data: base64Image.split(',')[1] // Remove the data URL prefix
                }
              }
            ]
          }
        ]
      };
  
      // Send the request to the Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${"AIzaSyACuCf09jBTfiIgPMWYp0v6FXBKRW0A8Hk"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const resultText = data.candidates[0].content.parts[0].text;
        setResult(resultText);

      } else {
        setResult("Unable to classify the image.");
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Error calling the Gemini API:", error);
      setResult("Error processing the image: " + error.message);
    }
  
    setCapturedImage(null);
  };
  

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                Binit
              </span>
            </h1>
            <Sparkles
              className="absolute -top-4 -right-8 text-emerald-400"
              size={32} />
          </div>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12">
            Transform your waste management with just one click of a button. With Binit, you'll change the world
            one bin at a time.
          </p>

          <button
            onClick={openCamera}
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Camera className="w-6 h-6" />
            Binitfy!
            <span className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>
      </div>

      <Features />

      {/* Camera Modal */}
      {cameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Capture Waste Image</h2>
              <button
                onClick={stopCamera}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <video
              ref={videoRef}
              className="w-full rounded-lg bg-black mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={capturePhoto}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                <ImageIcon className="w-5 h-5" />
                Capture
              </button>
              <button
                onClick={stopCamera}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Captured Image Display */}
      {capturedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Captured Image</h2>
              <button
                onClick={() => setCapturedImage(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <img
              src={capturedImage}
              alt="Captured waste"
              className="w-full rounded-lg mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={processImage}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                <Upload className="w-5 h-5" />
                Process Image
              </button>
              <button
                onClick={() => setCapturedImage(null)}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Retake
              </button>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Congratulations! You just logged</h2>
              <button
                onClick={() => setResult(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <h1 className="text-3xl font-medium text-gray-700">{result}</h1>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default Home;
