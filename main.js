
 function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bLIqeTSde/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresult);
}
function gotresult(error,result){
    if (error) {
        console.log(error);
    }else {
        console.log(result);
        random_r =Math.floor(Math.random() * 255)+ 1;
        random_g =Math.floor(Math.random() * 255)+ 1;
        random_b =Math.floor(Math.random() * 255)+ 1;

        document.getElementById("result_label").innerHTML='I can hear-'+ result[0].label;
        document.getElementById("result_confidence").innerHTML='accuracy-'+ (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById("alien1");
        img1=document.getElementById("alien2");
        img2=document.getElementById("alien3");
        img3=document.getElementById("alien4");
if (result[0].label=="clapping") {
    img.src='aliens-01.gif';
    img1.src='aliens-02.png';
    img2.src='aliens-03.png';
    img3.src='aliens-04.png'
}
else if(result[0].label=="laughing") {
    img.src='aliens-01.png';
    img1.src='aliens-02.gif';
    img2.src='aliens-03.png';
    img3.src='aliens-04.png'
}
else if (result[0].label=="bell") {
    img.src='aliens-01.png';
    img1.src='aliens-02.png';
    img2.src='aliens-03.gif';
    img3.src='aliens-04.png'
}
else {
    img.src='aliens-01.png';
    img1.src='aliens-02.png';
    img2.src='aliens-03.png';
    img3.src='aliens-04.gif'
}

    }
}