"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { InputField, getInputClass } from "@/components/page/apply/InputField";
import { submitHiringRequest } from "@/app/actions";
import {
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  Users,
  ChevronDown,
  FileText,
  ArrowRight,
  IndianRupee,
} from "lucide-react";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMinLength,
  validateRequired,
  validatePositiveNumber,
} from "@/utils/validation";

interface FormProps {
  onSuccess: () => void;
}

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  positions: string;
  roles: string;
  requirements: string;
  budget: string;
}

interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  positions?: string;
  roles?: string;
  requirements?: string;
}



function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  const companyNameError = validateMinLength(
    data.companyName,
    2,
    "Company name is required.",
    "Enter a valid company name."
  );
  if (companyNameError) errors.companyName = companyNameError;

  const contactPersonError = validateName(data.contactPerson, "Contact person name is required.");
  if (contactPersonError) errors.contactPerson = contactPersonError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const positionsError = validatePositiveNumber(
    data.positions,
    "Number of positions is required.",
    "Enter a valid number (minimum 1)."
  );
  if (positionsError) {
    errors.positions = positionsError;
  } else if (parseInt(data.positions, 10) > 50) {
    errors.positions = "Maximum number of positions is 50.";
  }

  const rolesError = validateRequired(data.roles, "Please specify the role(s) you are hiring for.");
  if (rolesError) errors.roles = rolesError;

  const requirementsError = validateMinLength(
    data.requirements,
    20,
    "Please describe your key requirements.",
    "Please provide more details (at least 20 characters)."
  );
  if (requirementsError) errors.requirements = requirementsError;

  return errors;
}

export function Form({ onSuccess }: FormProps) {
  const [form, setForm] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    positions: "",
    roles: "",
    requirements: "",
    budget: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const updated = { ...form, [field]: value };
      const e = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: e[field as keyof FormErrors] }));
    }
  };

  const blur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const e = validate(form);
    setErrors((prev) => ({ ...prev, [field]: e[field as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        data.append(key, val);
      });

      const res = await submitHiringRequest(data);
      if (res.success) {
        onSuccess();
        setForm({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          positions: "",
          roles: "",
          requirements: "",
          budget: "",
        });
        setTouched({});
        setErrors({});
      } else {
        alert(res.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-2 rounded-4xl sm:rounded-3xl border border-border dark:border-white/10 shadow-xl shadow-cyan-500/5 overflow-hidden w-full">
      {/* Card top accent */}
      <div className="h-1.5 w-full bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500" />

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-6 sm:mb-8">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-text-primary mb-1 sm:mb-2">
            Hiring Request Form
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Tell us about your hiring needs. We'll get back within 24 hours.
          </p>
        </div>

        <form id="hire-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 sm:gap-6">
          {/* Row 1: Company + Contact Person */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <InputField id="companyName" label="Company Name" icon={<Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.companyName}>
              <input
                id="companyName"
                type="text"
                placeholder="e.g. Infosys Technologies"
                autoComplete="organization"
                value={form.companyName}
                onChange={(e) => set("companyName", e.target.value)}
                onBlur={() => blur("companyName")}
                className={getInputClass(errors.companyName)}
              />
            </InputField>

            <InputField id="contactPerson" label="Contact Person" icon={<User className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.contactPerson}>
              <input
                id="contactPerson"
                type="text"
                placeholder="e.g. Rajesh Kumar"
                autoComplete="name"
                value={form.contactPerson}
                onChange={(e) => set("contactPerson", e.target.value)}
                onBlur={() => blur("contactPerson")}
                className={getInputClass(errors.contactPerson)}
              />
            </InputField>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <InputField id="email" label="Email" icon={<Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.email}>
              <input
                id="email"
                type="email"
                placeholder="e.g. hr@company.com"
                autoComplete="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                onBlur={() => blur("email")}
                className={getInputClass(errors.email)}
              />
            </InputField>

            <InputField id="phone" label="Phone Number" icon={<Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.phone}>
              <div className={`flex items-stretch rounded-xl border overflow-hidden transition-all duration-200 ${
                errors.phone
                  ? "border-red-400 dark:border-red-500"
                  : "border-border dark:border-white/10 focus-within:border-cyan-500 hover:border-cyan-300 dark:hover:border-cyan-500/40 focus-within:ring-2 focus-within:ring-cyan-500/30"
              }`}>
                <span className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-dark-3 text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 border-r border-border dark:border-white/10 select-none shrink-0 flex items-center justify-center">
                  +91
                </span>
                <input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  maxLength={10}
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    set("phone", val);
                  }}
                  onBlur={() => blur("phone")}
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium bg-transparent text-text-primary placeholder:text-text-subtle outline-none min-w-0"
                />
              </div>
            </InputField>
          </div>

          {/* Row 3: Positions */}
          <InputField id="positions" label="No. of Positions" icon={<Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.positions}>
            <input
              id="positions"
              type="text"
              placeholder="e.g. 5"
              value={form.positions}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                set("positions", val);
              }}
              onBlur={() => blur("positions")}
              className={getInputClass(errors.positions)}
            />
          </InputField>

          {/* Role(s) Hiring For */}
          <InputField id="roles" label="Role(s) You Are Hiring For" icon={<FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.roles}>
            <input
              id="roles"
              type="text"
              placeholder="e.g. Senior React Developer, Product Manager"
              value={form.roles}
              onChange={(e) => set("roles", e.target.value)}
              onBlur={() => blur("roles")}
              className={getInputClass(errors.roles)}
            />
          </InputField>

          {/* Requirements */}
          <InputField id="requirements" label="Key Requirements & Job Description" icon={<FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />} error={errors.requirements}>
            <textarea
              id="requirements"
              rows={4}
              placeholder="Describe the ideal candidate profile, required skills, experience level, and any specific qualifications…"
              value={form.requirements}
              onChange={(e) => set("requirements", e.target.value)}
              onBlur={() => blur("requirements")}
              className={getInputClass(errors.requirements) + " resize-none min-h-[100px] sm:min-h-[120px]"}
            />
          </InputField>

          {/* Budget (optional) */}
          <InputField id="budget" label="Budget Range (Optional)" icon={<IndianRupee className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}>
            <input
              id="budget"
              type="text"
              placeholder="e.g. ₹8L – ₹15L per annum"
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
              className={getInputClass()}
            />
          </InputField>

          {/* Submit */}
          <motion.button
            id="hire-submit-btn"
            type="submit"
            disabled={submitting}
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
            className="relative w-full py-3.5 sm:py-4 rounded-xl font-display font-bold text-sm sm:text-base text-white bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-200 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden mt-2"
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />

            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting…
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Submit Hiring Request
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </span>
            )}
          </motion.button>

          <p className="text-[10px] sm:text-xs text-text-muted text-center leading-relaxed">
            By submitting, you agree to our{" "}
            <span className="text-cyan-600 dark:text-cyan-400 underline underline-offset-2 cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-cyan-600 dark:text-cyan-400 underline underline-offset-2 cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
              Terms of Service
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
