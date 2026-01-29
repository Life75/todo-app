export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-full flex flex-col">
      <div className="border-b pb-2 mb-4">
        Notes Toolbar
      </div>


      <div className="flex-1">
        {children}
      </div>
    </section>
  )
}
