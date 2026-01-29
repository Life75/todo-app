"use client";

export function TextArea() {
  return (
      <textarea
        placeholder="Type here..."
        rows={20}
        spellCheck={false}
        className="
          w-full
          bg-transparent
          border-none
          outline-none
          resize-none
          overflow-hidden
          hover-none

          px-0 py-0
          text-base
          leading-relaxed
          caret-primary

        "
        onInput={(e) => {
          const el = e.currentTarget
          el.style.height = "auto"
          el.style.height = `${el.scrollHeight}px`
        }}
      />
  )
}

