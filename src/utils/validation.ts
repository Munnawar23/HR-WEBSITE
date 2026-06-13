export function validateName(name: string, requiredMsg = "Name is required."): string | undefined {
  if (!name.trim()) return requiredMsg;
  if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) return "Enter a valid name (letters only).";
  return undefined;
}

export function validateEmail(email: string): string | undefined {
  if (!email.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Enter a valid email address.";
  return undefined;
}

export function validatePhone(phone: string): string | undefined {
  const rawPhone = phone.replace(/\s/g, "");
  if (!rawPhone) return "Phone number is required.";
  if (!/^[6-9]\d{9}$/.test(rawPhone)) return "Enter a valid 10-digit Indian mobile number (starting 6–9).";
  return undefined;
}

export function validateRequired(value: string, errorMsg: string): string | undefined {
  if (!value || typeof value !== 'string' || !value.trim()) return errorMsg;
  return undefined;
}

export function validateMinLength(value: string, min: number, requiredMsg: string, lengthMsg: string): string | undefined {
  if (!value || typeof value !== 'string' || !value.trim()) return requiredMsg;
  if (value.trim().length < min) return lengthMsg;
  return undefined;
}

export function validatePositiveNumber(value: string, requiredMsg: string, invalidMsg: string): string | undefined {
  if (!value || typeof value !== 'string' || !value.trim()) return requiredMsg;
  if (!/^[1-9]\d*$/.test(value.trim())) return invalidMsg;
  return undefined;
}
