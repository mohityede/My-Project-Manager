import { useForm } from "react-hook-form"
import { DialogClose } from "../ui/dialog"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { inviteUser } from "@/redux/project/action";

function InviteUserForm({projectId}) {
  const dispatch=useDispatch();
  const form=useForm({
    defaultValues:{
      email:""
    }
  })

  const onSubmit=(formData)=>{
    console.log("invite user data",formData)
    dispatch(inviteUser({email:formData.email,projectId}))
  }
  return (
    <>
    <div>
    <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control}
          name="email"
          render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} 
              
                type="text" 
                className="border border-primary w-full py-5 px-5"
                placeholder="User email address..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />         
          
          <DialogClose>            
              <Button type="submit" className="w-full py-5 mt-3">Invite User</Button>              
          </DialogClose>
        </form>
      </Form>
    </div>
    </>
  )
}

export default InviteUserForm
