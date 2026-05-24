import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patient Symptom Timeline Builder',
  description: 'Build visual timelines of patient symptoms for doctor appointments',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e03acbf4-b0ac-4aa1-97dd-ae40e014984f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
