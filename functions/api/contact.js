export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    const smtpResponse = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: context.env.SMTP2GO_API_KEY,
        to: ["applications@askunaihair.org"],
        sender: "forms@askunaihair.org",
        subject: `New Volunteer Application: ${data.firstName} ${data.lastName}`,
        text_body: JSON.stringify(data, null, 2)
      })
    });

    if (!smtpResponse.ok) {
      return new Response("Email failed", { status: 500 });
    }

    return new Response("Success", { status: 200 });

  } catch (err) {
    return new Response("Server error", { status: 500 });
  }
}
