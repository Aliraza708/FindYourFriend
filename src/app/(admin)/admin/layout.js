
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function Layout({ children }) {
    

    return (
        <html>
            <body>
                <Tabs defaultValue="dashbord" className="w-full ">
                    <TabsList className='w-full pt-3 h-16 text-2xl'>
                        <Link href={"/admin/dashbord"}>
                            <TabsTrigger className='text-xl  ' value="dashbord">Dashbord</TabsTrigger>
                        </Link>
                        <Link href={'/admin/user'}>
                            <TabsTrigger className='text-xl ' value="user">Users</TabsTrigger>
                        </Link>
                        <Link href={"/admin/event"}>

                            <TabsTrigger className='text-xl ' value="event">Events</TabsTrigger>
                        </Link>
                        <Link href={"/admin/category"}>
                            <TabsTrigger className='text-xl ' value="category">Categories</TabsTrigger>
                        </Link>
                        <Link href={"/admin/subcategory"}>
                            <TabsTrigger className='text-xl ' value="subcategory">SubCategories</TabsTrigger>

                        </Link>

                    </TabsList>
                    <TabsContent value="dashbord">{children}</TabsContent>
                    <TabsContent value="user">{children}</TabsContent>
                    <TabsContent value="event">{children}</TabsContent>
                    <TabsContent value="category">{children}</TabsContent>
                    <TabsContent value="subcategory">{children}</TabsContent>
                </Tabs>

            </body>
        </html>
    )
}