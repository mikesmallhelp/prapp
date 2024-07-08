/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/PRXJ3xxPhWh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="flex flex-col items-start gap-4 border-r bg-background p-4">
        <h1 className="mb-4 text-2xl font-bold">Padel Games</h1>
        <Link
          href="#"
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <LayoutGridIcon className="h-5 w-5 text-muted-foreground" />
          Ranking
        </Link>
        <Link
          href="#"
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <PlusIcon className="h-5 w-5 text-muted-foreground" />
          Add Result
        </Link>
        <Link
          href="#"
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <UserPlusIcon className="h-5 w-5 text-muted-foreground" />
          Add Player
        </Link>
      </aside>
      <div className="flex-1 p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ranking</CardTitle>
              <CardDescription>View the latest results from your games.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Games</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Keijo</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>25</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Matti</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>23</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Paavo</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Taina</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>14</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>View the latest results from your games.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Team 1</TableHead>
                    <TableHead>Team 2</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>8.7.2024 10:50</TableCell>
                    <TableCell>Keijo&Matti</TableCell>
                    <TableCell>Paavo&Taina</TableCell>
                    <TableCell>6-4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8.7.2024 10:07</TableCell>
                    <TableCell>Taina&Keijo</TableCell>
                    <TableCell>Matti&Paavo</TableCell>
                    <TableCell>3-6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>7.7.2024 15:08</TableCell>
                    <TableCell>Matti&Taina</TableCell>
                    <TableCell>Paavo&Keijo</TableCell>
                    <TableCell>2-6</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function UserPlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}
