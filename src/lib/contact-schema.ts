import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters)."),
  email: z.string().trim().email("Enter a valid email address, for example name@company.com."),
  subject: z.string().trim().min(3, "Enter a subject (at least 3 characters)."),
  message: z.string().trim().min(10, "Write a message of at least 10 characters.").max(4000, "Keep the message under 4,000 characters."),
  website: z.string().max(0).optional(), // honeypot
});
export type ContactInput = z.infer<typeof contactSchema>;
