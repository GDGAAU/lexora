"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileImage,
  FaFileAlt,
  FaFileVideo,
  FaFileAudio,
  FaFileArchive,
  FaFileCode,
  FaDownload,
  FaEye,
  FaSearch,
  FaSort,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";
import { Loader2 } from "lucide-react";
import Layout from "../../../layouts/Layout";




const FileList = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/organicchemistry")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch files");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Add file type based on extension for demo
          const filesWithType = data.map((file) => {
            const extension = file.name.split(".").pop().toLowerCase();
            let type = "other";

            if (["pdf"].includes(extension)) type = "pdf";
            else if (["doc", "docx"].includes(extension)) type = "word";
            else if (["xls", "xlsx"].includes(extension)) type = "excel";
            else if (["ppt", "pptx"].includes(extension)) type = "powerpoint";
            else if (["jpg", "jpeg", "png", "gif", "svg"].includes(extension))
              type = "image";
            else if (["mp4", "avi", "mov", "wmv"].includes(extension))
              type = "video";
            else if (["mp3", "wav", "ogg"].includes(extension)) type = "audio";
            else if (["zip", "rar", "7z", "tar", "gz"].includes(extension))
              type = "archive";
            else if (
              ["html", "css", "js", "jsx", "ts", "tsx", "json", "xml"].includes(
                extension
              )
            )
              type = "code";

            return { ...file, type };
          });

          setFiles(filesWithType);
        } else {
          throw new Error("Unexpected data format");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  // Get file icon based on type
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500" />;
      case "word":
        return <FaFileWord className="text-blue-600" />;
      case "excel":
        return <FaFileExcel className="text-green-600" />;
      case "powerpoint":
        return <FaFilePowerpoint className="text-orange-500" />;
      case "image":
        return <FaFileImage className="text-purple-500" />;
      case "video":
        return <FaFileVideo className="text-indigo-500" />;
      case "audio":
        return <FaFileAudio className="text-pink-500" />;
      case "archive":
        return <FaFileArchive className="text-yellow-600" />;
      case "code":
        return <FaFileCode className="text-gray-700" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  // Filter files based on search term and category
  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || file.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort files
  const sortedFiles = [...filteredFiles].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Get unique file types for filter
  const fileTypes = ["all", ...new Set(files.map((file) => file.type))];

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-white rounded-xl shadow-lg">
        <Loader2 className="h-12 w-12 text-indigo-500 animate-spin mb-4" />
        <p className="text-gray-600 text-lg">Loading files...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (

      <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-gray-700">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-white rounded-xl shadow-lg">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <FaFileAlt className="h-12 w-12 text-indigo-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          No Files Found
        </h2>
        <p className="text-gray-500 text-center max-w-md">
          There are no files available in this category. Please check back later
          or try another category.
        </p>
      </div>
    );
  }

  return (
    <Layout>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-1">CS Files</h2>
        <p className="text-indigo-100 text-sm">
          Access lecture notes, assignments, and study materials
        </p>
      </div>

      {/* Search and filters */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              {fileTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>

            <button
              onClick={toggleSortOrder}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent flex items-center gap-2"
            >
              <FaSort className="text-gray-500" />
              {sortOrder === "asc" ? (
                <FaSortAlphaDown className="text-indigo-500" />
              ) : (
                <FaSortAlphaUp className="text-indigo-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* File list */}
      <div className="p-6">
        {filteredFiles.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No files match your search criteria
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {sortedFiles.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className="p-4 flex items-start gap-3">
                    <div className="text-2xl mt-1 flex-shrink-0">
                      {getFileIcon(file.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {file.type.charAt(0).toUpperCase() + file.type.slice(1)}{" "}
                        • {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 px-4 py-3 flex justify-between border-t border-gray-200">
                    <a
                      href={file.webViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-colors"
                    >
                      <FaEye /> View
                    </a>
                    <a
                      href={file.webContentLink}
                      download
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-colors"
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Footer with stats */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-500">
        Showing {filteredFiles.length} of {files.length} files
      </div>
    </div>
    </Layout>
  );
};

export default FileList;
