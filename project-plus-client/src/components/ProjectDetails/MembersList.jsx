import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { ScrollArea } from "../ui/scroll-area"
import { Table, TableBody, TableHead, TableHeader, TableRow,TableCell } from "../ui/table"
import DataTable from "./DataTable"

function MembersList({users}) {
  const data=[]
    // console.log(users)
    users.map((u,ind)=>{
      data.push({srNo:ind,name:u,email:u})
    })
  return (
    <>
    <div>
      <ScrollArea>
        <div className="container mx-auto max-h-[60vh]">
          <DataTable columns={columns} data={data} />
        </div>

      </ScrollArea>
    </div>
    {/* <ScrollArea className="h-fit">
    <div>
      <h1>list</h1>
      {
        <div>
          {
            users.map((u)=>{
              return <div>
                <span>1.</span>
                <span> Mohit</span>

              </div>
            })
          }
        </div>
      }
    </div>
    </ScrollArea> */}
    </>
  )
}

export default MembersList


const columns = [
  {
    accessorKey: "srNo",
    header: "Sr. No.",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]
