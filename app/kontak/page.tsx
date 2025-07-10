import dynamic from "next/dynamic"

const KontakClient = dynamic(() => import("./KontakClient"), { ssr: false })

export default function Page() {
  return <KontakClient />
}
