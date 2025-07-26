# Frontend Assessment - 10 Minutes School

This project is a Next.js application built with TypeScript and TailwindCSS as part of the frontend assessment for 10 Minutes School.

---

## Project Overview

This application fetches and displays product details for the IELTS course from the 10 Minutes School public API. It includes the following features:

- Course Instructor section  
- Product Trailer (media slider with YouTube player)  
- Course layout and features  
- What you will learn by doing the course  
- Course details with collapsible sections  
- Testimonials section  
- Advertisement section  
- Media tile card displayed on the right side for specific sections  
- Localization support (English and optionally other languages)  
- Server-side rendering (SSR) using Next.js  
- SEO support with dynamic metadata  
- TypeScript for type safety  
- Responsive UI with TailwindCSS  

---

## Important Notes on API and Instructions

The assessment instructions mentioned:

- **Course Exclusive Feature** would be in sections array with type `"instructor"`.  
- **Course Instructors** would also be in sections array with type `"instructor"`.  

However, after inspecting the actual API response, the **Course Exclusive Feature** data is found under the type `"feature_explanations"`. So, in this project:

- **Course Instructors** data is fetched from sections with type `"instructors"`  
- **Course Exclusive Feature** data is fetched from sections with type `"feature_explanations"`  

This difference was important to properly display the correct data for each section.

---

## Environment Variables

The project requires an environment variable for the API base URL:

```bash
TM_PUBLIC_API_BASE=PUBLIC_API
