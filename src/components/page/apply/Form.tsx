"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { InputField, getInputClass } from "./InputField";
import { submitApplication } from "@/app/actions";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Upload,
  CheckCircle,
  ChevronDown,
  FileText,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMinLength,
  validateRequired,
} from "@/utils/validation";

interface FormProps {
  onSuccess: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  message: string;
  resume: File | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: string;
  message?: string;
  resume?: string;
}

const ROLES = [
  "HR",
  "IT",
  "Recruitment",
  "Sales",
  "Marketing",
  "Finance",
  "Customer Support",
  "Operations",
  "Design",
  "Other",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  const nameError = validateName(data.name, "Name is required.");
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const addressError = validateRequired(data.address, "Address is required.");
  if (addressError) errors.address = addressError;

  const roleError = validateRequired(data.role, "Please select a role.");
  if (roleError) errors.role = roleError;

  if (!data.resume) {
    errors.resume = "Please upload your resume.";
  }

  return errors;
}

export function Form({ onSuccess }: FormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    message: "",
    resume: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormData, value: string | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const updated = { ...form, [field]: value };
      const e = validate(updated as FormData);
      setErrors((prev) => ({ ...prev, [field]: e[field] }));
    }
  };

  const blur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const e = validate(form);
    setErrors((prev) => ({ ...prev, [field]: e[field] }));
  };

  const handleFile = (file: File | null) => {
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({ ...prev, resume: "Only PDF or Word documents accepted." }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: "File must be under 5 MB." }));
      return;
    }
    set("resume", file);
    setErrors((prev) => ({ ...prev, resume: undefined }));
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
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("address", form.address);
      data.append("role", form.role);
      data.append("message", form.message);
      if (form.resume) {
        data.append("resume", form.resume);
      }

      const res = await submitApplication(data);
      if (res.success) {
        onSuccess();
        setForm({ name: "", email: "", phone: "", address: "", role: "", message: "", resume: null });
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
    <div className="bg-white dark:bg-dark-2 rounded-3xl border border-border dark:border-white/10 shadow-xl shadow-indigo-500/5 overflow-hidden">
      {/* Card top accent */}
      <div className="h-1.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      <div className="p-8 sm:p-10">
        <div className="mb-8">
          <h2 className="font-display font-extrabold text-2xl text-text-primary mb-1">
            Application Form
          </h2>
          <p className="text-sm text-text-muted">
            All fields are required. We respect your privacy.
          </p>
        </div>

        <form id="apply-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <InputField id="name" label="Full Name" icon={<User className="w-4 h-4" />} error={errors.name}>
              <input
                id="name"
                type="text"
                placeholder="e.g. Priya Sharma"
                autoComplete="name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                onBlur={() => blur("name")}
                className={getInputClass(errors.name)}
              />
            </InputField>

            {/* Email */}
            <InputField id="email" label="Email Address" icon={<Mail className="w-4 h-4" />} error={errors.email}>
              <input
                id="email"
                type="email"
                placeholder="e.g. priya@example.com"
                autoComplete="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                onBlur={() => blur("email")}
                className={getInputClass(errors.email)}
              />
            </InputField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <InputField id="phone" label="Phone Number" icon={<Phone className="w-4 h-4" />} error={errors.phone}>
              <div className={`flex items-stretch rounded-xl border overflow-hidden transition-all duration-200 ${
                errors.phone
                  ? "border-red-400 dark:border-red-500"
                  : "border-border dark:border-white/10 focus-within:border-indigo-500 hover:border-indigo-300 dark:hover:border-indigo-500/40 focus-within:ring-2 focus-within:ring-indigo-500/30"
              }`}>
                <span className="px-4 py-3 bg-gray-50 dark:bg-dark-3 text-sm font-bold text-indigo-600 dark:text-indigo-400 border-r border-border dark:border-white/10 select-none shrink-0 flex items-center justify-center">
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
                  className="flex-1 px-4 py-3 text-sm font-medium bg-transparent text-text-primary placeholder:text-text-subtle outline-none"
                />
              </div>
            </InputField>

            {/* Role */}
            <InputField id="role" label="Looking For Which Role" icon={<Briefcase className="w-4 h-4" />} error={errors.role}>
              <div className="relative">
                <select
                  id="role"
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                  onBlur={() => blur("role")}
                  className={getInputClass(errors.role) + " appearance-none pr-10 cursor-pointer"}
                >
                  <option value="">Select a role…</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              </div>
            </InputField>
          </div>

          {/* Address */}
          <InputField id="address" label="Address" icon={<MapPin className="w-4 h-4" />} error={errors.address}>
            <textarea
              id="address"
              rows={3}
              placeholder="e.g. 12, MG Road, Bangalore, Karnataka – 560001"
              autoComplete="street-address"
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
              onBlur={() => blur("address")}
              className={getInputClass(errors.address) + " resize-none"}
            />
          </InputField>

          {/* Message */}
          <InputField id="message" label="Message" icon={<MessageSquare className="w-4 h-4" />} error={errors.message}>
            <textarea
              id="message"
              rows={3}
              placeholder="Enter a message (Optional)"
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              onBlur={() => blur("message")}
              className={getInputClass(errors.message) + " resize-none"}
            />
          </InputField>

          {/* Resume Upload */}
          <InputField id="resume" label="Upload Resume" icon={<FileText className="w-4 h-4" />} error={errors.resume}>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                const f = e.dataTransfer.files[0];
                handleFile(f);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`relative flex flex-col items-center justify-center gap-3 p-8 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
                dragOver
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 scale-[1.01]"
                  : errors.resume
                  ? "border-red-400 dark:border-red-500 bg-red-50/50 dark:bg-red-500/5"
                  : form.resume
                  ? "border-emerald-400 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10"
                  : "border-border dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5"
              }`}
            >
              <input
                ref={fileInputRef}
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
              />

              {form.resume ? (
                <>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {form.resume.name}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {(form.resume.size / 1024).toFixed(0)} KB — Click to change
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-text-primary">
                      Drop your resume here,{" "}
                      <span className="text-indigo-600 dark:text-indigo-400">or browse</span>
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      PDF or Word — Max 5 MB
                    </p>
                  </div>
                </>
              )}
            </div>
          </InputField>

          {/* Submit */}
          <motion.button
            id="apply-submit-btn"
            type="submit"
            disabled={submitting}
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.97 }}
            className="relative w-full py-4 rounded-xl font-display font-bold text-base text-white bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow duration-200 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />

            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting…
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </motion.button>

          <p className="text-xs text-text-muted text-center">
            By submitting, you agree to our{" "}
            <span className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
