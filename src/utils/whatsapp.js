export const WHATSAPP_NUMBER = '918276868778';

export function createWhatsAppMessage({ name, email, course }) {
  return `Hello AB Studies 👋

I would like to enquire about admission.

Name: ${name}

Email: ${email}

Course: ${course}

Please contact me regarding admission.`;
}

export function createContactWhatsAppMessage({
  name,
  email,
  subject,
  message,
}) {
  return `Hello AB Studies 👋

I would like to get in touch.

Name: ${name}

Email: ${email}

Subject: ${subject}

Message: ${message}

Please contact me when convenient.`;
}

export function openWhatsApp(message, targetWindow = null) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if (targetWindow && !targetWindow.closed) {
    targetWindow.location.replace(whatsappUrl);
    return targetWindow;
  }

  return window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
