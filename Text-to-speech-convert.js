function convertTextToSpeech() {
    const textInput = document.getElementById('text-input').value;
    
    if ('speechSynthesis' in window) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textInput);

        synthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support the Web Speech API. Try using a different browser.");
    }
}
