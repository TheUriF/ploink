export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    // Basic HTML escape (prevents injection)
    const escapeHtml = (unsafe) =>
      String(unsafe)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    // Convert camelCase to "Pretty Labels"
    const formatLabel = (key) =>
      key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

    // Format all fields dynamically
    const formattedFields = Object.entries(data)
      .map(([key, value]) => {
        let displayValue = value;

        // Handle arrays (checkbox groups etc)
        if (Array.isArray(value)) {
          displayValue = value.join(", ");
        }

        // Preserve line breaks
        displayValue = escapeHtml(displayValue).replace(/\n/g, "<br>");

        return `
          <tr>
            <td style="
              padding:10px;
              border:1px solid #eee;
              font-weight:600;
              background:#f9f9f9;
              width:40%;
              vertical-align:top;
            ">
              ${formatLabel(key)}
            </td>
            <td style="
              padding:10px;
              border:1px solid #eee;
            ">
              ${displayValue || "-"}
            </td>
          </tr>
        `;
      })
      .join("");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
        <div style="
          max-width:600px;
          margin:auto;
          background:white;
          padding:25px;
          border-radius:8px;
          box-shadow:0 2px 8px rgba(0,0,0,0.05);
        ">
          
          <h2 style="margin-top:0; color:#222;">
            New Website Submission
          </h2>

          <p style="color:#555;">
            A new form submission was received.
          </p>

          <table style="
            width:100%;
            border-collapse:collapse;
            margin-top:20px;
          ">
            ${formattedFields}
          </table>

          <p style="
            margin-top:30px;
            font-size:12px;
            color:#888;
          ">
            Submitted on ${new Date().toLocaleString()}
          </p>

        </div>
      </div>
    `;

    const textBody = Object.entries(data)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          value = value.join(", ");
        }
        return `${formatLabel(key)}: ${value}`;
      })
      .join("\n");

    const smtpResponse = await fetch(
      "https://api.smtp2go.com/v3/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          api_key: context.env.SMTP2GO_API_KEY,
          to: ["applications@askunaihair.org"],
          sender: "forms@askunaihair.org",
          subject: `New Volunteer Application: ${data.firstName} ${data.lastName}`,
          html_body: htmlBody,
          text_body: textBody
        })
      }
    );

    if (!smtpResponse.ok) {
      const errorText = await smtpResponse.text();
      return new Response(`Email failed: ${errorText}`, { status: 500 });
    }

    return new Response("Success", { status: 200 });

  } catch (err) {
    return new Response("Server error", { status: 500 });
  }
}
