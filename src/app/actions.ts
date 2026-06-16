"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.NOTIFICATION_EMAIL || "your-email@example.com";

export async function submitHiringRequest(formData: FormData) {
  try {
    const companyName = formData.get("companyName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const positions = formData.get("positions") as string;
    const roles = formData.get("roles") as string;
    const requirements = formData.get("requirements") as string;
    const budget = formData.get("budget") as string;

    if (!companyName || !contactPerson || !email || !phone || !positions || !roles || !requirements) {
      return { success: false, error: "Missing required fields." };
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
        <h2 style="color: #0891b2; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px;">New Hiring Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 180px;">Company Name:</td>
            <td style="padding: 8px 0; color: #0f172a;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Contact Person:</td>
            <td style="padding: 8px 0; color: #0f172a;">${contactPerson}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 8px 0; color: #0f172a;">+91 ${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">No. of Positions:</td>
            <td style="padding: 8px 0; color: #0f172a;">${positions}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Role(s) Hiring For:</td>
            <td style="padding: 8px 0; color: #0f172a;">${roles}</td>
          </tr>
          ${budget ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Budget Range:</td>
            <td style="padding: 8px 0; color: #0f172a;">${budget}</td>
          </tr>
          ` : ""}
        </table>
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
          <h3 style="color: #475569; margin-bottom: 8px;">Key Requirements & Job Description:</h3>
          <p style="color: #0f172a; line-height: 1.6; white-space: pre-line; background-color: #f8fafc; padding: 12px; border-radius: 6px;">${requirements}</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Hiring Request <onboarding@resend.dev>",
      to: toEmail,
      subject: `Hiring Request: ${companyName} (${roles})`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Action Error:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

export async function submitApplication(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const role = formData.get("role") as string;
    const address = formData.get("address") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !phone || !role || !address || !resumeFile) {
      return { success: false, error: "Missing required fields." };
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
        <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px;">New Job Application</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 180px;">Full Name:</td>
            <td style="padding: 8px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 8px 0; color: #0f172a;">+91 ${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Looking For Role:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${role}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
          <h3 style="color: #475569; margin-bottom: 8px;">Address:</h3>
          <p style="color: #0f172a; line-height: 1.6; white-space: pre-line; background-color: #f8fafc; padding: 12px; border-radius: 6px;">${address}</p>
        </div>
        ${message ? `
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
          <h3 style="color: #475569; margin-bottom: 8px;">Message:</h3>
          <p style="color: #0f172a; line-height: 1.6; white-space: pre-line; background-color: #f8fafc; padding: 12px; border-radius: 6px;">${message}</p>
        </div>
        ` : ""}
      </div>
    `;

    // Process file attachment
    let attachments = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Job Application <onboarding@resend.dev>",
      to: toEmail,
      subject: `Application: ${name} for ${role}`,
      html: htmlContent,
      attachments: attachments,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Action Error:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
