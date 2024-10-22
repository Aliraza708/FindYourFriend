

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    Thumbnail: 'https://images.unsplash.com/photo-1624825602528-2ac658281cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D',
    Title: 'Cricket',
    Description: 'I love Cricket',
    Location: 'Karachi',
    Date: new Date().toLocaleDateString()
  },
  {
    Thumbnail: 'https://plus.unsplash.com/premium_photo-1681840993265-58ea98d86a8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJpcnRoZGF5fGVufDB8fDB8fHww',
    Title: 'Birthday',
    Description: 'my birthday',
    Location: 'Karachi',
    Date: new Date().toLocaleDateString()
  }, {
    Thumbnail: 'https://images.unsplash.com/photo-1629131973019-56596eb9975a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGp1bW1haCUyMG11YmFyYWt8ZW58MHx8MHx8fDA%3D',
    Title: 'Jumma Mubarak',
    Description: 'Jumma Mubarak',
    Location: 'Karachi',
    Date: new Date().toLocaleDateString()
  }
]

export default function Event() {
  return (
    <div className='p-4'>

      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Events</h1>

      </div>
      <Table >
        <TableCaption>A list of your recent Events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead >Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.Title}>
              <TableCell><img className="w-16 rounded-sm  h-24" src={invoice.Thumbnail} /></TableCell>
              <TableCell >{invoice.Title}</TableCell>
              <TableCell className='w-96 text-left'>{invoice.Description}</TableCell>
              <TableCell >{invoice.Location}</TableCell>
              <TableCell >{invoice.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  )
}




