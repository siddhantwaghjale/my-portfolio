export const PROJECTS = [
  {
    title:
      "Weakly Supervised Image Annotation and Segmentation (Major Project)",
    tasks: [
      "Built a hierarchical model for image segmentation for weakly labeled data.",
      "Constructed a stacking ensemble with multiple computer vision models.",
      "The proposed model outperformed other existing algorithms used for the semantic segmentation on the parameters like Probabilistic Rand Index, F1-measure and the global consistency error"
    ]
  },
  {
    title: "SMS Spam Detection using Transformers",
    tasks: [
      "Developed a comprehensive PyTorch / HuggingFace text classification pipeline",
      "Build multiple transformers including Distil-BERT and RoBERTa with custom pooling layers",
      "Used ONNX format so that it can be exported with reduced weights and seamlessly integrated with any application"
    ]
  },
  {
    title: "Classification of Diseases from Chest X-rays using Deep Learning",
    tasks: [
      "Build an x-ray image classification model to detect chest diseases using CNN.",
      "Optimized the method used to create a Faster Regional CNN, which uses attention boxes that helped to reduce computation time and improvised the prediction time.",
      "The proposed model performed 50x better than conventional CNN model"
    ]
  },
  {
    title: "Remote Health Monitoring using Embedded Sensors in Clothing",
    tasks: [
      'Developed a "smart" jacket equipped with sensors that can monitor vital signs such as heart rate, temperature, and step oscillations and alert a medical professional (or other emergency contact) if they change from their baseline values',
      "Remotely monitored health vitals and store collected data in the cloud for future analysis and retrieval",
      "Developed a companion android app that can help doctors, users, and nurses to read and monitor data."
    ]
  },
  {
    title: "Autonomous Person Following Drone",
    tasks: [
      "The drone is built using Pixhawk PX4 flight controller",
      "Equipped the drone to follow a person via color codes using the video feed from a mounted camera.",
      "Used YOLO algorithm for person identification"
    ]
  },
  {
    title: "Beat Saber Game on Oculus Rift",
    tasks: [
      "Developed a Virtual Reality Environment using Unity Game Engine.",
      "Used Oculus SDK with Unity to transport the created environment to the virtual world",
      "Using Sabers in hand to destroy incoming beats in that particular direction"
    ]
  },
  {
    title: "Intrusion Detection System",
    tasks: [
      "Build a LSTM based model to classify different attacks",
      "developed a comprehensive PyTorch GPU/TPU classification pipeline",
      "Compared different Loss Function and Optimizer to decide which one was giving the most accurate results."
    ]
  }
];
