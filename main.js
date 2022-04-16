
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4kZ0V6psk/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("modelReady");
}

function gotResults(){
    console.log("gotResults")
}