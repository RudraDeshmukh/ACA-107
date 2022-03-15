function audio_classifier(){
    navigator.mediaDevices.getUserMedia({audio : true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6HedhTfuW/',model_loaded)
}
function model_loaded(){
    classifier.classify(gotResults())
}