export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-full flex flex-col">
    


      <div className="flex-1">
        {children}
      </div>
    </section>
  )
}
