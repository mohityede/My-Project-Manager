

function MembersTable({users}) {
    // console.log(users)
  return (
    <>
    <div>
    <table className="table-auto border-collapse border border-slate-600 w-full">
  <thead>
    <tr>
      <th className="border border-slate-600">Sr. No.</th>
      <th className="border border-slate-600">Name</th>
      <th className="border border-slate-600">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((u,i)=>(
            <tr>
            <td className="border border-slate-600">{i+1}</td>
            <td className="border border-slate-600">Mohit</td>
            <td className="border border-slate-600">{u}</td>
            </tr>
        ))
    }
  </tbody>
</table>
    </div>
    </>
  )
}

export default MembersTable
