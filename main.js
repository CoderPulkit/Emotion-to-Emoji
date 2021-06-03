prediction1="";
prediction2="";

Webcam.set({
    width:300,height:250,image_format:'png',png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnap() {
    Webcam.snap(function (data_uri)
    {
  document.getElementById("result").innerHTML
  ='<img id="captured_image" src="'+data_uri+'" />';
    });
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2zCc6OvEY/model.json',modelLoaded);

function modelLoaded() {
    console.log("model loaded");
    }

    function speak() {
        var synth= window.speechSynthesis;
        speakdata1="The First prediction is"+prediction1;
        speakdata2="The Second prediction is"+prediction2;
        var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
        synth.speak(utterThis);
    }

    function check() {
        img=document.getElementById('captured_image');
        classifier.classify(img,gotResult);
    }

    function gotResult(error,results)  {
        if (error) {
            console.error(error);
        }
        else {
        console.log(results);
        document.getElementById("name1").innerHTML=results[0].label;
        document.getElementById("name2").innerHTML=results[1].label;
       prediction1=results[0].label;
       prediction2=results[1].label;
       speak();
       if (results[0].label=="Happy"){
  document.getElementById("emoji1").innerHTML="&#128522;";
  console.log("error");
       }

 if (results[0].label=="Sad"){
        document.getElementById("emoji1").innerHTML="&#128532;";console.log("error");
  }

    if (results[0].label=="Angry"){
    document.getElementById("emoji1").innerHTML="&#128548;";console.log("error");
   }

    if (results[0].label=="Crying"){
  document.getElementById("emoji1").innerHTML="&#128546;";console.log("error");
    }

   if (results[1].label=="Angry"){
  document.getElementById("emoji2").innerHTML="&#128522;";console.log("error");
    }

    if (results[1].label=="Crying"){
  document.getElementById("emoji2").innerHTML="&#128546;"; console.log("error");         
 }
 
 if (results[1].label=="Sad"){
    document.getElementById("emoji2").innerHTML="&#128532;";
    console.log("error");
}

    if (results[1].label=="Happy"){
        document.getElementById("emoji2").innerHTML="&#128522;";
        console.log("error");
    }

   }
       }

    