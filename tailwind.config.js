/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Paths to your template files
  content: [
    "./src/**/*.{ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",      // Adds 'border-border'
        background: "hsl(var(--background))", // Adds 'bg-background'
        foreground: "hsl(var(--foreground))", // Adds 'text-foreground'
      },
    },
  },
  plugins: [],
}