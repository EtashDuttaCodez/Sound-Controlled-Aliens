function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-ElRMFGGh/model.json', modelLoaded)
}
function modelLoaded() {
    classifier.classify(gotresults)
}
function gotresults(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        label = result[0].label
        confidence = (result[0].confidence * 100).toFixed(2)
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("lable").innerHTML = "I Can Hear " + label
        document.getElementById("confidence").innerHTML = "Accuracy : " + confidence + "%"

        document.getElementById("lable").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";


        a1 = document.getElementById("a1")
        a2 = document.getElementById("a2")
        a3 = document.getElementById("a3")
        a4 = document.getElementById("a4")

        if (label == "Screaming") {
            a1.src = 'aliens-01.gif'
            a2.src = 'aliens-02.png'
            a3.src = 'aliens-03.png'
            a4.src = 'aliens-04.png'
        }
        else if(label == "Rattling") {
            a1.src = 'aliens-01.png'
            a2.src = 'aliens-02.gif'
            a3.src = 'aliens-03.png'
            a4.src = 'aliens-04.png'
        }
        else if(label == "blah blah blah") {
            a1.src = 'aliens-01.png'
            a2.src = 'aliens-02.png'
            a3.src = 'aliens-03.gif'
            a4.src = 'aliens-04.png'
        }
        else{
            a1.src = 'aliens-01.png'
            a2.src = 'aliens-02.png'
            a3.src = 'aliens-03.png'
            a4.src = 'aliens-04.gif' 
        }
        

    }
}



















