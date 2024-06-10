//{}[]
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l-IwI-6NO/model.json" ,modelLoaded);

Webcam.attach( "#camera" );

camera = document.getElementById("camera");

    Webcam.set({
     width:350,
     height:300,
     image_format : 'jpg' ,
     jpg_quality:90
    });

    function modelLoaded(){
     console.log('Marowak');
    }

function take_snapshot ()
{
        Webcam.snap(function(data_uri) {
             document.getElementById("result").innerHTML = '<img id="selfi_image" src="' +data_uri+'"/>';
      });
}
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  } 
  function gotResult(error, result) {

    if(error) {
        console.error(error);
    } else{

        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;

        pecent = result[0].confidence.toFixed(3) * 100;

        console.log(percent);

        document.getElementById("result_object_accuracy").innerHTML = percent + "%";
        object = result[0].label;

        speak();
    }
}
function speak(){
 var synth = window.speechSynthesis;

 speak_data = "praticamente "+percent+" por cento com confiança que é esse objeto "+object;

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);

}