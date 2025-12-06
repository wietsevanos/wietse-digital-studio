import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  naam: string;
  email: string;
  telefoon: string;
  bedrijf: string;
  opmerking?: string;
}

const sendEmail = async (to: string[], subject: string, html: string) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Wietse Webworks <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });
  return response.json();
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { naam, email, telefoon, bedrijf, opmerking }: ContactRequest = await req.json();
    
    console.log("Received contact request:", { naam, email, telefoon, bedrijf });

    // Send confirmation email to customer
    const customerEmailResponse = await sendEmail(
      [email],
      "Bedankt voor je aanvraag - Wietse Webworks",
      `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a2e;">Bedankt voor je aanvraag, ${naam}!</h1>
          <p>Ik heb je bericht goed ontvangen en neem zo snel mogelijk contact met je op. Meestal binnen 24 uur.</p>
          
          <h3 style="color: #3b82f6;">Jouw gegevens:</h3>
          <ul>
            <li><strong>Naam:</strong> ${naam}</li>
            <li><strong>E-mail:</strong> ${email}</li>
            <li><strong>Telefoon:</strong> ${telefoon}</li>
            <li><strong>Bedrijf:</strong> ${bedrijf}</li>
            ${opmerking ? `<li><strong>Opmerking:</strong> ${opmerking}</li>` : ""}
          </ul>
          
          <p style="margin-top: 30px;">Met vriendelijke groet,<br><strong>Wietse van Os</strong><br>Wietse Webworks</p>
        </div>
      `
    );

    console.log("Customer email sent:", customerEmailResponse);

    // Send notification email to Wietse
    const notificationEmailResponse = await sendEmail(
      ["wietsevanos@gmail.com"],
      `Nieuwe aanvraag van ${naam} - ${bedrijf}`,
      `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a2e;">Nieuwe website aanvraag!</h1>
          
          <h3 style="color: #3b82f6;">Klantgegevens:</h3>
          <ul>
            <li><strong>Naam:</strong> ${naam}</li>
            <li><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Telefoon:</strong> <a href="tel:${telefoon}">${telefoon}</a></li>
            <li><strong>Bedrijf:</strong> ${bedrijf}</li>
          </ul>
          
          ${opmerking ? `<h3 style="color: #3b82f6;">Opmerking:</h3><p>${opmerking}</p>` : ""}
          
          <p style="margin-top: 30px; color: #888;">Verzonden via het contactformulier op je website.</p>
        </div>
      `
    );

    console.log("Notification email sent:", notificationEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
