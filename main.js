


Webcam.set({
width:350,
height:300,
image_format : 'png', 
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( ' #camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}


console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uIuLbRZmx/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);

}


function check() 
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
   prediction_1 = results[0].label;
   
   speak();
   if(results[0].label == "Hand 1")
   {
    document.getElementById("result_emoji").innerHTML = "&#128076;"
   }
   if(results[0].label == "Hand 2")
   {
    document.getElementById("result_emoji").innerHTML = "&#128077;"
   }
   if(results[0].label == "Hand 3")
   {
    document.getElementById("result_emoji").innerHTML = "&#9996;"
   }
   if(results[0].label == "Hand 4")
   {
    document.getElementById("result_emoji").innerHTML = "&#9994"
   }
   if(results[0].label == "Hand 5")
   {
    document.getElementById("result_emoji").innerHTML = "&#128079;"
   }
   if(results[0].label == "Hand 6")
   {
    document.getElementById("result_emoji").innerHTML = "&#129304;"
   }

   if(results[0].label == "Hand 7")
   {
    document.getElementById("result_emoji").innerHTML = "&#128075;"
   }

    }
}
