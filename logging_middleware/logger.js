const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndXR0YXNuZWhhMThAZ21haWwuY29tIiwiZXhwIjoxNzgwNjM1MjY5LCJpYXQiOjE3ODA2MzQzNjksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1NTNhZDlmOS05ZDJhLTQ3ZWMtYjE2OS00NmViZTdlZTRmNTYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJndXR0YSB2ZW5rYXRhIG5hZ2Egc25laGEiLCJzdWIiOiIzZmUwMTEwMy1jMjMyLTRiYTQtOGYxMi01ODRkMjkxOWEzZDIifSwiZW1haWwiOiJndXR0YXNuZWhhMThAZ21haWwuY29tIiwibmFtZSI6Imd1dHRhIHZlbmthdGEgbmFnYSBzbmVoYSIsInJvbGxObyI6IjIzYnExYTA1ODkiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIzZmUwMTEwMy1jMjMyLTRiYTQtOGYxMi01ODRkMjkxOWEzZDIiLCJjbGllbnRTZWNyZXQiOiJZUnNNWm5Ud1VQc2J1RlZIIn0.RmGIw71urKGOIFCFiCuUl6rf9K9t6iNzMlqXg-TdvO0";

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(
      error.response ? error.response.data : error.message
    );
  }
}

module.exports = Log;