https://teachablemachine.withgoogle.com/models/Jcpo8ByYX/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jcpo8ByYX/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}