import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJnLmdpcmlkaGFycmVkZHk5ODQ4QGdtYWlsLmNvbSIsImV4cCI6MTc4MTc2NzI1OSwiaWF0IjoxNzgxNzY2MzU5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNGE0ZDU3NmMtZjRjMy00ODJiLTk5MGUtODBlM2Y5NDNjNWUxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZy5naXJpZGhhciByZWRkeSIsInN1YiI6ImNlYzg2Y2Q3LTZmNjQtNGUxNS1iNWI4LTY2ZTRiZGM1MzBkYyJ9LCJlbWFpbCI6ImcuZ2lyaWRoYXJyZWRkeTk4NDhAZ21haWwuY29tIiwibmFtZSI6ImcuZ2lyaWRoYXIgcmVkZHkiLCJyb2xsTm8iOiIyMzAzYTUxMjg1IiwiYWNjZXNzQ29kZSI6ImJEcmVBcSIsImNsaWVudElEIjoiY2VjODZjZDctNmY2NC00ZTE1LWI1YjgtNjZlNGJkYzUzMGRjIiwiY2xpZW50U2VjcmV0IjoiVU5Nem1weE5BZGVUTndXVSJ9.HMf2LsTwMIiV-ymPey9pItv484jOtTMjhDnlvorYl6k";

export async function getNotifications() {
  const response = await axios.get(
    "http://20.244.56.144/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  console.log(response.data);

  return response.data;
}