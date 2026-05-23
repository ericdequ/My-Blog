export default function PageTitle({ children }) {
  return (
    <h1 className="text-balance text-3xl font-black leading-tight text-gray-950 dark:text-white sm:text-4xl md:text-5xl xl:text-6xl">
      {children}
    </h1>
  )
}
