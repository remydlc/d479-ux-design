function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
    const text = input.value.toLowerCase();

    if (!text.trim()) return;

    // Display User Message
    chatWindow.innerHTML += `<div class="msg user"><strong>You:</strong> ${input.value}</div>`;
    
    let reply = "I'm not sure about that. Try asking about 'money', 'power', or 'alcohol'.";

    // Logic based on Island Data
    if (text.includes("power") || text.includes("volt")) {
        reply = "Power outlets are 120 volts (the same as in the United States).";
    } else if (text.includes("alcohol") || text.includes("drink")) {
        reply = "The drinking age is 18. Alcohol is not served between midnight and 9:00 a.m.";
    } else if (text.includes("money") || text.includes("dollar") || text.includes("currency")) {
        reply = "Taniti uses the U.S. dollar, but many businesses accept euros and yen.";
    } else if (text.includes("hospital") || text.includes("medical") || text.includes("doctor")) {
        reply = "There is one hospital and several clinics. The hospital has many multilingual employees.";
    }

    setTimeout(() => {
        chatWindow.innerHTML += `<div class="msg bot"><strong>Taniti AI:</strong> ${reply}</div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500);

    input.value = "";
}