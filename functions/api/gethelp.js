export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    const escapeHtml = (unsafe) =>
      String(unsafe)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const formatLabel = (key) =>
      key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

    // Format submission fields dynamically
    const formattedFields = Object.entries(data)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          value = value.join(", ");
        }

        const safeValue = escapeHtml(value).replace(/\n/g, "<br>");

        return `
          <tr>
            <td style="padding:10px;border:1px solid #eee;font-weight:600;background:#f9f9f9;width:40%;vertical-align:top;">
              ${formatLabel(key)}
            </td>
            <td style="padding:10px;border:1px solid #eee;">
              ${safeValue || "-"}
            </td>
          </tr>
        `;
      })
      .join("");

    const timestamp = new Date().toLocaleString();

    // ===============================
    // 1️⃣ ADMIN EMAIL
    // ===============================

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px;">
        <div style="max-width:600px;margin:auto;background:white;padding:25px;border-radius:8px;">
          <h2 style="margin-top:0;">New Help Request</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:20px;">
            ${formattedFields}
          </table>
          <p style="margin-top:30px;font-size:12px;color:#888;">
            Submitted on ${timestamp}
          </p>
        </div>
      </div>
    `;

    const adminText = Object.entries(data)
      .map(([key, value]) => {
        if (Array.isArray(value)) value = value.join(", ");
        return `${formatLabel(key)}: ${value}`;
      })
      .join("\n");

    // ===============================
    // 2️⃣ REQUEST CONFIRMATION EMAIL
    // ===============================

    const applicantHtml = `
      <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px;">
        <div style="max-width:600px;margin:auto;background:white;padding:25px;border-radius:8px;">
          <h2 style="margin-top:0;">We Received Your Request</h2>

          <p>Hi ${escapeHtml(data.name || "")},</p>

          <p>
            We’ve received your request and will reach out shortly.
          </p>

          <p>
            If this is an emergency, please call 911.
          </p>

          <p>
            If we need any additional information, we’ll reach out to you at this email address.
          </p>

          <p style="margin-top:30px;">
            Best regards,<br/>
            Askunai Ha'ir Coordinators
          </p>
        </div>
      </div>
    `;

    const applicantText = `
Hi ${data.name || ""},

We’ve received your request and will respond shortly.

If this is an emergency, please call 911.

If we need anything else, we’ll contact you.

Best regards,
Askunai Ha'ir Coordinators
`;

    // ===============================
    // SEND BOTH EMAILS
    // ===============================

    const sendEmail = async (emailPayload) => {
      return fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: context.env.SMTP2GO_API_KEY,
          ...emailPayload
        })
      });
    };

    // Send admin notification
    const adminResponse = await sendEmail({
      to: ["dispatch@askunaihair.org"],
      sender: "Askunai Ha'ir <forms@askunaihair.org>",
      subject: `New Help Request: ${data.name}, ${data.urgencyLevel}`,
      html_body: adminHtml,
      text_body: adminText
    });

    if (!adminResponse.ok) {
      return new Response("Admin email failed", { status: 500 });
    }

    // Send confirmation to applicant
    if (data.contactEmail) {
      await sendEmail({
        to: [data.contactEmail],
        sender: "Askunai Ha'ir <forms@askunaihair.org>",
        subject: "We Received Your Request",
        html_body: applicantHtml,
        text_body: applicantText
      });
    }

    return new Response("Success", { status: 200 });

  } catch (err) {
    return new Response("Server error", { status: 500 });
  }
}
