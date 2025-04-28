async function sendMessage() {
   const input = document.getElementById('userInput').value;
   const responseDiv = document.getElementById('response');
   if (!input) {
      responseDiv.innerHTML = 'Please enter a message';
      return;
   }
   responseDiv.innerHTML = 'Loading...';
   try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
         method: "POST",
         headers: {
            "Authorization": "Bearer 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",
            "HTTP-Referer": "http://127.0.0.1:5500",
            "X-Title": "Chat-Bot",
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            "model": "deepseek/deepseek-r1:free",
            "messages": [{ "role": "user", "content": input }]
         })
      });
      const data = await response.json();
      console.log(data);
      const markdownText = data.choices?.[0]?.message?.content || 'No response received';
      responseDiv.innerHTML = marked.parse(markdownText);
   } catch (error) {
      responseDiv.innerHTML = 'Error: ' + error.message;
   }
}