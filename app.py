#!/usr/bin/env python3
"""
AI Text Detection Desktop Application
A PyQt6-based desktop app for detecting AI-generated text using a pre-trained ML model.
"""

import sys
from PyQt6.QtWidgets import (
    QApplication,
    QMainWindow,
    QWidget,
    QVBoxLayout,
    QTextEdit,
    QPushButton,
    QLabel,
    QMessageBox,
)
from PyQt6.QtCore import Qt, QThread, pyqtSignal
from PyQt6.QtGui import QFont


class DetectionWorker(QThread):
    """Worker thread for running ML inference without blocking the UI."""
    finished = pyqtSignal(str, float)  # label, score
    error = pyqtSignal(str)

    def __init__(self, text: str):
        super().__init__()
        self.text = text

    def run(self):
        try:
            from transformers import pipeline

            # Use pre-trained model for AI text detection
            classifier = pipeline(
                "text-classification",
                model="ahmediqbal/ai-text-detector-model",
                device=-1,  # CPU
            )

            if not self.text.strip():
                self.error.emit("Please enter some text to analyze.")
                return

            result = classifier(self.text.strip(), truncation=True, max_length=512)[0]
            label = str(result["label"]).lower()
            score = result["score"]

            # Model returns "Human" or "AI" (or LABEL_0/LABEL_1)
            if "ai" in label or "1" in label:
                display_label = "AI-generated"
            else:
                display_label = "Human-written"

            self.finished.emit(display_label, score)
        except Exception as e:
            self.error.emit(str(e))


class MainWindow(QMainWindow):
    """Main application window with text input and analysis UI."""

    def __init__(self):
        super().__init__()
        self.worker = None
        self._init_ui()

    def _init_ui(self):
        self.setWindowTitle("AI Text Detector")
        self.setMinimumSize(500, 400)
        self.resize(600, 500)

        central = QWidget()
        self.setCentralWidget(central)
        layout = QVBoxLayout(central)
        layout.setSpacing(12)
        layout.setContentsMargins(20, 20, 20, 20)

        # Input label
        input_label = QLabel("Enter text to analyze:")
        input_label.setFont(QFont("Segoe UI", 10))
        layout.addWidget(input_label)

        # Text area for input
        self.text_input = QTextEdit()
        self.text_input.setPlaceholderText("Paste or type text here...")
        self.text_input.setMinimumHeight(180)
        self.text_input.setFont(QFont("Segoe UI", 11))
        layout.addWidget(self.text_input)

        # Analyze button
        self.analyze_btn = QPushButton("Analyze")
        self.analyze_btn.setMinimumHeight(40)
        self.analyze_btn.setFont(QFont("Segoe UI", 11, QFont.Weight.Bold))
        self.analyze_btn.clicked.connect(self._on_analyze)
        layout.addWidget(self.analyze_btn)

        # Result label
        result_label = QLabel("Result:")
        result_label.setFont(QFont("Segoe UI", 10))
        layout.addWidget(result_label)

        self.result_display = QLabel("—")
        self.result_display.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.result_display.setFont(QFont("Segoe UI", 14, QFont.Weight.Bold))
        self.result_display.setMinimumHeight(50)
        self.result_display.setStyleSheet(
            "background-color: #f0f0f0; border-radius: 6px; padding: 12px;"
        )
        layout.addWidget(self.result_display)

        # Probability score (optional display - user asked for simple label, but score adds context)
        self.score_display = QLabel("")
        self.score_display.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.score_display.setFont(QFont("Segoe UI", 10))
        layout.addWidget(self.score_display)

    def _on_analyze(self):
        text = self.text_input.toPlainText()
        if not text.strip():
            QMessageBox.warning(self, "Input Required", "Please enter some text to analyze.")
            return

        self.analyze_btn.setEnabled(False)
        self.result_display.setText("Analyzing...")
        self.score_display.setText("")
        QApplication.processEvents()

        self.worker = DetectionWorker(text)
        self.worker.finished.connect(self._on_detection_finished)
        self.worker.error.connect(self._on_detection_error)
        self.worker.start()

    def _on_detection_finished(self, label: str, score: float):
        self.analyze_btn.setEnabled(True)
        self.result_display.setText(label)
        self.score_display.setText(f"Confidence: {score * 100:.1f}%")

        if label == "AI-generated":
            self.result_display.setStyleSheet(
                "background-color: #ffebee; color: #c62828; border-radius: 6px; padding: 12px;"
            )
        else:
            self.result_display.setStyleSheet(
                "background-color: #e8f5e9; color: #2e7d32; border-radius: 6px; padding: 12px;"
            )

    def _on_detection_error(self, message: str):
        self.analyze_btn.setEnabled(True)
        self.result_display.setText("Error")
        self.result_display.setStyleSheet(
            "background-color: #f0f0f0; border-radius: 6px; padding: 12px;"
        )
        self.score_display.setText("")
        QMessageBox.critical(self, "Analysis Error", message)


def main():
    app = QApplication(sys.argv)
    app.setStyle("Fusion")
    window = MainWindow()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
