# AI Text Detector

A Python desktop application using PyQt6 for detecting AI-generated text. Enter text, click Analyze, and see whether it's classified as **AI-generated** or **Human-written**.

## Features

- **Text input** – Paste or type text in the textarea
- **Analyze button** – Triggers AI detection
- **Result display** – Shows label (AI-generated or Human-written) and confidence score
- **Pre-trained ML model** – Uses `ahmediqbal/ai-text-detector-model` (DistilBERT) from Hugging Face

## Requirements

- Python 3.9+
- PyQt6
- PyTorch
- Transformers (Hugging Face)

## Installation

```bash
pip install -r requirements.txt
```

## Usage

```bash
python app.py
```

1. Enter or paste text in the text area
2. Click **Analyze**
3. View the result: **AI-generated** or **Human-written**, with confidence percentage

## Notes

- First analysis may take a moment while the model downloads (~250MB)
- Model works best on English text
- Intended for supportive use; not recommended for high-stakes decisions
- Requires a display/X server (standard desktop environment)
