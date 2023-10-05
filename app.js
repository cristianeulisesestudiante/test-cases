const API_KEY = "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";

async function getTestCase(prompt) {
   const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      }),
   });

   return await res.json();
}
const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
   if (!prompt.value) return;

   const res = await getTestCase(prompt.value);
   console.log(res.choices[0].message.content);
});
// console.log(data);
// console.log(data.choices[0].text);
// getTestCase();
