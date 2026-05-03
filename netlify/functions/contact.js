// Netlify Function: POST /api/contact
// Sends form data via EmailJS REST API → your inbox
// Env vars needed in Netlify dashboard:
//   EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  const { name, email, phone, packageInterest, message } = data;

  if (!name || !email || !phone) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, email and phone are required." }),
    };
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          phone: phone,
          package_interest: packageInterest || "Not specified",
          message: message || "No message provided",
          to_email: "poomeigh503@gmail.com",
          reply_to: email,
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("EmailJS error:", text);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email. Please try WhatsApp." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent! We will contact you shortly.",
        whatsappUrl: `https://wa.me/27823562239?text=Hello%20NexaWeb!%20%F0%9F%91%8B%0A%0A*New%20Booking%20Request*%0A%0A*Name:*%20${encodeURIComponent(name)}%0A*Email:*%20${encodeURIComponent(email)}%0A*Phone:*%20${encodeURIComponent(phone)}%0A*Package:*%20${encodeURIComponent(packageInterest || "Not specified")}%0A*Message:*%20${encodeURIComponent(message || "")}`,
      }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error. Please contact us via WhatsApp." }),
    };
  }
};
