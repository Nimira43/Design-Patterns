export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <div className='h-screen flex'>
        Dashboard
        {children}
      </div>
    </html>
  )
}