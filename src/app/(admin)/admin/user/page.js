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
        ProfileImage: 'https://images.unsplash.com/photo-1678286742832-26543bb49959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        FullName: 'Aliraza',
        Email: 'aliraza@gmail.com',
        Location: 'Karachi',
        Event: 5
    },
    {
        ProfileImage: 'https://images.unsplash.com/photo-1678286742832-26543bb49959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        FullName: 'raza',
        Email: 'raza@gmail.com',
        Location: 'Karachi',
        Event: 5
    }, {
        ProfileImage: 'https://images.unsplash.com/photo-1678286742832-26543bb49959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        FullName: 'Ali',
        Email: 'ali@gmail.com',
        Location: 'Karachi',
        Event: 5
    }
]

export default function Users() {
    return (
        <div className='p-4'>
            <div className="flex justify-between items-center my-4">
                <h1 className="font-bold text-xl">Users</h1>

            </div>

            <Table >
                <TableCaption>A list of your recent users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >ProfileImage</TableHead>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead >Events</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.FullName}>
                            <TableCell><img className="w-16 rounded-sm  h-24" src={invoice.ProfileImage} /></TableCell>
                            <TableCell >{invoice.FullName}</TableCell>
                            <TableCell>{invoice.Email}</TableCell>
                            <TableCell >{invoice.Location}</TableCell>
                            <TableCell >{invoice.Event}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    )
}


