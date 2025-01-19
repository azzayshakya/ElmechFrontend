import { z } from "zod";

export const talkWithUsSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    mobile: z.string().length(10, "Mobile number must be 10 digits"),
    location: z.string().min(1, "Location is required"),
    message: z.string().min(1, "Message is required"),
});
