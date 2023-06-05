// const btn =document.querySelector('.talk')
// const content =document.querySelector('.content')

// function speack(sentence){

// const text_speak=new SpeechSynthesisUtterance(sentence);

// text_speak.rate=1;
// text_speak.pitch=1;
// window.speechSynthesis.speak(text_speak)
// }

// function wish_me(){
//     var day =new Date();
//     var hr =day.getHours();
//     if (hr>=0 && hr< 12) {
//         speack("Good morning boss!")

//     }
//     if (hr== 12 && hr<=15) {
//         speak("Good noon boss")

//     }
//     if (hr>12 && hr<= 12) {
//         speak("Good evening boss")

//     }
//     else{
//         speak('good evening')
//     }
// }

// window.addEventListener('load',()=>{
//     speak("Activating jarvis")
//     speak('going live')
//     wish_me();
// })\


const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
    console.log('working..')
})
