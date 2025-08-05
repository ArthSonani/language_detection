# 🌐 Language Detection & Translation App

A full-stack MERN application enhanced with a Flask-based machine learning API that detects the language of user input (text or image) and translates it to a target language. Combines modern web technologies with deep learning and OCR to deliver real-time results.

---

## 🧩 Tech Stack

### 🖥️ Frontend (React.js)
- Interactive UI for language detection and translation
- Supports text input and image upload (OCR)

### 🖧 Backend (Express.js + Node.js)
- Handles frontend requests and routes them to Flask API
- Manages user sessions and history

### 🧠 ML API (Python Flask)
- Deep learning model (TensorFlow + Keras) for language classification
- Translation using `translate` Python package
- OCR support with Tesseract
- Flask + CORS for communication

### 🗃️ Database
- **MongoDB**: Stores user-specific history and interactions (if integrated)

### ☁️ Deployment
- Hosted on **AWS EC2** (currently offline)

---

## 🔍 Key Features

- 🌍 **Detect Language** from input text or OCR image
- 🔁 **Translate** to a target language in real-time
- 🧾 **View History** of past detections/translations per user
- 📸 **Image Upload** with OCR (using Tesseract)
- ⚡ **Fast Inference** via deep learning model served on Flask API

---

## 🧪 ML Model

- Dataset: `Language_Detection.csv` with multilingual sentences
- Preprocessing: Lowercasing, punctuation removal, tokenization
- Model:
  - `Embedding → GlobalAveragePooling1D → Dense + Dropout → Softmax`
- Trained on 16+ languages with high accuracy
