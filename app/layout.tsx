export const metadata = {
  title: 'Dealer Buy Box',
  description: 'A web application for auto dealers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
